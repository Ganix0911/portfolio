import React from 'react';
import { Camera, Clapperboard, Video, Aperture, MonitorPlay, Mic2 } from 'lucide-react';

const Filmmaking: React.FC = () => {
    const services = [
        { icon: <Camera />, title: "Cinematography", desc: "Capturing light and emotion through the lens." },
        { icon: <Clapperboard />, title: "Direction", desc: "Guiding the vision from script to screen." },
        { icon: <MonitorPlay />, title: "Editing", desc: "Weaving the narrative in post-production." },
        { icon: <Video />, title: "Color Grading", desc: "Setting the mood and tone visually." },
    ];

  return (
    <section id="filmmaking" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Visual Content - Left */}
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-tr from-white to-neutral-800 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative h-[600px] w-full rounded-lg overflow-hidden border border-gray-800">
                    <img 
                        src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop" 
                        alt="Filmmaking Set" 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                    <div className="absolute bottom-8 left-8">
                         <h4 className="text-4xl font-black text-white mb-2">CINEMA</h4>
                         <p className="text-neon-red font-mono tracking-widest">VISUAL STORYTELLING</p>
                    </div>
                </div>
            </div>

            {/* Text Content - Right */}
            <div>
                 <div className="flex items-center gap-2 mb-4">
                    <span className="h-1 w-10 bg-white"></span>
                    <h2 className="text-white font-mono text-xl tracking-widest uppercase">Filmmaking</h2>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Frames that Speak</h3>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                    Film is more than just moving images; it's about capturing a feeling. I bring a cinematic eye to every project, whether it's a short film, a commercial, or a music video. My goal is to evoke emotion and tell compelling stories.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="bg-neutral-900 border border-neutral-800 p-6 rounded-none hover:bg-neutral-800 transition-all group">
                            <div className="text-white mb-4 group-hover:text-neon-red transition-colors">
                                {service.icon}
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
                            <p className="text-gray-500 text-sm">{service.desc}</p>
                        </div>
                    ))}
                </div>
                
                <div className="mt-10 p-4 border-l-4 border-neon-red bg-neutral-900/50">
                    <p className="italic text-gray-400">"Cinema is a matter of what's in the frame and what's out."</p>
                    <p className="text-right text-neon-red font-bold mt-2 text-sm">- Martin Scorsese</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Filmmaking;