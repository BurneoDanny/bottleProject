import botella from "../imgs/botellass.png";
import botellon from "../imgs/botellones.png"
import gsap from 'gsap';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';
import { useEffect } from 'react';

export default function Section5() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo("#scene",
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: "#header",
                    start: "70% top",
                    end: "70% top",
                    scrub: 2.5,
                    toggleActions: "restart pause reverse pause"
                }
            }
        );

    }, []);
    return (
        <div id="scene" className="h-screen relative flex justify-center items-center">
            <img src={botella} className="w-20 absolute z-10 left-20 top-10 rotate-3" />
            <h1 className="text-white text-6xl font-bold">Sistema de reconocimiento por imagenes de botellas y botellones</h1>
            <img src={botellon} className="w-28 absolute z-10 right-20 top-40 -rotate-3" />
            <img src={botella} className="w-20 absolute z-10 left-50 bottom-10 -rotate-6" />
        </div>
    );
}
