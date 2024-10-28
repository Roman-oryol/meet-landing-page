import AOS from 'aos';
import 'aos/dist/aos.css';

import Nav from './components/blocks/Nav';
import Hero from './components/blocks/Hero';
import Main from './components/blocks/Main';
import Footer from './components/blocks/Footer';
import './App.css';
import { useEffect } from 'react';

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
