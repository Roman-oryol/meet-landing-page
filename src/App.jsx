import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Nav from './components/blocks/Nav';
import Hero from './components/blocks/Hero';
import Main from './components/blocks/Main';
import Footer from './components/blocks/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <Main />
      <Footer />
    </>
  );
}

export default App;
