import React from 'react';
import { User, MapPin, Calendar, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Image Side - Left */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-neon-red to-red-900 rounded-lg blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden border border-gray-800 bg-neutral-900">
               <img 
                src="https://i.ibb.co/Cj2n9V8/me.jpg" 
                alt="Gandharva Dewan" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <p className="text-neon-red font-mono text-sm">AGE 20 | 2ND YEAR</p>
              </div>
            </div>
          </div>

          {/* Text Side - Right */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-1 w-10 bg-neon-red"></span>
              <h2 className="text-neon-red font-mono text-xl tracking-widest uppercase">The Architect</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Gandharva Dewan</h3>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              I am a 2nd-year college student with a dual passion for building digital experiences and crafting visual narratives. At <strong className="text-white">Pegasus Services</strong>, I bridge the gap between technical precision and artistic expression.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neutral-900 rounded-lg border border-gray-800 text-neon-red">
                  <User size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Role</h4>
                  <p className="text-gray-500 text-sm">Full Stack Developer & Director</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-neutral-900 rounded-lg border border-gray-800 text-neon-red">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Experience</h4>
                  <p className="text-gray-500 text-sm">2 Years Commercial Exp.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-neutral-900 rounded-lg border border-gray-800 text-neon-red">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Location</h4>
                  <p className="text-gray-500 text-sm">University Campus, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-neutral-900 rounded-lg border border-gray-800 text-neon-red">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Education</h4>
                  <p className="text-gray-500 text-sm">Bachelor's Degree (Ongoing)</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;