'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, slideIn } from '../utils/motion';
import { TitleText, TypingText, BodyText, DarkButton } from '../components';

const Finisher = () => (
  <section className="relative z-10 bg-main-yellow">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="In The Durham Food Hall" textStyles="text-center text-main-brown mt-[100px] mb-[8px]" />
      <TitleText title={<>Come Enjoy Your Bagel With Us</>} textStyles="text-center text-main-red" />
      <BodyText title="Weekdays    6:30AM-1:30PM" textStyles="text-center opacity-75 mt-[26px]" />
      <BodyText title="Weekends    7:00AM-2:00PM" textStyles="text-center opacity-75 mt-[8px]" />
      <div className="text-center static">
        <DarkButton title="Order Now" buttonStyle="bg-main-red text-main-yellow mt-[40px] mb-[115px]" />
      </div>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className={`flex-1 ${styles.flexCenter} relative w-[45vw]`}
      >
        <img
          src="/whitefish-snd.png"
          alt="whitefish-snd"
          className="w-[90%] h-[90%] object-contain absolute"
        />
      </motion.div>
      <div className="absolute flex justify-end -right-[52px] -bottom-[55px]">
        <img
          src="/everything-bagel.png"
          alt="everything-bagel"
          className="w-2/5 h-2/5 object-cover"
        />
      </div>
    </motion.div>
  </section>
);

export default Finisher;
