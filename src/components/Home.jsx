import { motion } from 'framer-motion';
import {useState, useEffect} from 'react'

import { styles } from '../styles'
import { HomeCanvas, MoonCanvas } from './canvas';

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Adiciona um ouvinte para alterações no tamanho da tela
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Define o valor inicial da variável de estado `isMobile`
    setIsMobile(mediaQuery.matches);

    // Defina uma função de retorno de chamada para lidar com alterações na media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Adiciona a função de retorno de chamada como um ouvinte para alterações no media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove o ouvinte quando o componente for desmontado
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[110px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>

        <div className='absolute mouse-events'>
          {!isMobile ? (
            <div>
              <h1 className={`${styles.homeHeadText} opacity-80`}>
                  Hi, terráqueos
                </h1>
                <h1 className='text-[#915eff] font-black lg:text-[70px] w-full sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[-10px] mt-1 opacity-90'>bem vindos</h1>        
                <h1 className='relative font-black lg:text-[70px] w-full sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[-10px] mt-1 opacity-80'>
                ao meu &nbsp; portfólio
              </h1>
            </div>
          ) : (
          <div>
            <h1 className={`${styles.homeMobileText} opacity-80`}>
              Hi, terráqueos
            </h1>
            <h1 className='opacity-0'>bem vindos</h1>        
            <h1 className='opacity-0'>
              ao meu&nbsp; portfólio 
            </h1>
          </div>
          )
        }
        </div>
        <MoonCanvas />
      </div>
      <HomeCanvas />

      <div className='absolute xs:bottom-12 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Home