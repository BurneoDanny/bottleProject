import gsap from 'gsap';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';
import { useEffect } from 'react';

export default function Section6() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo("#texto1",
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: "#section2",
                    start: "70% top",
                    end: "70% top",
                    scrub: 2.5,
                    toggleActions: "restart pause reverse pause"
                }
            }
        );

        gsap.fromTo("#texto2",
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: "#texto1",
                    start: "70% top",
                    end: "70% top",
                    scrub: 2.5,
                    toggleActions: "restart pause reverse pause"
                }
            }
        );

        gsap.fromTo("#texto3",
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: "#texto2",
                    start: "70% top",
                    end: "70% top",
                    scrub: 2.5,
                    toggleActions: "restart pause reverse pause"
                }
            }
        );

        gsap.fromTo("#texto4",
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: "#texto3",
                    start: "70% top",
                    end: "70% top",
                    scrub: 2.5,
                    toggleActions: "restart pause reverse pause"
                }
            }
        );

    }, []);

    return (
        <>
            <div id='texto1' className="h-screen relative flex justify-center items-center text-center w-full px-32">
                <h1 className="text-white text-6xl font-bold">Se estima que solo el 9% de todo el plástico producido se recicla, lo que significa que la gran mayoría de las botellas de plástico terminan en vertederos o en el océano.</h1>
            </div>
            <div id='texto2' className="h-screen relative flex justify-center items-center text-center w-full px-32">
                <h1 className="text-white text-6xl font-bold">La mayoría de las botellas de plástico no biodegradables se descomponen en microplásticos, que son ingeridos por la vida marina y pueden terminar en nuestra cadena alimentaria.</h1>
            </div>
            <div id='texto3' className="h-screen relative flex justify-center items-center text-center w-full px-32">
                <h1 className="text-white text-6xl font-bold">Los botellones de agua de plástico duro también contribuyen a la contaminación, ya que muchos de ellos no se reciclan adecuadamente y terminan en vertederos o en la naturaleza.</h1>
            </div>
            <div id='texto4' className="h-screen relative flex justify-center items-center text-center w-full px-32">
                <h1 className="text-white text-6xl font-bold">Cada año, se usan más de 480 mil millones de botellas de plástico en todo el mundo, suficientes para dar la vuelta a la Tierra más de 1900 veces.</h1>
            </div>
        </>
    );
}
