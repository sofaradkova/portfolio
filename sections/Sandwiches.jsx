'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { SandwichMenu, DarkButton, TitleText } from '../components';

import styles from '../styles';
import { staggerContainer, slideIn } from '../utils/motion';
import { menuPreview } from '../constants';

const Sandwiches = () => (
  <section className={`${styles.paddings} relative z-10 h-[900px] mt-[450px] flex justify-center mb-[600px]`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className={`${styles.innerWidth} flex flex-col items-center`}
    >
      <TitleText title={<p>Choose Your Sandwich</p>} textStyles="text-center text-main-brown" />
      <SandwichMenu menu={menuPreview} />
      <Link href="/menu">
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="text-center"
        >
          <DarkButton title="View All Sandwiches" buttonStyle="bg-light-brown mt-[50px]" />
        </motion.div>
      </Link>

    </motion.div>
  </section>
);

export default Sandwiches;
