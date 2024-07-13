import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Drawer,
  IconButton,
  ThemeProvider,
  Typography,
} from '@material-tailwind/react';
import Link from 'next/link';
import { TitleText } from './CustomTexts';

export const CoverLetter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [openBottom, setOpenBottom] = React.useState(false);

  const openDrawerBottom = () => setOpenBottom(true);
  const closeDrawerBottom = () => setOpenBottom(false);

  const theme = {
    drawer: {
      defaultProps: {
        size: 650,
        overlay: true,
        placement: 'bottom',
        overlayProps: undefined,
        className: '',
        dismiss: { enabled: false },
        onClose: undefined,
        transition: {
          type: 'tween',
          duration: 0.5,
        },
      },
      styles: {
        base: {
          drawer: {
            position: 'fixed',
            zIndex: 'z-[9999]',
            pointerEvents: 'pointer-events-auto',
            backgroundColor: 'bg-transparent',
            boxSizing: 'box-border',
            width: 'w-full',
            boxShadow: 'shadow-2xl shadow-blue-gray-900/10',
          },
          overlay: {
            position: 'absolute',
            inset: 'inset-0',
            width: 'w-full',
            height: 'h-full',
            pointerEvents: 'pointer-events-auto',
            zIndex: 'z-[9995]',
            backgroundColor: 'bg-black',
            backgroundOpacity: 'bg-opacity-60',
            backdropBlur: 'backdrop-blur-sm',
          },
        },
      },
    },
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <img src="cover-letter-title.png" alt="Cover Letter Heading" className="w-[600px] mt-[-130px] object-fill" />
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
          className="mt-[80px]"
        >
          <a onClick={openDrawerBottom} className="bg-transparent flex items-center justify-center cursor-pointer mt-[-180px]">
            <img src="letter-icon.png" className="object-fill w-20" />
          </a>
        </motion.div>
      </div>
      <ThemeProvider value={theme}>
        <Drawer
          open={openBottom}
          onClose={closeDrawerBottom}
          className="p-4"
          ref={ref}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 10, duration: 5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 1 },
            }}
            className="flex flex-col justify-center items-center"
          >
            <TitleText title={<>Cover letters suck</>} textStyles="text-center" />
            <Typography className="text-[20px] text-main-black text-center mb-[8px]">Let's get to the point</Typography>
            <Link href="/projects">
              <IconButton className="rounded-full bg-main-black hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]">
                <i className="fa-solid fa-forward" />
              </IconButton>
            </Link>
          </motion.div>
          <img src="cover-letter-mock.png" alt="cover letter" className="mt-[-130px]" />
        </Drawer>
      </ThemeProvider>
    </>
  );
};
