import React from 'react';
import { GiFamilyHouse, GiShop } from "react-icons/gi";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";




const Slider2 = () => {
  return (
    <div className='w-full relative flex md:flex-row flex-col items-center justify-center gap-4 md:gap-6 text-black p-3'>
        
      <div className="bg-[#2d231c] w-80 h-[260px] md:h-[400px] p-5 rounded-2xl shadow-md shadow-black text-white flex flex-col justify-between transition duration-500 transform hover:scale-105">
         <p className='text-2xl'><GiFamilyHouse/></p>
         <h1 className="text-sm md:text-lg font-serif leading-relaxed text-justify">It’s not easy finding a modern, affordable mini flat in a secure area, but I did here. Everything from water supply to power backup works well. I’m glad I chose this place.</h1>
         <p className="mt-4 text-sm italic font-semibold text-right">— Damilola Ayeni, Digital Marketer</p>
      </div>

      <div className="bg-[#ac7e60] w-80 h-[260px] md:h-[400px] p-5 rounded-2xl shadow-md shadow-black text-black flex flex-col justify-between transition duration-500 transform hover:scale-105">
         <p className='text-2xl'><GiShop/></p>
         <h1 className="text-sm md:text-lg font-serif leading-relaxed text-justify">Starting small can be tough, but this location gave me visibility and a supportive community. Rent is fair and I’ve grown my business thanks to the exposure.</h1>
         <p className="mt-4 text-sm italic font-semibold text-right">— Linda Nwachukwu, Owner, Sweet Bites Confectionery</p>
      </div>

      <div className="bg-[#2d1302] w-80 h-[260px] md:h-[400px] p-5 rounded-2xl shadow-md shadow-black text-white flex flex-col justify-between transition duration-500 transform hover:scale-105">
         <p className='text-2xl'><HiOutlineBuildingLibrary/></p>
         <h1 className="text-sm md:text-lg font-serif leading-relaxed text-justify">We’ve used the hall for church meetings and outreach programs. It’s always clean, well-ventilated, and the staff are helpful. Highly recommended for community events.</h1>
         <p className="mt-4 text-sm italic font-semibold text-right">— Pastor Emmanuel Idoko, RCCG Christ Mission Parish</p>
      </div>

    </div>
  );
};

export default Slider2;
