'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.3, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[2] flex-[10]' : 'lg:flex-[0.75] flex-[4]'
    } flex items-center justify-center min-w-[150px] h-[500px] transition-[flex] duration=[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt={title}
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-secondary-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 justify-start w-full flex-col">
        <div className="flex">
          <p className="font-normal text-[16px] leading-[20px] text-secondary-white">
            See What's Inside
          </p>
          <img 
            src="/small-arrow.svg"
            alt="small-arrow"
          />
        </div>
        <h2 className="mt-[12px] font-semibold sm:text-[32px] text-[24px] text-secondary-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
