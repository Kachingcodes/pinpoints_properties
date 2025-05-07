import React from 'react';
import { GiFamilyHouse, GiShop } from "react-icons/gi";
import { ImOffice } from "react-icons/im";


const Slider3 = () => {
  return (
    <div className='w-full relative flex md:flex-row flex-col items-center justify-center gap-4 md:gap-6 text-black p-3'>
        
      <div className="bg-[#d1ab92] w-80 h-[260px] md:h-[400px] p-5 rounded-2xl shadow-md shadow-black text-black flex flex-col 
        md:justify-between justify-evenly transition duration-500 transform hover:scale-105">
         <p className='text-2xl'><GiFamilyHouse/></p>
         <h1 className="text-sm md:text-lg font-serif leading-relaxed text-justify">This house became a home the moment we moved in. It’s spacious, safe for kids, and located near good schools and shops. Estate management is responsive and professional.</h1>
         <p className="mt-4 text-sm italic font-semibold text-right">— Mr. & Mrs. Johnson Umeh</p>
      </div>

      <div className="bg-[#382011] w-80 h-[260px] md:h-[400px] p-5 rounded-2xl shadow-md shadow-black text-white flex flex-col justify-between transition duration-500 transform hover:scale-105">
         <p className='text-2xl'><ImOffice/></p>
         <h1 className="text-sm md:text-lg font-serif leading-relaxed text-justify">I’ve worked in several co-working spaces, but this one stands out. It’s quiet, professional, and well-equipped. It allows me to focus without distractions.</h1>
         <p className="mt-4 text-sm italic font-semibold text-right">— Tunde Bello, Freelance Graphic Designer</p>
      </div>

      <div className="bg-[#9d5729d6] w-80 h-[260px] md:h-[400px] p-5 rounded-2xl shadow-md shadow-black text-black flex flex-col justify-between transition duration-500 transform hover:scale-105">
         <p className='text-2xl'><GiShop/></p>
         <h1 className="text-sm md:text-lg font-serif leading-relaxed text-justify">As a shop owner, location and accessibility are everything. This place ticks all the boxes. Foot traffic is high, and the management is supportive and understanding.</h1>
         <p className="mt-4 text-sm italic font-semibold text-right">— Amaka Okoro, CEO, Amaktrends</p>
      </div>

    </div>
  );
};

export default Slider3;
