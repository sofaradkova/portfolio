'use client';

import { motion } from 'framer-motion';

import { staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const Customize = () => (
  <section className="mt-[600px]">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col justify-center items-center"
    >
      <TypingText title="Haven't found the right one?" textStyles="text-center text-[24px]" />
      <TitleText title="Customize Your Bagel" textStyles="text-center text-main-brown mt-[5px]" />
    </motion.div>
  </section>
  /*
  <section>
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>

        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
        />

        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
        />

        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
        />

        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
        />
      </Carousel>
    </div>
  </section>
  */
);

export default Customize;
