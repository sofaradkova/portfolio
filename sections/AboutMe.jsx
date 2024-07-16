'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Typography,
  Dialog,
  DialogHeader,
  DialogBody,
  Button,
} from '@material-tailwind/react';
import { useRouter } from 'next/navigation';

const AboutMe = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const router = useRouter();
  const handleClick = (e) => {
    handleOpen();
    e.preventDefault();
    setTimeout(() => {
      router.push('/projects');
    }, 10000);
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
        className="absolute inset-y-0 left-14 top-4 w-[50%]"
      >
        <img src="/me-photos.png" alt="sofa stickers" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute inset-y-0 right-7 w-[50%] flex flex-col justify-center"
      >
        <Typography
          className="text-main-black font-title text-[27px] leading-6"
          variant="small"
        >
          Hi, Bluecadet!
        </Typography>
        <Typography className="mt-1 mb-2 font-bold font-title text-[64px] text-main-black">
          I'm Sofa (yes, 🛋️)
        </Typography>
        <div className="py-5">
          <Typography
            className=" text-main-black font-title text-[20px] leading-6 pb-3"
          >
            Right now, I am:
          </Typography>
          <ul className="list-disc ml-5 leading-6">
            <li>
              <Typography
                className=" text-main-black font-title text-[20px] leading-6 pb-1"
                variant="paragraph"
              >
                Coding as a Software Engineer Intern at Niantic (Pokemon Go!)
              </Typography>
            </li>
            <li>
              <Typography
                className=" text-main-black font-title text-[20px] leading-6 pb-1"
                variant="paragraph"
              >
                Studying Computer Science at Duke University
              </Typography>
            </li>
            <li>
              <Typography
                className=" text-main-black font-title text-[20px] leading-6 pb-1"
                variant="paragraph"
              >
                Leading a digital privacy & security HCI research team
              </Typography>
            </li>
          </ul>
        </div>
        <div className="py-6">
          <Button
            onClick={handleClick}
            color="gray"
            className="bg-main-black font-title text-[16px] normal-case font-normal rounded-full"
          >
            Are Sofa & Bluecadet a match?
          </Button>
          <Dialog open={open} handler={handleOpen} className="p-5">
            <DialogHeader className="font-title font-bold text-main-black">
              Looks like our missions align perfectly...
            </DialogHeader>
            <DialogBody>
              <motion.ol
                variants={container}
                initial="hidden"
                animate="show"
                className="ml-5 mb-6"
              >
                <motion.li
                  variants={listItem}
                  className="font-title text-main-black"
                >
                  1. Transform human interaction with technology
                </motion.li>
                <motion.li
                  variants={listItem}
                  className="font-title text-main-black"
                >
                  2. Reimagine the craft of storytelling
                </motion.li>
                <motion.li
                  variants={listItem}
                  className="font-title text-main-black"
                >
                  3. Unite people through digital immersive experiences
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
