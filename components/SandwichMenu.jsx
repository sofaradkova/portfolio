'use client';

import { motion } from 'framer-motion';
import { Ingredients } from '.';

import styles from '../styles';
import { slideIn, staggerContainer } from '../utils/motion';

export const SandwichMenu = ({ menu }) => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.1 }}
    className={`${styles.innerWidth} flex-[0.75] flex justify-center flex-col mx-auto w-full items-center`}
  >
    <div className="mt-[31px] flex flex-col">
      {menu.map((sandwich, index) => (
        <div className={`flex ${(index + 1) % 2 ? 'flex-row' : 'flex-row-reverse'} gap-6 w-full mx-auto`}>
          <motion.div
            variants={slideIn(`${(index + 1) % 2 ? 'left' : 'right'}`, 'tween', 0.2, 1)}
            className="flex-1 flex justify-center flex-col"
          >
            <Ingredients
              key={sandwich.name}
              index={index}
              {...sandwich}
            />
          </motion.div>
          <motion.div
            variants={slideIn(`${(index + 1) % 2 ? 'right' : 'left'}`, 'tween', 0.2, 1)}
            className={`flex-1 ${styles.flexCenter}`}
          >
            <img
              src={`${sandwich.imgUrl}`}
              alt={`${sandwich.imgUrl}`}
              className="w-[90%] h-[90%] object-contain"
            />
          </motion.div>
        </div>
      ))}
    </div>
  </motion.div>

);
