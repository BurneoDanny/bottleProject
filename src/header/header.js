import React, { useEffect } from 'react';
import './header.css';
import gsap from 'gsap';

export default function Header() {

    useEffect(() => {
        const animate = document.getElementById('animate');
        gsap.from(animate, {
            yPercent: 100,
            duration: 1,
            ease: "power4.out",
            delay: 0.5
        });
        gsap.to(animate, {
            yPercent: 0,
            duration: 1,
            ease: "power4.out",
            delay: 0.5
        });
    }, []);

    return (

        <div id='header' className="h-screen flex flex-col justify-end items-center overflow-hidden ">
            <div id='background-img'></div>
            <div className='text-center text-white mb-4' id='animate'>
                <h3 className=' text-3xl font-medium'>Salvando al</h3>
                <h1 className='leading-none text-[15rem] font-semibold'>Mundo</h1>
            </div>
        </div>

    );
}
