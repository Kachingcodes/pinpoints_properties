import React from 'react';
import { ImOffice } from "react-icons/im";
import { GiFamilyHouse } from "react-icons/gi";
import { MdOutlineNightlife } from "react-icons/md";


const Slider1 = () => {
  return (
    <div className='w-full relative flex md:flex-row flex-col items-center justify-center gap-4 md:gap-6 text-black p-3'>
        
        <div className="bg-[#e0bca3] w-80 h-[260px] md:h-[400px] p-5 rounded-2xl shadow-md shadow-black text-black flex flex-col 
                md:justify-between justify-evenly transition duration-500 transform hover:scale-105">
            <p className='text-2xl'><GiFamilyHouse/></p>
            <h1 className="text-sm md:text-lg font-serif leading-relaxed text-justify">
                Living here has been a peaceful experience. The building is well-maintained, security is top-notch, 
                and the response to maintenance requests is always prompt. I’ve renewed my lease twice now without hesitation.”
            </h1>
            <p className="mt-4 text-xs md:text-sm italic font-semibold text-right">— Mrs. Funmi Adewale, Tenant</p>
        </div>

        <div className="bg-[#471e02] w-80 h-[300px] md:h-[400px] p-5 rounded-2xl shadow-md shadow-zinc-900 text-white 
                justify-evenly flex flex-col md:justify-between transition duration-500 transform hover:scale-105">
            <p className='text-2xl'><ImOffice/></p>
           <h1 className="text-sm md:text-lg font-serif leading-relaxed md:text-justify">The office space we rented has been perfect for our team. It’s in a great location with reliable utilities and constant cleanliness. Our clients are always impressed with the environment.</h1>
           <p className="mt-4 text-sm italic font-semibold text-right">— Chuka Eze, Founder, EzeTech Solutions</p>
        </div>

        <div className="bg-[#bea391] w-80 h-[300px] md:h-[400px] p-5 rounded-2xl shadow-md shadow-black text-black flex flex-col justify-between transition duration-500 transform hover:scale-105">
            <p className='text-2xl'><MdOutlineNightlife/></p>
           <h1 className="text-sm md:text-lg font-serif leading-relaxed text-justify">The event hall is spacious, beautifully lit, and very accommodating for both large and intimate gatherings. We’ve hosted several weddings here and our clients are always pleased.</h1>
           <p className="mt-4 text-sm italic font-semibold text-right">— Femi Martins, Lead Planner, Glitz & Grace Events</p>
        </div>
    </div>
  );
};

export default Slider1;