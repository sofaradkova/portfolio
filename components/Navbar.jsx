'use client';

import { motion } from 'framer-motion';

import { Button } from '@material-tailwind/react';
import Link from 'next/link';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className="py-4 flex justify-start w-full max-w-screen-md"
  >
    <Link href="/projects" prefetch>
      <Button variant="text" size="sm" color="gray" className="flex items-center gap-2 rounded-full">
        <i className="fa-solid fa-arrow-left-long" />
        {' '}Back to missions
      </Button>
    </Link>
  </motion.nav>
);

export default Navbar;
