'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExploreCard, TitleText, LightButton } from '../components';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { exploreWorlds } from '../constants';

const Catering = () => {
  const [active, setActive] = useState('option-2');

  return (
    <section className="mx-[8vw] mt-[200px]" id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col px-[50px]`}
      >
        <TitleText title={<p>We Do Catering Too!</p>} textStyles="text-center text-main-brown" />
        <div className="mt-[40px] flex lg:flex-row flex-col gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
        <motion.div
          variants={fadeIn('right', 'spring', 1.5, 0.75)}
          className="text-center"
        >
          <LightButton title="More Catering Options" buttonStyle="text-center mt-[20px]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Catering;
