'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { textVariant, staggerContainer, bagelSpin } from '../utils/motion';
import { DarkButton, LightButton } from '../components';

const Hero = () => (
  <section className="mx-auto sm:pl-16 pl-6 static flex flex-col mb-[350px] items-center">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} relative`}
    >
      <div>
        <div className="flex justify-center flex-start flex-col relative z-10">
          <motion.h1
            variants={textVariant(1.3)}
            className={styles.heroHeading}
          >
            Everything
          </motion.h1>
          <motion.div
            variants={textVariant(1.4)}
            className="flex flex-row justify-сenter items-center"
          >
            <h1 className={styles.heroHeading}>
              Bagels
            </h1>
          </motion.div>
        </div>
        <motion.div
          variants={textVariant(1.5)}
          className="flex flex-row justify-сenter items-center"
        >
          <p className="mt-[21px] mb-[28px] leading-[22.4px] text-black">Tasty gourmet bagels, avant-garde <br /> sandwiches & premiere bagel burgers</p>
        </motion.div>
        <motion.div
          variants={textVariant(1.5)}
          className="flex flex-row justify-сenter items-center"
        >
          <div className="flex gap-2">
            <a href="https://order.toasttab.com/online/everything-bagels-durham-530-foster-st#!/order" target="_blank" rel="noreferrer">
              <DarkButton title="Order Now" buttonStyle="bg-light-brown" />
            </a>
            <LightButton title="View Menu" />
          </div>
        </motion.div>

      </div>
      <motion.div
        variants={bagelSpin('right')}
        className="absolute flex w-[800px] h-[800px] -right-[75px] -top-[10px]"
      >
        <img
          src="hero-bagel.svg"
          alt="hero-img"
          className="flex 1"
        />
      </motion.div>
      <motion.div
        variants={textVariant(2.0)}
        className="absolute flex left-[300px] top-[340px]"
      >
        <img
          src="curved-arrow.svg"
          alt="curved-arrow"
          className="flex 1"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
