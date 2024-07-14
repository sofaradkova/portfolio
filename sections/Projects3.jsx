"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer, textVariant } from "../utils/motion";
import { TitleText, TypingText, ProjectCard } from "../components";
import { projects3 } from "../constants";

const Projects3 = () => (
  <section className="relative z-10">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TitleText
        title={<>Unite people through digital immersive experiences</>}
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
            {projects3.map((project, index) => (
              <ProjectCard
                key={project.name}
                index={index}
                {...project}
                section="3"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Projects3;
