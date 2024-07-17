'use client';

import { motion } from 'framer-motion';

import { textContainer, textVariant2 } from '../utils/motion';

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`text-[20px] text-light-grey ${textStyles}`}
  >
    {Array.from(title).map((Letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {Letter === ' ' ? '\u00A0' : Letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`font-bold text-main-black md:text-[36px] text-[40px] ${textStyles}`}
  >
    {title}
  </motion.h2>
);

export const BodyText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`md:text-[20px] text-[16px] text-main-brown ${textStyles}`}
  >
    {title}
  </motion.h2>
);
