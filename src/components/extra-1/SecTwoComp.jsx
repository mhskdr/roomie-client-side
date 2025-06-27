import React, { useEffect } from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { SlLocationPin } from 'react-icons/sl';
import AOS from 'aos';
import 'aos/dist/aos.css';


const SecTwoComp = ({ data }) => {

    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <div
            data-aos="fade-up"
            className="relative w-80 overflow-hidden rounded-xl shadow-lg group cursor-pointer mx-auto"
        >
            {/* Background Image */}
            <img
                src={data.url}
                alt={data.name}
                className="w-full h-full object-cover transition duration-500 group-hover:blur-sm"
            />

            {/* Icon */}
            <SlLocationPin className="absolute top-3 left-3 w-8 h-8 text-white drop-shadow" />

            {/* Hover Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-white px-4 text-center translate-y-full group-hover:translate-y-0">
                <h2 className="text-3xl font-bold mb-1">{data.name}</h2>
                <p className="text-sm mb-4">Bangladesh</p>
                <div className="flex items-center gap-2 text-lg">
                    <FaMapMarkerAlt />
                    <span>{data.users}+ users</span>
                </div>
            </div>
        </div>
    );
};

export default SecTwoComp;