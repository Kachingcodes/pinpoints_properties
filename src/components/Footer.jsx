import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Navbar from './Navbar';
import { LuPhoneCall } from "react-icons/lu";
import { FaWhatsapp, FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";

const Footer = () => {
    const footerRef = useRef(null);

    useEffect(() => {
        const fullHeight = footerRef.current.offsetHeight;
        gsap.set(footerRef.current, { y: fullHeight - 50 });
    }, []);

    const expandFooter = () => {
        gsap.to(footerRef.current, { y: 0, duration: 0.5, ease: "power2.out" });
    };

    const collapseFooter = () => {
        const fullHeight = footerRef.current.offsetHeight;
        gsap.to(footerRef.current, { y: fullHeight - 50, duration: 0.5, ease: "power2.in" });
    };

    return (
        <section
            id="contact"
            ref={footerRef}
            className="w-full bg-[#110701] text-white overflow-hidden transition-all"
            onMouseEnter={expandFooter}
            onMouseLeave={collapseFooter}
        >
            <div className="w-full flex flex-col gap-10 md:gap-8 mx-auto relative px-4 py-6 sm:px-6 lg:px-8">
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="w-full md:w-2/3 text-sm font-libre">
                        <Navbar />
                    </div>

                    <div className="flex flex-col gap-4 md:gap-2">
                        <p className="text-white font-libre">Follow Us</p>
                        <div className="inline-flex gap-4 text-xl">
                            <FaFacebookF />
                            <FaInstagram />
                            <FaTiktok />
                        </div>
                    </div>
                </div>

                {/* Contact Cards */}
                <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">

                    <div className="bg-[#150a02] p-5 space-y-4 rounded-2xl shadow-md shadow-black hover:bg-[#482002] 
                        transition duration-300 transform hover:scale-[1.03] w-full md:w-1/3">
                        <h5 className="inline-flex items-center gap-3 text-lg font-semibold">
                            <LuPhoneCall />
                            Call
                        </h5>
                        <p>We would love to hear from you</p>
                        <p>+2348153039851</p>
                        <a href="tel:+2348153039851">
                            <div className="w-fit p-1 rounded-full animate-rotate-border 
                                bg-conic/[from_var(--border-angle)] from-[#3f1e07] via-[#46241a] to bg-[#B19470]">
                                <button className="px-4 py-2 bg-[#381904] rounded-3xl">Call Now</button>
                            </div>
                        </a>
                    </div>

                    <div className="bg-[#150a02] p-5 space-y-4 rounded-2xl shadow-md shadow-black hover:bg-[#482002] 
                        transition duration-300 transform hover:scale-[1.03] w-full md:w-1/3">
                        <h5 className="inline-flex items-center gap-3 text-lg font-semibold">
                            <FaWhatsapp />
                            Chat
                        </h5>
                        <p>Have something to say? Let's hear it</p>
                        <p>+2348153039851</p>
                        <a href="https://wa.me/2348153039851" target="_blank" rel="noopener noreferrer">
                            <div className="w-fit p-1 rounded-full animate-rotate-border 
                                bg-conic/[from_var(--border-angle)] from-[#3f1e07] via-[#46241a] to bg-[#B19470]">
                                <button className="px-4 py-2 bg-[#381904] rounded-3xl">Chat Now</button>
                            </div>
                        </a>
                    </div>

                    <div className="bg-[#150a02] p-5 space-y-4 rounded-2xl shadow-md shadow-black hover:bg-[#482002] 
                        transition duration-300 transform hover:scale-[1.03] w-full md:w-1/3">
                        <h5 className="inline-flex items-center gap-3 text-lg font-semibold">
                            <MdOutlineMessage />
                            Message
                        </h5>
                        <p>Send your inquiries, we have the information</p>
                        <p>+2348153039851</p>
                        <a href="sms:+2348153039851">
                            <div className="w-fit p-1 rounded-full animate-rotate-border 
                                bg-conic/[from_var(--border-angle)] from-[#3f1e07] via-[#46241a] to bg-[#B19470]">
                                <button className="px-4 py-2 bg-[#381904] rounded-3xl">Message Now</button>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;