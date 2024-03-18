import { useState, useEffect } from "react";
import axios from "axios";


export default function Uploader() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [prediction, setPrediction] = useState(null);

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('file', file);

            try {
                // Usa Axios para enviar la solicitud POST
                const response = await axios.post(`http://localhost:5000/predict`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                console.log(response.data.prediction);
                setPrediction(response.data.prediction);

                // Lee y muestra la imagen seleccionada
                const reader = new FileReader();
                reader.onloadend = () => {
                    setSelectedImage(reader.result);
                };
                reader.readAsDataURL(file);
            } catch (error) {
                console.error('Error al enviar la imagen:', error);
            }
        }
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
                        <h1 className="font-bold text-6xl text-white">Resultados</h1>
                        <img className="rounded-md h-96 w-96" src={selectedImage} alt="Uploaded bottle-img" />
                        <h1 className="font-bold text-xl text-white">{prediction}</h1>
                    </div>
                )}
            </section>
        </div>
    );
}
