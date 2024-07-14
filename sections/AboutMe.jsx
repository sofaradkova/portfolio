"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Typography,
  Dialog,
  DialogHeader,
  DialogBody,
  Button,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";

const AboutMe = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const router = useRouter();
  const handleClick = (e) => {
    handleOpen();
    e.preventDefault();
    setTimeout(() => {
      router.push("/projects");
    }, 7000);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 2,
        delay: 1,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <section className="relative h-screen w-screen">
      <motion.div
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-y-0 left-10 top-4 w-[50%]"
      >
        <img src="/me-photos.png" alt="sofa stickers" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute inset-y-0 right-0 w-[50%] flex flex-col justify-center"
      >
        <Typography className=" text-main-black" variant="small">
          Hi, Bluecadet!
        </Typography>
        <Typography
          className="mt-1 mb-2 font-semi-bold text-main-black"
          variant="h4"
        >
          I'm Sofa (yes, 🛋️)
        </Typography>
        <div className="py-5">
          <Typography className=" text-main-black" variant="paragraph">
            Right now I am:
          </Typography>
          <ul className="list-disc ml-5">
            <li>
              <Typography className=" text-main-black" variant="paragraph">
                Coding as a Software Engineer Intern at Niantic (we make Pokemon
                Go!)
              </Typography>
            </li>
            <li>
              <Typography className=" text-main-black" variant="paragraph">
                Studying Computer Science at Duke University
              </Typography>
            </li>
            <li>
              <Typography className=" text-main-black" variant="paragraph">
                Leading a digital privacy & security HCI research team
              </Typography>
            </li>
          </ul>
        </div>
        <div className="py-5">
          <Button onClick={handleClick} color="gray" className="bg-main-black">
            Are Sofa & Bluecadet a match?
          </Button>
          <Dialog open={open} handler={handleOpen}>
            <DialogHeader>
              Looks like our missions align perfectly...
            </DialogHeader>
            <DialogBody>
              <motion.ol
                variants={container}
                initial="hidden"
                animate="show"
                className="ml-5 mb-6"
              >
                <motion.li variants={listItem}>
                  1. Transform human interaction with technology
                </motion.li>
                <motion.li variants={listItem}>
                  2. Reimagine the craft of storytelling
                </motion.li>
                <motion.li variants={listItem}>
                  3. Unite people through digital immersive experiences
                </motion.li>
                <motion.li variants={listItem} className="mt-3 font-bold">
                  Let's get into specifics!
                </motion.li>
              </motion.ol>
            </DialogBody>
          </Dialog>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
