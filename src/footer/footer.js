import React, { useEffect } from 'react';

export default function Footer() {



    return (

        <div className="h-min flex flex-col justify-end items-center bg-[#333333] text-white relative z-10">
            <p>&copy; {new Date().getFullYear()} SM. All rights reserved.</p>
        </div>

    );
}
