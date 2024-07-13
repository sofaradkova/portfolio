'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Typography, Button } from '@material-tailwind/react';

const show = {
  opacity: 1,
  display: 'block',
};

const hide = {
  opacity: 0,
  transitionEnd: {
    display: 'none',
  },
};

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(true);
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
        <Typography
          className=" text-main-black"
          variant="small"
        >
          Hi, Bluecadet!
        </Typography>
        <Typography
          className="mt-1 mb-2 font-semi-bold text-main-black"
          variant="h4"
        >
          I'm Sofa (yes, 🛋️)
        </Typography>
        <div className="pt-0">
          <Typography className=" text-main-black" variant="paragraph">
            Right now I am:
          </Typography>
          <ul className="list-disc ml-5">
            <li>
              <Typography className=" text-main-black" variant="paragraph">Coding as a Software Engineer Intern at Niantic (we make Pokemon Go!)</Typography>
            </li>
            <li>
              <Typography className=" text-main-black" variant="paragraph">Studying Computer Science at Duke University</Typography>
            </li>
            <li>
              <Typography className=" text-main-black" variant="paragraph">Leading a digital privacy & security HCI research team </Typography>
            </li>
          </ul>
        </div>
        <div className="py-4">
          <Button className="bg-main-black">Analyse compatibility for Sofa & Bluecadet</Button>
          <motion.div className="box" animate={isVisible ? show : hide} />
          <div className="controls">
            <Button
              onClick={() => setIsVisible(!isVisible)}
            >
              {isVisible ? 'Hide' : 'Show'}
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
