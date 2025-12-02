import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Development from './components/Development';
import Projects from './components/Projects';
import Filmmaking from './components/Filmmaking';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Development />
      <Projects />
      <Filmmaking />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;