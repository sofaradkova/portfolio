'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5 pt-[90px]">
        <img
          src="/main-logo.svg"
          alt="main logo"
          className="w-[124px] h-[124px]"
        />
        <div className="flex gap-[72px] opacity-75 text-black">
          <ul className="text-right m-0">
            <li>(919)251-8738</li>
            <li className="mt-[16px]">eat@everythingbagels.net</li>
            <li className="mt-[16px]">530 Foster Street, Durham<br /> NC, 27701, United States</li>
          </ul>
          <ul className="text-right m-0">
            <li>Home</li>
            <li className="mt-[16px]">Menu</li>
            <li className="mt-[16px]">Catering</li>
            <li className="mt-[16px]">About Us</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="mb-[32px] h-[1px] bg-black opacity-25" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <p className="font-normal text-[14px] text-black opacity-75">
            © 2023 Everything Bagels
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
