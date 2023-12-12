"use client";

import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useMediaQuery, Typography } from "@mui/material";
import ImageGallery from "./image-gallary";

import {
  endoImages,
  surgeryImages,
  fixedImages,
  estheticImages,
} from "@/lib/data";
import { ImageType } from "@/types/image-type";

interface Category {
  label: string;
  images: ImageType[];
}

const categories: Category[] = [
  { label: "Endo", images: endoImages },
  { label: "Surgery", images: surgeryImages },
  { label: "Esthetics", images: estheticImages },
  { label: "Fixed", images: fixedImages },
];

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const isMobile = useMediaQuery("(max-width:600px)");
  const [isHovering, setIsHovering] = React.useState(false);

  const handleChange = (event: any, newValue: number) => {
    setSelectedCategory(newValue);
  };

  return (
    <section id="portfolio" className="py-16 md:py-20">
      <div
        className="text-center mb-6"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Typography
          variant="h4"
          className={`font-bold ${
            isHovering ? "text-[#e8e8e8]" : "text-primary"
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
          Portfolio
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

      <Box
        sx={{ borderBottom: 1, borderColor: "divider", marginBottom: "20px" }}
      >
        <Tabs
          value={selectedCategory}
          onChange={handleChange}
          centered
          sx={isMobile ? { fontSize: "12px" } : { fontSize: "16px" }}
        >
          {categories.map((category, index) => (
            <Tab
              key={index}
              label={category.label}
              sx={isMobile ? { fontSize: "10px" } : { fontSize: "16px" }}
            />
          ))}
        </Tabs>
      </Box>
      <ImageGallery images={categories[selectedCategory].images} />
    </section>
  );
};

export default ProjectsSection;
