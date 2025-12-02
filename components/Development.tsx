import React from 'react';
import { Code2, Database, Layout, Smartphone, Server, Cpu } from 'lucide-react';

const Development: React.FC = () => {
  const skills = [
    { name: "Frontend Dev", icon: <Layout />, desc: "React, Vue, Tailwind CSS" },
    { name: "Backend Dev", icon: <Server />, desc: "Node.js, Express, Python" },
    { name: "Database", icon: <Database />, desc: "MongoDB, PostgreSQL, Firebase" },
    { name: "Mobile Apps", icon: <Smartphone />, desc: "React Native, Flutter" },
    { name: "API Integration", icon: <Code2 />, desc: "REST, GraphQL" },
    { name: "System Arch", icon: <Cpu />, desc: "Scalable Infrastructure" },
  ];

  return (
    <section id="development" className="py-24 bg-neutral-950 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-neon-red/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content - Left */}
            <div className="order-2 lg:order-1">
                <div className="flex items-center gap-2 mb-4">
                <span className="h-1 w-10 bg-neon-red"></span>
                <h2 className="text-neon-red font-mono text-xl tracking-widest uppercase">Development</h2>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Building the Future Line by Line</h3>
                <p className="text-gray-400 text-lg mb-12">
                    My approach to development focuses on clean, efficient code and intuitive user experiences. I specialize in full-stack web applications that are robust, scalable, and visually stunning.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-neutral-900/50 p-4 border border-gray-800 rounded-lg hover:border-neon-red/50 transition-colors group">
                            <div className="flex items-center gap-3">
                                <div className="text-gray-400 group-hover:text-neon-red transition-colors">
                                    {skill.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">{skill.name}</h4>
                                    <p className="text-xs text-gray-500">{skill.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Visual Content - Right */}
             <div className="order-1 lg:order-2 relative">
                <div className="absolute -inset-4 bg-gradient-to-l from-neon-red to-transparent opacity-20 blur-2xl"></div>
                <div className="relative rounded-xl overflow-hidden border border-gray-800 shadow-2xl shadow-neon-red/10">
                    <img 
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" 
                        alt="Development Setup" 
                        className="w-full h-auto object-cover opacity-80"
                    />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Development;