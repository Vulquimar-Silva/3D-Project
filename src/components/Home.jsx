import { motion } from 'framer-motion';
import { useEffect, useState } from 'react'

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
      <div className={`${styles.paddingX} absolute inset-0 top-[140px] max-w-7x1 mx-auto flex flex-row items-start gap-5 moonEffectGsap`}>

        <div className='absolute mouse-events'>
          {!isMobile ? (
            <div>
              <h1 className={`${styles.homeHeadText}  text-[#e6e1e1] opacity-80 textHomeEffectGsap-1`}>
                Olá, terráqueo
              </h1>
              <h1 className='text-[#e6e1e1] font-black lg:text-[60px] w-full sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[-10px] mt-1 opacity-80 textHomeEffectGsap-2'>
              seja bem vindo
              </h1>
              <h1 className='relative font-black text-[#e6e1e1] lg:text-[60px] w-full sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[-10px] mt-1 opacity-80 textHomeEffectGsap-3'>
                ao &nbsp;portfólio 3D
              </h1>
            </div>
          ) : (
            <div>
              <h1 className={`${styles.homeMobileText} text-[#e6e1e1] opacity-80 textHomeEffectGsap-1`}>
                Olá, terráqueo
              </h1>
              <h1 className='text-[#e6e1e1] font-black lg:text-[40px] w-full sm:text-[50px] xs:text-[40px] text-[40px] lg:leading-[-10px] mt-1 opacity-80 textHomeEffectGsap-2'>
               seja bem vindo
              </h1>
              <h1 className='text-[#e6e1e1] font-black lg:text-[40px] w-full sm:text-[50px] xs:text-[40px] text-[40px] lg:leading-[-10px] mt-1 opacity-80 textHomeEffectGsap-3'>
              ao &nbsp;portfólio 3D
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