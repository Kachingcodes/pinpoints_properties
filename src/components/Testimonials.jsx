import React, { useRef, useEffect } from "react";
import { motion } from 'framer-motion';
import { LuPhoneCall } from "react-icons/lu";
import { FaWhatsapp, FaFacebookF, FaTiktok, FaInstagram  } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import TestSlider from './TestSlider'


const exploreVariants = {
    hiddenLeft: { opacity: 0, x: -100 },
    visible:    { opacity: 1, x: 0 },
  };


const Testimonials = () => {
    return (
        <section id="testimonials"
            className="w-full bg-gray-100 text-white overflow-hidden py-10 sm:py-12 md:py-16"
        >
            <div className="w-full flex flex-col gap-6 mx-auto relative p-4">
                <motion.div
                        variants={exploreVariants}
                        initial="hiddenLeft"
                        whileInView="visible"
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="w-41.5 md:w-48 p-1 relative flex items-center rounded-full animate-rotate-border 
                        bg-conic/[from_var(--border-angle)] from-[#0C0C0C] via-[#481E14] to bg-[#B19470]">
                        
                    <h1 className="rounded-full bg-amber-50 px-6 py-3 text-center md:text-left 
                        text-black text-md md:text-xl font-semibold font-libre">Testimonials</h1> 

                </motion.div>

                <div className="w-full md:p-4 items-center overflow-hidden h-[960px] md:h-[440px]">
                    <TestSlider/>
                </div>               
            </div>

        </section>
    );
};

export default Testimonials;
