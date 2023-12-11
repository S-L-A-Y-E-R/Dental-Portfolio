"use client";

import { motion } from "framer-motion";
import HoverObserver from "react-hover-observer";
import { Typography } from "@mui/material";

import SideText from "./side-text";
import { ContactForm } from "./form";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const sideTextVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const formVariants = {
  hidden: { x: 20, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

export default function ContactSection() {
  return (
    <section className="bg-[#e8e8e8] py-16 md:py-20" id="contact">
      <HoverObserver>
        {({ isHovering }: { isHovering: boolean }) => (
          <div className="text-center mb-6">
            <Typography
              variant="h4"
              className={`font-bold ${
                isHovering ? "text-white" : "text-primary"
              }`}
              style={{
                position: "relative",
                display: "inline-block",
                padding: "0 10px",
              }}
            >
              <span
                className="before-dot"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "-8px",
                  width: "8px",
                  height: "8px",
                  backgroundColor: isHovering ? "#2196f3" : "#fff",
                  borderRadius: "50%",
                  transform: "translateY(-50%)",
                  transition: "all 0.3s ease",
                }}
              />
              Contact Me
              <span
                className="after-dot"
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "-8px",
                  width: "8px",
                  height: "8px",
                  backgroundColor: isHovering ? "#2196f3" : "#fff",
                  borderRadius: "50%",
                  transform: "translateY(-50%)",
                  transition: "all 0.3s ease",
                }}
              />
            </Typography>
          </div>
        )}
      </HoverObserver>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="md:h-[60vh] h-full flex items-center "
      >
        <div className="flex md:flex-row gap-8 md:gap-0 flex-col container mx-auto py-7 md:py-0">
          <motion.div
            variants={sideTextVariants}
            className="basis-[48%] self-center"
          >
            <SideText />
          </motion.div>
          <motion.div variants={formVariants} className="basis-[48%]">
            <ContactForm />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
