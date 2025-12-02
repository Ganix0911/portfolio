import React from 'react';
import { Github, Linkedin, Instagram, Youtube, Mail, Phone, Terminal } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                     <Terminal className="h-6 w-6 text-neon-red" />
                     <span className="font-bold text-xl tracking-wider font-mono text-white">PEGASUS<span className="text-neon-red">SERVICES</span></span>
                </div>
                <p className="text-gray-500 text-sm">Gandharva Dewan | Web Developer & Filmmaker</p>
            </div>

            <div className="flex space-x-6">
                {/* Github - Neon Sky Blue */}
                <a href="https://github.com/Ganix0911" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]">
                    <Github size={24} />
                </a>
                {/* Linkedin - Neon Blue */}
                <a href="https://www.linkedin.com/in/gandharva-dewan-6051a4331/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110 hover:drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]">
                    <Linkedin size={24} />
                </a>
                {/* Instagram - Neon Purple */}
                <a href="https://www.instagram.com/ganix.creates/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors transform hover:scale-110 hover:drop-shadow-[0_0_5px_rgba(168,85,247,0.8)]">
                    <Instagram size={24} />
                </a>
                {/* Youtube - Neon Red */}
                <a href="https://www.youtube.com/@ganix0911" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors transform hover:scale-110 hover:drop-shadow-[0_0_5px_rgba(220,38,38,0.8)]">
                    <Youtube size={24} />
                </a>
                {/* Email - Golden */}
                <a href="mailto:office@pegasusservices.in" className="text-gray-400 hover:text-yellow-400 transition-colors transform hover:scale-110 hover:drop-shadow-[0_0_5px_rgba(250,204,21,0.8)]">
                    <Mail size={24} />
                </a>
            </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} Pegasus Services. All rights reserved.</p>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
                <Phone size={14} />
                <span>--</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;