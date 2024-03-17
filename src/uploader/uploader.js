import { useState, useEffect } from "react";
import * as tf from '@tensorflow/tfjs';

export default function Uploader() {

    const [selectedImage, setSelectedImage] = useState(null);
    const [model, setModel] = useState(null);
    const [prediction, setPrediction] = useState(null);

    const modelJSON = `${process.env.REACT_APP_MODEL_JSON_URL}/models/model.json`;

    useEffect(() => {

        const loadModel = async () => {
            console.log("Attempting to load model...");
            try {
                const model = await tf.loadLayersModel(modelJSON);
                console.log("Model loaded:", model);
                setModel(model);
            } catch (e) {
                console.log("[LOADING ERROR] info:", e);
            }
        };

        loadModel();
    }, []);




    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && model) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
                predictImage(file);
            };
            reader.readAsDataURL(file);
        }
    };

    const predictImage = async (file) => {
        const image = new Image();
        image.src = URL.createObjectURL(file);
        image.onload = async () => {
            const tensor = tf.browser.fromPixels(image).toFloat();
            const grayscale = tf.image.rgbToGrayscale(tensor);
            const resized = tf.image.resizeNearestNeighbor(grayscale, [150, 150]).expandDims();

            const prediction = model.predict(resized);
            const result = await prediction.data();

            setPrediction(result[0] > 0.5 ? 'Botella' : 'Botellon');
        };
    };

    return (
        <div className="bg-black flex flex-col justify-start items-center relative z-10 min-h-[200px]">
            <div className="flex flex-col justify-start items-center">
                <h1 className="text-white text-4xl text-center pt-10">Averigualo ya!</h1>
                <label for="fileUpload" className="bg-white border border-black rounded-md py-2 px-4 transition-all duration-300 hover:bg-black hover:border hover:border-white hover:text-white cursor-pointer">
                    Sube una imagen aquí
                </label>
                <input id="fileUpload" style={{ display: "none" }} type="file" accept="image/*" onChange={handleFileChange} />
            </div>
            <section>
                {selectedImage && (
                    <div className="mt-4 flex flex-col justify-center items-center gap-4">
                        <h1 className="font-bold text-6xl">Resultados</h1>
                        <img className="rounded-md h-96 w-96" src={selectedImage} alt="Uploaded bottle-img" />
                        <h1 className="font-bold text-xl">{prediction}</h1>
                    </div>
                )}
            </section>
        </div>
    );
}
