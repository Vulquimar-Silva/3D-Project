import { useEffect, useState } from "react"
import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Home, Navbar, ProjectsBackend, Projetos, StarsCanvas } from "./components";
import { ScrollTop } from "./components/ScrollTop"
import SvgIntro from './svg'

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowSplash(false);
      document.body.style.overflow = "visible";
    }, 13000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <BrowserRouter>
      {showSplash ? (
        <SvgIntro />
      ) : (
        <div className="relative z-0 bg-hero-pattern">
          <div className="opacity-80 bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Home />
          </div>
          <About />

          <Experience />
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
