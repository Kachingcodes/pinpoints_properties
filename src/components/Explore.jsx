import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import SkeletonImage from './SkeletonImage';
import exploreData from "../data/exploreData";
import { ImOffice } from "react-icons/im";
import { GiFamilyHouse } from "react-icons/gi";
import { MdOutlineNightlife } from "react-icons/md";



const iconMap = {
  homes: GiFamilyHouse,
  offices: ImOffice,
  halls: MdOutlineNightlife,
};

const exploreVariants = {
  hiddenLeft: { opacity: 0, x: -100 },
  visible:    { opacity: 1, x: 0 },
};

const fadeVariant = {
    hidden: { opacity: 0, y: 20 },
    visible:   { opacity: 1, y: 0 }
  };

export default function Explore() {
  const [active, setActive] = useState(exploreData[0].key);
  const current = exploreData.find(exp => exp.key === active);

  return (
    <section id="explore">
      <div className="w-full p-5 md:p-10 bg-[#c6a995] flex flex-col gap-5 min-h-screen mx-auto justify-evenly">
        
      <motion.div
        variants={exploreVariants}
        initial="hiddenLeft"
        whileInView="visible"
        transition={{ delay: 0.3, duration: 0.8 }}
        className="w-59 md:w-65 p-1 relative flex rounded-full animate-rotate-border 
        bg-conic/[from_var(--border-angle)] from-[#0C0C0C] via-[#481E14] to bg-[#B19470]"
        >
            <h1 className="rounded-full bg-amber-50 text-md md:text-lg px-6 py-3 text-left font-semibold font-libre">
              Explore Our Services
            </h1>
        </motion.div>

        {/* Central content panel */}
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4 font-cinzel">{current.label}</h2>
            <p className="mb-6 text-gray-800 text-sm md:text-md font-open">{current.content}</p>
          </div>
          
            <AnimatePresence onExitComplete>
                <motion.div 
                key={active}
                variants={fadeVariant}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.3 }}
                className="gallery">
                    {current.images.map((src, idx) => (
                        <motion.div className="item" key={idx}
                        variants={fadeVariant}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: idx * 0.1, duration: 0.9, ease: 'easeOut' }}
                    >
                    <SkeletonImage
                        src={src}
                        alt={`img-${idx+1}`} 
                        className="rounded-lg shadow transition duration-300 transform hover:scale-106"
                        loading="lazy"
                    />
                    </motion.div>
                    ))}
                </motion.div>

                </AnimatePresence>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 pt-4 px-2">
          {exploreData.map(exp => {
            const Icon = iconMap[exp.key];
              return (
                <button
                  key={exp.key}
                  onClick={() => setActive(exp.key)}
                  className={`flex items-center space-x-2 px-3 py-2 text-xs sm:text-sm md:text-base 
                    font-libre rounded-lg transition opacity-80 cursor-pointer hover:shadow-md 
                    ${active === exp.key
                      ? 'bg-[#481E14] text-white opacity-100'
                      : 'bg-gray-200 text-gray-700'}`}
                >
                  {Icon && <Icon size={18} className="shrink-0" />}
                  <span>{exp.label}</span>
                </button>
              );
          })}
        </div>

      </div>
    </section>
  );
}