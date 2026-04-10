import { useState, useEffect } from 'react';

import { NavBar } from './component/NavigationBar';
import { Home } from './component/Home';
import { About } from './component/About';
import { Projects } from './component/Projects';
import Formation from './component/Formation';
import { Skills } from './component/Skills';
import { Contact } from './component/Contact';
import { Footer } from './component/Footer';
import { Hello } from './component/Hello';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? (
        <Hello />
      ) : (
        <>
          <NavBar />
          <Home />
          <About />
          <Formation />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;