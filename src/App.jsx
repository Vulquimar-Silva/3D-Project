import { useEffect, useState } from "react"
import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Home, Navbar, ProjectsBackend, Projetos, StarsCanvas, Tech } from "./components";
import { ScrollTop } from "./components/ScrollTop"
import SvgIntro from './svg'

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowSplash(false);
      document.body.style.overflow = "visible";
    }, 13500);

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
      clearTimeout(timer);
    };
  }, []);

  return (
    <BrowserRouter>
      {showSplash ? (
        <SvgIntro />
      ) : (
        <div className="relative z-0 bg-primary">
          <div className="opacity-80 bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Home />
          </div>
          <About />
          <Experience />
          {isMobile ? null : <Tech />}
          <Projetos />
          <ProjectsBackend />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
          <ScrollTop />
        </div>
      )}
    </BrowserRouter>
  )
}

export default App
