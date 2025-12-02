import React from 'react';
import { ChevronDown, Code, Film } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" 
          alt="Cinematic Coding Environment" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-4 inline-block px-4 py-1 border border-neon-red/50 rounded-full bg-black/50 backdrop-blur-sm">
          <span className="text-neon-red font-mono text-sm tracking-[0.2em]">EST. 2024</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase">
          Gandharva <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-red to-red-500 drop-shadow-[0_0_10px_rgba(255,0,51,0.4)]">Dewan</span>
        </h1>
        
        <p className="text-xl md:text-3xl text-gray-300 mb-8 font-light tracking-wide max-w-3xl mx-auto">
          Merging the logic of <span className="text-neon-red font-mono font-bold">&lt;Code /&gt;</span> with the art of <span className="text-neon-red font-bold italic">Cinema</span>.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12">
          <a 
            href="#development" 
            className="group relative px-8 py-3 w-48 overflow-hidden rounded-none border border-neon-red bg-transparent text-white shadow-neon transition-all hover:bg-neon-red hover:text-black"
          >
            <div className="absolute inset-0 w-0 bg-neon-red transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <div className="relative flex items-center justify-center gap-2">
              <Code size={20} />
              <span className="font-mono font-bold">DEVELOPER</span>
            </div>
          </a>

          <a 
            href="#filmmaking" 
            className="group relative px-8 py-3 w-48 overflow-hidden rounded-none border border-white bg-transparent text-white transition-all hover:border-neon-red hover:text-neon-red"
          >
             <div className="relative flex items-center justify-center gap-2">
              <Film size={20} />
              <span className="font-mono font-bold">FILMMAKER</span>
            </div>
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white hover:text-neon-red transition-colors">
          <ChevronDown size={40} />
        </a>
      </div>
    </section>
  );
};

export default Hero;