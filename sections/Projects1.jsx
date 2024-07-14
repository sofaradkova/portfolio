"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer, textVariant } from "../utils/motion";
import { TitleText, TypingText, ProjectCard } from "../components";
import { projects1 } from "../constants";

const Projects1 = () => (
  <section className="relative z-10 mt-12">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TitleText
        title={<>Transform human interaction with technology</>}
        textStyles="text-center"
      />
      <TypingText
        title="What have i done for this mission?"
        textStyles="text-center text-main-brown mt-[10px] mb-[12px] tracking-wide"
      />
      <motion.div
        variants={textVariant(0.8)}
        className="flex justify-center items-center"
      >
        <div className="flex justify-center mb-[80px]">
          <div className="flex gap-6 px-6 mt-[50px]">
            {projects1.map((project, index) => (
              <ProjectCard
                key={project.name}
                index={index}
                {...project}
                section="1"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Projects1;