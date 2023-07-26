'use client';

import { motion } from 'framer-motion';

import { fadeIn, staggerContainer, textVariant } from '../utils/motion';

const About = () => (
  <section className="mx-[11vw] mt-[170px]">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex lg:flex-row flex-col gap-6 justify-center"
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col sm:p-8 p-4 relative top-[2vw]"
      >
        <div className="absolute -left-[30px] h-[550px] w-[415px] flex flex-col items-center">
          <h2 className="font-bold text-[64px] sm:leading-[40.32px] leading-[36.32px] text-main-brown z-10 absolute left-[3.2vw] top-[15px]">
            About Us
          </h2>
          <div className="absolute z-0 h-[526px] w-[415px] flex">
            <img
              src="/paper.svg"
              alt="paper"
              className="object-cover flex-1"
            />
          </div>
          <p className="absolute z-10 w-[324px] font-normal text-[16px] sm:leading-6 leading-5 text-black top-[90px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras  parturient montes, nascetur ridiculus mus. Donec quam felis,
          </p>
        </div>
        <motion.div
          variants={textVariant(1.0)}
          className="absolute flex left-[200px] top-[535px] w-[17vw] z-20 rotate-[40deg]"
        >
          <img
            src="curly-arrow.svg"
            alt="curly-arrow"
            className="flex-1 rotate-[40deg] object-fill"
          />
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center left-[13px]"
      >
        <img
          src="/team.png"
          alt="team"
          className="w-full lg:h-[594px] h-auto min-h-[210px] object-contain rounded-[40px]"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default About;
