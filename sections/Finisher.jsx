'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, slideIn, textVariant } from '../utils/motion';
import { TitleText, TypingText, BodyText, DarkButton } from '../components';

const Finisher = () => (
  <section className="relative z-10 bg-main-yellow mt-[100px]">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="In The Durham Food Hall" textStyles="text-center text-main-brown mt-[110px] mb-[8px]" />
      <TitleText title={<>Come enjoy your bagel with us</>} textStyles="text-center text-main-red" />
      <BodyText title="Weekdays    6:30AM-1:30PM" textStyles="text-center opacity-75 mt-[26px]" />
      <BodyText title="Weekends    7:00AM-2:00PM" textStyles="text-center opacity-75 mt-[8px]" />
      <motion.div
        variants={textVariant(0.8)}
        className="flex justify-center items-center"
      >
        <DarkButton title="Order Now" buttonStyle="flex-[0.075] bg-main-red text-main-yellow mt-[40px] mb-[115px] border-main-red hover:bg-main-yellow hover:text-main-red" />
      </motion.div>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className={`${styles.flexCenter} absolute w-[30vw] flex -bottom-[70px] -left-[55px]`}
      >
        <img
          src="/whitefish-snd.png"
          alt="whitefish-snd"
          className="object-cover flex-1"
        />
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="absolute flex justify-end -right-[55px] -bottom-[75px] h-[23vw] w-[23vw]"
      >
        <img
          src="/everything-bagel.png"
          alt="everything-bagel"
          className="object-cover flex-1"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Finisher;
