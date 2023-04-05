import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { technologies } from "../constants";
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { slideIn, textVariant } from '../utils/motion';
import CanvasEffectParticles from './ParticleEffect';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileIcon, setIsMobileIcon] = useState(false);

  useEffect(() => {

    const mediaQuery = window.matchMedia("(max-width: 1280px)");
    const mediaQueryIcon = window.matchMedia("(max-width: 750px)");
    setIsMobile(mediaQuery.matches);
    setIsMobileIcon(mediaQueryIcon.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
      setIsMobileIcon(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <div className={`xl:mt-30 xl:mb-10 mt-12 bg-black-100 rounded-2xl flex xl:flex-row flex-col-reverse gap-9 overflow-hidden`}>

        <motion.div
          variants={slideIn("left", "tween", 0.3, 1)}
          className='flex-[1.75]'
        >
          {!isMobile ? <CanvasEffectParticles /> : undefined}
        </motion.div>
        <div className='p-10'>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Sobre mim</p>
            <h2 className={`${styles.sectionHeadText} opacity-85`}>Resumo.</h2>
          </motion.div>

          <motion.div
            variants={textVariant()}
            className='mt-5 text-secondary text-[17px] max-w-3xl leading-[40px]'
          >
            <p>
              Sou desenvolvedor de software com experiência em TypeScript, React/Next, JavaScript, CSS3/Sass, Node.js e Electron.js.
              Aprendo rápido e colaboro de perto com os clientes para criar soluções eficientes, escaláveis ​​e
              que resolvem problemas do mundo real. Vamos trabalhar juntos para dar vida às suas ideias!
            </p>
            <div className={isMobileIcon ? 'flex flex-wrap m-4 gap-10 object-cover h-90 w-100' : 'flex m-1 p-6 gap-1 w-100'}>
              {technologies.map((technology) => (
                <div className='w-20 h-12 tooltip-arrow' key={technology.name}>
                  <img src={technology.icon} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "Sobre");