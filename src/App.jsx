import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react"

import { About, Contact, Experience, Home, Navbar, ProjectsBackend, Projetos, StarsCanvas, Tech } from "./components";
import { ScrollTop } from "./components/ScrollTop"

const App = () => {
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
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center opacity-85">
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
    </BrowserRouter>
  )
}

export default App
