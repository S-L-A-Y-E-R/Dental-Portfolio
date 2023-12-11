"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <section
      id="hero"
      className="h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden z-0"
      style={{ backgroundImage: "url(/hero.jpg)" }}
    >
      <div className="absolute w-full h-full inset-0 bg-black opacity-30 -z-10" />

      <motion.div
        className="container mx-auto h-full flex flex-col md:justify-center justify-end md:bottom-0 bottom-5 items-start relative z-50 text-white"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <div className="max-w-2xl text-left px-6">
          <motion.h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4">
            Dr. Hassan Elayouti
          </motion.h1>
          <motion.p className="text-sm md:text-base lg:text-lg mb-8 opacity-80">
            I am Dr. Hassan, a dedicated and compassionate dentist with a
            passion for improving the oral health and smiles of my patients. I
            strive to provide personalized and gentle dental care to individuals
            and families.
          </motion.p>
          <div className="flex space-x-4">
            <motion.button
              className="bg-blue-500 transition-all duration-300 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm md:text-base lg:text-lg"
              whileHover={{ scale: 1.05 }}
            >
              <Link href={"#contact"}>Hire Me</Link>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
