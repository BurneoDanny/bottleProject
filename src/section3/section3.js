
import "./section3.css";
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';

export default function Section3() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo("#section3",
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: "#sectione",
                    start: "60% top",
                    end: "60% top",
                    scrub: 2.5,
                    toggleActions: "restart pause reverse pause"
                }
            }
        );

    }, []);

    return (
        <div id="section3" className="h-screen flex flex-col items-center justify-center mt-52">
            <div className='flex flex-col justify-center items-center relative h-full mx-6 px-2 '>
                <div id="img5">
                </div>
                <h1 className='text-white z-10 font-medium text-4xl'>Lo seguimos contaminando.</h1>
            </div>

        </div>
    );
}
