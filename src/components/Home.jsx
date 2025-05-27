import React from "react";
import { motion } from 'framer-motion';
import SkeletonImage from './SkeletonImage';
import Marquee from "react-fast-marquee";
import Navbar from './Navbar';
import house_background2 from '../albom/house_background2.jpg';
import sitting_room2 from '../albom/sitting_room2.png';
import bedroom from '../albom/bedroom.png';
import kitchen from '../albom/kitchen.png';

const Home = () => {
    return (
        <section id="home">
            <div
                className="w-full relative flex items-center justify-center"
                style={{
                    backgroundImage: `url(${house_background2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh',
                }}
            >
                {/* Black overlay */}
                <div className="absolute w-full inset-0 bg-black opacity-30 z-0"></div>

                <motion.div 
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="relative w-full max-w-6xl bg-black/20 rounded-xl p-4 sm:p-6 md:p-8 mx-4 my-6 flex flex-col justify-between z-10"
                >
                    <Navbar />

                    <div className="flex flex-col mt-4">
                        <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-libre tracking-wide leading-snug">
                            Providing Elegant Homes, Offices, Shops, and Halls <br className="hidden sm:block" />
                            Tailored To Your Lifestyle
                        </h2>
                        <p className="text-[#c6a995] font-semibold tracking-wider py-2 font-open text-sm sm:text-base">—where comfort meets sophistication.</p>
                    </div>

                    {/* Image Section */}
                    <div className="flex flex-wrap gap-4 justify-center sm:justify-end mt-6">
                        {[sitting_room2, bedroom, kitchen].map((src, idx) => (
                            <SkeletonImage
                                key={idx}
                                src={src}
                                alt={`room-${idx}`}
                                className="w-28 sm:w-36 md:w-40 rounded-xl transition duration-500 transform hover:scale-110"
                            />
                        ))}
                    </div>

                    <Marquee speed={50} gradient={false} className="py-4 text-white font-open text-sm sm:text-base">
                        Locations — Ikeja, Ogba, Lekki, Ogun State, Rivers State
                    </Marquee>
                </motion.div>
            </div>
        </section>
    );
};

export default Home;