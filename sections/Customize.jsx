'use client';

import { motion } from 'framer-motion';
import { bagels, spreads, toppings } from '../constants';

import { staggerContainer, slideIn, textVariant } from '../utils/motion';
import { TitleText, TypingText, DarkButton, CarouselCustom } from '../components';

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
      <motion.div
        variants={textVariant(0.2)}
      >
        <CarouselCustom title="Choose A Bagel Flavor" index="1" options={bagels} />
      </motion.div>
      <motion.div
        variants={textVariant(0.4)}
      >
        <CarouselCustom title="Add Cream Cheese Or Spread" index="2" options={spreads} />
      </motion.div>
      <motion.div
        variants={textVariant(0.6)}
      >
        <CarouselCustom title="Add Toppings" index="3" options={toppings} />
      </motion.div>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="text-center"
      >
        <DarkButton title="Order Now" buttonStyle="bg-light-brown mt-[50px]" />
      </motion.div>
    </motion.div>
  </section>
);

export default Customize;
