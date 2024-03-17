
import "./section2.css";
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';

export default function Section2() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo("#section2",
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: "#section3",
                    start: "60% top",
                    end: "60% top",
                    scrub: 2.5,
                    toggleActions: "restart pause reverse pause"
                }
            }
        );

    }, []);

    return (
        <div id="section2" className="h-screen grid grid-cols-4 grid-rows-3 items-center justify-center mt-32 py-14 px-52 gap-2">
            <div className='row-span-2 flex flex-col relative h-full '>
                <div id="bento1">
                </div>
            </div>
            <div className='col-span-2 flex flex-col justify-center items-center relative h-full '>
                <div id="bento2">
                </div>
                <h1 className='text-[#ff0000] text-border z-10 font-medium text-4xl text-center'>480 mil millones de botellas de plástico al año.</h1>
            </div>
            <div className='row-span-2 flex flex-col justify-center items-center relative h-full '>
                <div id="bento3">
                </div>
            </div>
            <div className='col-span-2 flex flex-col justify-center items-center relative h-full '>
                <div id="bento4">
                </div>
            </div>
            <div className='col-span-2 flex flex-col justify-center items-center relative h-full '>
                <div id="bento5">
                </div>
                <h1 className='text-white z-10 font-medium text-4xl text-center'> Las botellas de plástico pueden tardar hasta 450 años en descomponerse en el medio ambiente.</h1>
            </div>
            <div className='col-span-2 flex flex-col justify-center items-center relative h-full '>
                <div id="bento6">
                </div>
                <h1 className='text-white z-10 font-medium text-4xl text-center'>Nuestro planeta no necesita más botellas de plástico, necesita más conciencia.</h1>
            </div>
        </div>
    );
}
