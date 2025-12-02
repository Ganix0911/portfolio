import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Cinematic Website",
      category: "Immersive Web Experience",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070&auto=format&fit=crop",
      liveLink: "https://dev-bhoomi.netlify.app/",
      codeLink: "https://github.com/Ganix0911/devbhoomi.git",
      description: "A visually stunning website focusing on cinematics and storytelling through code. Features immersive scrolling and cinematic layouts."
    },
    {
      title: "Sanjivani Hospital",
      category: "Healthcare Platform",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2128&auto=format&fit=crop",
      liveLink: "https://sanjivanihospital.life/",
      codeLink: "https://github.com/Ganix0911/hospital.git",
      description: "A comprehensive digital solution for hospital management and patient services. Includes appointment booking and department information."
    },
    {
      title: "Old Portfolio",
      category: "Legacy Project",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop",
      liveLink: "https://ganix.netlify.app/",
      codeLink: "https://github.com/Ganix0911/old_portfolio.git",
      description: "Previous iteration of my personal portfolio showcasing early development skills and design evolution."
    },
    {
      title: "Psychologist Portfolio",
      category: "Medical Professional Site",
      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=2052&auto=format&fit=crop",
      liveLink: "https://sereneminds.netlify.app/",
      codeLink: "https://github.com/Ganix0911/psychologist_portfolio.git",
      description: "A serene and professional portfolio designed for a psychology practitioner, focusing on trust and calmness."
    }
  ];

  return (
    <section id="projects" className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-neutral-950">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-red/50 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <div className="flex items-center gap-2 mb-12">
            <span className="h-1 w-10 bg-neon-red"></span>
            <h2 className="text-neon-red font-mono text-xl tracking-widest uppercase">Selected Works</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
                <div key={index} className="group relative bg-neutral-900 border border-gray-800 rounded-lg overflow-hidden hover:border-neon-red transition-all duration-300 hover:shadow-neon">
                    {/* Image */}
                    <div className="h-64 overflow-hidden relative border-b border-gray-800">
                         <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    
                    {/* Content */}
                    <div className="p-8 relative z-20">
                        <div className="flex justify-between items-start mb-4">
                             <div>
                                <p className="text-neon-red text-xs font-mono tracking-widest mb-1">{project.category}</p>
                                <h3 className="text-2xl font-bold text-white group-hover:text-neon-red transition-colors">{project.title}</h3>
                             </div>
                        </div>
                        
                        <p className="text-gray-400 mb-8 text-sm leading-relaxed">{project.description}</p>
                        
                        <div className="flex gap-4">
                            <a 
                                href={project.liveLink} 
                                target="_blank" 
                                rel="noreferrer" 
                                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded text-sm font-bold border transition-all duration-300 ${project.liveLink === '#' ? 'border-gray-700 text-gray-500 cursor-not-allowed' : 'border-neon-red text-white bg-neon-red/10 hover:bg-neon-red hover:text-black'}`}
                            >
                                <ExternalLink size={16} /> LIVE DEMO
                            </a>
                            <a 
                                href={project.codeLink} 
                                target="_blank" 
                                rel="noreferrer" 
                                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded text-sm font-bold border transition-all duration-300 ${project.codeLink === '#' ? 'border-gray-700 text-gray-500 cursor-not-allowed' : 'border-white text-white hover:bg-white hover:text-black'}`}
                            >
                                <Github size={16} /> CODE
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Projects;