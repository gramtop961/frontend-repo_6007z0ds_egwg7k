import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import CTA from './components/CTA';
import FooterTerminal from './components/FooterTerminal';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <Skills />
      <Portfolio />
      <CTA />
      <FooterTerminal />
    </div>
  );
};

export default App;
