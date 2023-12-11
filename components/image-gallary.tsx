"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";
import DialogContent from "@mui/material/DialogContent";

import { ImageType } from "@/types/image-type";

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hover: { filter: "brightness(70%)" },
};

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const ImageGallery = ({ images }: { images: ImageType[] }) => {
  const [open, setOpen] = React.useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = React.useState<
    number | null
  >(null);

  const handleClickOpen = (index: number) => {
    setOpen(true);
    setSelectedImageIndex(index);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImageIndex(null);
  };

  return (
    <motion.div
      className="container mx-auto grid lg:grid-cols-6 md:grid-cols-4 gap-3 px-5"
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      {images.map((image, index) => (
        <div key={index}>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open && selectedImageIndex === index}
          >
            <DialogContent>
              <Image
                src={image.src}
                alt={image.caption}
                width={image.width}
                height={image.height}
                className="w-full h-full object-cover object-center aspect-square"
              />
            </DialogContent>
          </BootstrapDialog>
          <motion.div
            className="relative overflow-hidden rounded-lg cursor-pointer"
            variants={imageVariants}
            whileHover="hover"
            onClick={() => handleClickOpen(index)}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5 },
                },
                hover: { filter: "brightness(70%)" },
              }}
            >
              <Image
                src={image.src}
                alt={image.caption}
                width={image.width}
                height={image.height}
                className="w-full h-full object-cover object-center aspect-square"
              />
              <motion.div
                className="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
            </motion.div>
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};

export default ImageGallery;
