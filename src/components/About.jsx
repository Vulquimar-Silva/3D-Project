import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import CanvasEffectParticles from './ParticleEffect'

const About = () => {

  return (
    <div className='mt-20 mb-20 flex space-x-96'>
      <div>
      <CanvasEffectParticles />
      </div>
      <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Sobre</p>
        <h2 className={`${styles.sectionHeadText} opacity-85`}>Resumo.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Sou desenvolvedor de software com experiência em TypeScript, React, JavaScript, Node.js e Electron.js.
        Aprendo rápido e colaboro de perto com os clientes para criar soluções eficientes, escaláveis ​​e
        que resolvem problemas do mundo real. Vamos trabalhar juntos para dar vida às suas ideias!
      </motion.p>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "Sobre");