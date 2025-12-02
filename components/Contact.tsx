import React, { useState } from 'react';
import { Send, Mail, Phone, CheckCircle, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/mqagvweg", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-neutral-950 relative">
        <div className="absolute inset-0 overflow-hidden">
             <div className="absolute -top-[30%] -right-[10%] w-[50%] h-[50%] bg-neon-red/5 blur-[100px] rounded-full"></div>
        </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-neon-red font-mono text-xl tracking-widest uppercase mb-4">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Let's Create Something Epic</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="col-span-1 space-y-6">
                 <div className="bg-black border border-gray-800 p-6 rounded-lg text-center hover:border-neon-red transition-colors">
                    <Mail className="w-8 h-8 text-neon-red mx-auto mb-4" />
                    <h4 className="text-white font-bold mb-2">Email Me</h4>
                    <p className="text-gray-400 text-sm break-all">office@pegasusservices.in</p>
                 </div>
                 <div className="bg-black border border-gray-800 p-6 rounded-lg text-center hover:border-neon-red transition-colors">
                    <Phone className="w-8 h-8 text-neon-red mx-auto mb-4" />
                    <h4 className="text-white font-bold mb-2">Call Me</h4>
                    <p className="text-gray-400 text-sm">--</p>
                 </div>
            </div>

            {/* Form */}
            <div className="col-span-1 md:col-span-2 bg-black border border-gray-800 p-8 rounded-lg shadow-lg relative min-h-[450px]">
                {isSubmitted ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center animate-fade-in">
                        <div className="w-20 h-20 bg-neon-red/10 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle className="w-10 h-10 text-neon-red" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                        <p className="text-gray-400 mb-8 max-w-xs">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                        <button 
                            onClick={() => setIsSubmitted(false)} 
                            className="px-6 py-2 border border-neon-red text-neon-red hover:bg-neon-red hover:text-white transition-all rounded font-bold tracking-wider text-sm"
                        >
                            SEND ANOTHER
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col justify-between">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    className="w-full bg-neutral-900 border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-neon-red focus:ring-1 focus:ring-neon-red transition-all"
                                    placeholder="John Doe"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    className="w-full bg-neutral-900 border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-neon-red focus:ring-1 focus:ring-neon-red transition-all"
                                    placeholder="john@example.com"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                        </div>
                        
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                            <select 
                                name="subject" 
                                id="subject"
                                className="w-full bg-neutral-900 border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-neon-red focus:ring-1 focus:ring-neon-red transition-all"
                                disabled={isSubmitting}
                            >
                                <option value="development">Web Development Inquiry</option>
                                <option value="filmmaking">Filmmaking Project</option>
                                <option value="collaboration">Collaboration</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="flex-grow">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea 
                                name="message" 
                                id="message" 
                                rows={4} 
                                className="w-full bg-neutral-900 border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-neon-red focus:ring-1 focus:ring-neon-red transition-all"
                                placeholder="Tell me about your project..."
                                required
                                disabled={isSubmitting}
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full bg-neon-red hover:bg-red-700 text-white font-bold py-4 rounded transition-all duration-300 flex items-center justify-center gap-2 group shadow-neon hover:shadow-neon-hover disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="animate-spin" size={18} />
                                    SENDING...
                                </>
                            ) : (
                                <>
                                    SEND MESSAGE
                                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>
                )}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;