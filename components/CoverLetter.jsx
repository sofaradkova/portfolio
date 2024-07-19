import React, { useRef } from 'react';
import { motion } from 'framer-motion';
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
    iconButton: {
      defaultProps: {
        variant: 'filled',
        size: 'md',
        color: 'gray',
        fullWidth: false,
        ripple: true,
        className: '',
      },
      valid: {
        variants: ['filled', 'outlined', 'gradient', 'text'],
        sizes: ['sm', 'md', 'lg'],
        colors: [
          'white',
          'blue-gray',
          'gray',
          'brown',
          'deep-orange',
          'orange',
          'amber',
          'yellow',
          'lime',
          'light-green',
          'green',
          'teal',
          'cyan',
          'light-blue',
          'blue',
          'indigo',
          'deep-purple',
          'purple',
          'pink',
          'red',
        ],
      },
      styles: {
        base: {
          position: 'relative',
          verticalAlign: 'align-middle',
          userSelect: 'select-none',
          fontFamily: 'font-sans',
          fontWeight: 'font-medium',
          textAlign: 'text-center',
          textTransform: 'uppercase',
          transition: 'transition-all',
          disabled:
            'disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none',
        },
        sizes: {
          sm: {
            width: 'w-8',
            maxWidth: 'max-w-[32px]',
            height: 'h-8',
            maxHeight: 'max-h-[32px]',
            borderRadius: 'rounded-lg',
            fontSize: 'text-xs',
          },
          md: {
            width: 'w-10',
            maxWidth: 'max-w-[40px]',
            height: 'h-10',
            maxHeight: 'max-h-[40px]',
            borderRadius: 'rounded-lg',
            fontSize: 'text-xs',
          },
          lg: {
            width: 'w-12',
            maxWidth: 'max-w-[48px]',
            height: 'h-12',
            maxHeight: 'max-h-[48px]',
            borderRadius: 'rounded-lg',
            fontSize: 'text-sm',
          },
        },
        variants: {
          filled: {
            white: {
              backgroud: 'bg-white',
              color: 'text-blue-gray-900',
              shadow: 'shadow-md shadow-blue-gray-500/10',
              hover: 'hover:shadow-lg hover:shadow-blue-gray-500/20',
              focus: 'focus:opacity-[0.85] focus:shadow-none',
              active: 'active:opacity-[0.85] active:shadow-none',
            },
            'blue-gray': {
              backgroud: 'bg-blue-gray-500',
              color: 'text-white',
              shadow: 'shadow-md shadow-blue-gray-500/20',
              hover: 'hover:shadow-lg hover:shadow-blue-gray-500/40',
              focus: 'focus:opacity-[0.85] focus:shadow-none',
              active: 'active:opacity-[0.85] active:shadow-none',
            },
            gray: {
              backgroud: 'bg-gray-500',
              color: 'text-white',
              shadow: 'shadow-md shadow-gray-500/20',
              hover: 'hover:shadow-lg hover:shadow-gray-500/40',
              focus: 'focus:opacity-[0.85] focus:shadow-none',
              active: 'active:opacity-[0.85] active:shadow-none',
            },
            brown: {
              backgroud: 'bg-brown-500',
              color: 'text-white',
              shadow: 'shadow-md shadow-brown-500/20',
              hover: 'hover:shadow-lg hover:shadow-brown-500/40',
              focus: 'focus:opacity-[0.85] focus:shadow-none',
              active: 'active:opacity-[0.85] active:shadow-none',
            },
            'deep-orange': {
              backgroud: 'bg-deep-orange-500',
              color: 'text-white',
              shadow: 'shadow-md shadow-deep-orange-500/20',
              hover: 'hover:shadow-lg hover:shadow-deep-orange-500/40',
              focus: 'focus:opacity-[0.85] focus:shadow-none',
              active: 'active:opacity-[0.85] active:shadow-none',
            },
            orange: {
              backgroud: 'bg-orange-500',
              color: 'text-white',
              shadow: 'shadow-md shadow-orange-500/20',
              hover: 'hover:shadow-lg hover:shadow-orange-500/40',
              focus: 'focus:opacity-[0.85] focus:shadow-none',
              active: 'active:opacity-[0.85] active:shadow-none',
            },
            amber: {
              backgroud: 'bg-amber-500',
              color: 'text-black',
              shadow: 'shadow-md shadow-amber-500/20',
              hover: 'hover:shadow-lg hover:shadow-amber-500/40',
              focus: 'focus:opacity-[0.85] focus:shadow-none',
              active: 'active:opacity-[0.85] active:shadow-none',
            },
            yellow: {
              backgroud: 'bg-yellow-500',
              color: 'text-black',
              shadow: 'shadow-md shadow-yellow-500/20',
              hover: 'hover:shadow-lg hover:shadow-yellow-500/40',
              focus: 'focus:opacity-[0.85] focus:shadow-none',
              active: 'active:opacity-[0.85] active:shadow-none',
            },
            lime: {
              backgroud: 'bg-lime-500',
              color: 'text-black',
              shadow: 'shadow-md shadow-lime-500/20',
              hover: 'hover:shadow-lg hover:shadow-lime-500/40',
              focus: 'focus:opacity-[0.85] focus:shadow-none',
              active: 'active:opacity-[0.85] active:shadow-none',
            },
            'light-green': {
              backgroud: 'bg-light-green-500',
              color: 'text-white',
              shadow: 'shadow-md shadow-light-green-500/20',
              hover: 'hover:shadow-lg hover:shadow-light-green-500/40',
              focus: 'focus:opacity-[0.85] focus:shadow-none',
              active: 'active:opacity-[0.85] active:shadow-none',
            },
            green: {
              backgroud: 'bg-green-500',
              color: 'text-white',
              shadow: 'shadow-md shadow-green-500/20',
              hover: 'hover:shadow-lg hover:shadow-green-500/40',
              focus: 'focus:opacity-[0.85] focus:shadow-none',
              active: 'active:opacity-[0.85] active:shadow-none',
            },
            teal: {
              backgroud: 'bg-teal-500',
              color: 'text-white',
              shadow: 'shadow-md shadow-teal-500/20',
              hover: 'hover:shadow-lg hover:shadow-teal-500/40',
              focus: 'focus:opacity-[0.85] focus:shadow-none',
              active: 'active:opacity-[0.85] active:shadow-none',
            },
            cyan: {
              backgroud: 'bg-cyan-500',
              color: 'text-white',
              shadow: 'shadow-md shadow-cyan-500/20',
              hover: 'hover:shadow-lg hover:shadow-cyan-500/40',
              focus: 'focus:opacity-[0.85] focus:shadow-none',
              active: 'active:opacity-[0.85] active:shadow-none',
            },
            'light-blue': {
              backgroud: 'bg-light-blue-500',
              color: 'text-white',
              shadow: 'shadow-md shadow-light-blue-500/20',
              hover: 'hover:shadow-lg hover:shadow-light-blue-500/40',
              focus: 'focus:opacity-[0.85] focus:shadow-none',
              active: 'active:opacity-[0.85] active:shadow-none',
            },
            blue: {
              backgroud: 'bg-blue-500',
              color: 'text-white',
              shadow: 'shadow-md shadow-blue-500/20',
              hover: 'hover:shadow-lg hover:shadow-blue-500/40',
              focus: 'focus:opacity-[0.85] focus:shadow-none',
              active: 'active:opacity-[0.85] active:shadow-none',
            },
            indigo: {
              backgroud: 'bg-indigo-500',
              color: 'text-white',
              shadow: 'shadow-md shadow-indigo-500/20',
              hover: 'hover:shadow-lg hover:shadow-indigo-500/40',
              focus: 'focus:opacity-[0.85] focus:shadow-none',
              active: 'active:opacity-[0.85] active:shadow-none',
            },
            'deep-purple': {
              backgroud: 'bg-deep-purple-500',
              color: 'text-white',
              shadow: 'shadow-md shadow-deep-purple-500/20',
              hover: 'hover:shadow-lg hover:shadow-deep-purple-500/40',
              focus: 'focus:opacity-[0.85] focus:shadow-none',
              active: 'active:opacity-[0.85] active:shadow-none',
            },
            purple: {
              backgroud: 'bg-purple-500',
              color: 'text-white',
              shadow: 'shadow-md shadow-purple-500/20',
              hover: 'hover:shadow-lg hover:shadow-purple-500/40',
              focus: 'focus:opacity-[0.85] focus:shadow-none',
              active: 'active:opacity-[0.85] active:shadow-none',
            },
            pink: {
              backgroud: 'bg-pink-500',
              color: 'text-white',
              shadow: 'shadow-md shadow-pink-500/20',
              hover: 'hover:shadow-lg hover:shadow-pink-500/40',
              focus: 'focus:opacity-[0.85] focus:shadow-none',
              active: 'active:opacity-[0.85] active:shadow-none',
            },
            red: {
              backgroud: 'bg-red-500',
              color: 'text-white',
              shadow: 'shadow-md shadow-red-500/20',
              hover: 'hover:shadow-lg hover:shadow-red-500/40',
              focus: 'focus:opacity-[0.85] focus:shadow-none',
              active: 'active:opacity-[0.85] active:shadow-none',
            },
          },
        },
      },
    },
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <img
          src="cover-letter-title.png"
          alt="Cover Letter Heading"
          className="w-[600px] mt-[-130px] object-fill"
        />
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
          className="mt-[80px]"
        >
          <button
            onClick={openDrawerBottom}
            type="button"
            className="bg-transparent flex items-center justify-center cursor-pointer mt-[-180px]"
          >
            <img src="letter-icon.png" className="object-fill w-20" />
          </button>
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
            transition={{ delay: 7, duration: 4 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 1 },
            }}
            className="flex flex-col justify-center items-center mt-[-30px]"
          >
            <TitleText
              title={<>Cover letters suck</>}
              textStyles="text-center text-another-black font-bold font-title text-[64px]"
            />
            <Typography className="font-title text-center mb-[8px]">
              Let's get to the point
            </Typography>
            <Link href="/intro">
              <IconButton className="rounded-full bg-another-black hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]">
                <i className="fa-solid fa-forward" />
              </IconButton>
            </Link>
          </motion.div>
          <img
            src="cover-letter-mock.png"
            alt="cover letter"
            className="mt-[-7vw]"
          />
        </Drawer>
      </ThemeProvider>
    </>
  );
};
