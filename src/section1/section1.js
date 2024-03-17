import './section1.css';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';

export default function Section1() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo("#sectione",
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: "#scene",
                    start: "70% top",
                    end: "70% top",
                    scrub: 2.5,
                    toggleActions: "restart pause reverse pause"
                }
            }
        );

    }, []);

    return (
        <div id="sectione" className="relative h-screen grid grid-cols-2 items-center justify-center mt-52">
            <div className='flex flex-col justify-center items-center relative h-full mx-3 '>
                <div id="img1">
                </div>
                <h1 className='text-white z-10 font-medium text-4xl'>Y por alguna razon</h1>
            </div>
            <div className='flex flex-col justify-start items-center  relative h-full mx-3 rounded-sm'>
                <div id="img2">
                </div>
                <h1 className='text-white z-10 font-medium text-4xl pt-10'>Nuestro hogar esta siendo contaminado.</h1>
            </div>

        </div>
    );
}
