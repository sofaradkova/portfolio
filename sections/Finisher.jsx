'use client';

import { motion } from 'framer-motion';

import { IconButton, Tooltip, ThemeProvider } from '@material-tailwind/react';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const Finisher = () => {
  const theme = {
    tooltip: {
      defaultProps: {
        interactive: false,
        placement: 'top',
        offset: 5,
        dismiss: {},
        animate: {
          unmount: {},
          mount: {},
        },
        className: '',
      },
      styles: {
        base: {
          bg: 'bg-main-black',
          py: 'py-1.5',
          px: 'px-3',
          borderRadius: 'rounded-lg',
          fontFamily: 'font-body',
          fontSize: 'text-sm',
          fontWeight: 'font-normal',
          color: 'text-white',
          outline: 'focus:outline-none',
          overflowWrap: 'break-words',
          zIndex: 'z-[999]',
          whiteSpace: 'whitespace-normal',
        },
      },
    },
  };

  return (
    <section className="mb-[10px] mt-[-50px]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col items-center justify-center pt-0 py-0 h-full`}
      >
        <TypingText title="So, what are you thinking?" textStyles="text-center mb-[8px]" />
        <TitleText
          title={<>See you this summer?</>}
          textStyles="text-center font-bold font-title text-[6xl] text-main-black mb-auto"
        />
        <ThemeProvider value={theme}>
          <div className="flex items-center justify-center gap-4 my-[20px]">
            <Tooltip content="Resume" placement="bottom">
              <a
                href="/Sofa_Radkova_Resume.pdf"
                download="Sofa_Radkova_Resume.pdf"
              >
                <IconButton className="rounded-full bg-main-black hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
                  <i className="fa-regular fa-file" />
                </IconButton>
              </a>
            </Tooltip>
            <Tooltip content="LinkedIn (ew)" placement="bottom">
              <a
                href="https://www.linkedin.com/in/sofa-radkova/"
                target="_blank"
                rel="noreferrer"
              >
                <IconButton className="rounded-full bg-main-black hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
                  <i className="fa-brands fa-linkedin-in" />
                </IconButton>
              </a>
            </Tooltip>
            <Tooltip content="GitHub" placement="bottom">
              <a
                href="https://github.com/sofaradkova"
                target="_blank"
                rel="noreferrer"
              >
                <IconButton className="rounded-full bg-main-black hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
                  <i className="fab fa-github text-lg" />
                </IconButton>
              </a>
            </Tooltip>
            <Tooltip content="Email me" placement="bottom">
              <a href="mailto:sr549@duke.edu" target="_blank" rel="noreferrer">
                <IconButton className="rounded-full bg-main-black hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
                  <i className="fa-regular fa-envelope" />
                </IconButton>
              </a>
            </Tooltip>
          </div>
        </ThemeProvider>
        <div className="text-light-grey mt-20 text-xs">Portfolio created with NextJS & TailwindCSS</div>
      </motion.div>
    </section>
  );
};

export default Finisher;
