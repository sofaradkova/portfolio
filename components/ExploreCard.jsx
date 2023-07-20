'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, content, index, active, handleClick }) => (
  <div className={`${
    active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
  }`}
  >
    {active !== id ? (
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.3, 0.75)}
        className="relative lg:flex-[0.75] flex-[4] flex items-center justify-center min-w-[150px] h-[500px] transition-[flex] duration=[0.7s] ease-out-flex cursor-pointer"
        onClick={() => handleClick(id)}
      >
        <img
          src={imgUrl}
          alt={title}
          className="absolute w-full h-full object-cover rounded-[24px]"
        />
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-secondary-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      </motion.div>
    ) : (
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.3, 0.75)}
        className="relative lg:flex-[2] flex-[10] flex items-center justify-center min-w-[150px] h-[500px] transition-[flex] duration=[0.7s] ease-out-flex cursor-pointer group"
        onClick={() => handleClick(id)}
      >
        <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0">
            <img
              src={imgUrl}
              alt={title}
              className="absolute w-full h-full object-cover rounded-[24px]"
            />
            <div className="absolute bottom-0 p-8 justify-start w-full flex-col">
              <div className="inline-flex items-center text-secondary-white">
                See What's Inside
                <img
                  src="/small-arrow.svg"
                  alt="small-arrow"
                  className="ml-1.5"
                />
              </div>
              <h2 className="mt-[8px] font-semibold sm:text-[32px] text-[24px] text-secondary-white">
                {title}
              </h2>
            </div>
          </div>
          <div className="absolute h-full w-full rounded-xl bg-secondary-white/80 px-[60px] text-start text-secondary-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex justify-start items-center">
            <ul className="list-disc text-main-brown text-[16px]">
              {content.map((ingredient) => (
                <li className="leading-[50px]">{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    )}
  </div>
);

export default ExploreCard;
