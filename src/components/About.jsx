import React from "react";
import { motion } from "framer-motion";
import aboutData from '../data/aboutData';

const aboutVariants = {
  hiddenRight: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-20 md:py-40">
      <motion.div
        variants={aboutVariants}
        initial="hiddenRight"
        whileInView="visible"
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-10 justify-items-center">
          {aboutData.map((about, index) => {
            const Icon = about.icon;
            return (
              <div
                key={index}
                className="bg-[#0000001d] text-black rounded-2xl shadow-md shadow-black/60 
                  w-full max-w-xs p-4 flex flex-col overflow-hidden hover:bg-[#B19470] 
                  transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-2">
                  <Icon className="text-3xl text-[#482c0a]" />
                  <h2 className="text-md font-libre font-semibold">{about.title}</h2>
                </div>
                <p className="text-sm font-open">{about.review}</p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default About;