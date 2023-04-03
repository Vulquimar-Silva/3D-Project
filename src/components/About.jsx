import { useEffect ,useState } from 'react';
import { motion } from 'framer-motion';

import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, slideIn, textVariant } from '../utils/motion';
import CanvasEffectParticles from './ParticleEffect';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    const mediaQuery = window.matchMedia("(max-width: 1280px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className={`xl:mt-15 xl:mb-5 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 2, 1)}
        className='flex-[1.75] p-10 rounded-2xl'
      >
        {!isMobile ? <CanvasEffectParticles /> : null}
      </motion.div>
      <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Sobre</p>
        <h2 className={`${styles.sectionHeadText} opacity-85`}>Resumo.</h2>
      </motion.div>

      <motion.p
        variants={slideIn("right", "tween", 0.2, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Sou desenvolvedor de software com experiência em TypeScript, React/Next, JavaScript, CSS3/Sass, Node.js e Electron.js.
        Aprendo rápido e colaboro de perto com os clientes para criar soluções eficientes, escaláveis ​​e
        que resolvem problemas do mundo real. Vamos trabalhar juntos para dar vida às suas ideias!
      </motion.p>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "Sobre");