
import React, { useState, useEffect, useCallback } from 'react';
import { 
  Menu, X, Github, Linkedin, Mail, 
  Code, Palette, ShoppingBag, Globe, ArrowUpRight, 
  GraduationCap, Award, Users, ExternalLink, Copy, Check, Sparkles,
  Zap, ArrowRight, Mic, Play
} from 'lucide-react';
import { 
  SERVICES, FREELANCER_DATA, 
  ACADEMIC_BACKGROUND, CERTIFICATIONS, LEADERSHIP,
  PODCASTS
} from './constants';
import { ChatAssistant } from './components/ChatAssistant';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setMobileMenuOpen(false);
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(FREELANCER_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const emailSubject = encodeURIComponent("Project Inquiry - [Your Name/Company]");
  const emailBody = encodeURIComponent("Hi Peter,\n\nI saw your portfolio and would love to discuss a potential project with you.\n\nLooking forward to hearing from you!");
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${FREELANCER_DATA.email}&su=${emailSubject}&body=${emailBody}`;
  
  return (
    <div className="min-h-screen bg-black text-[#f5f5f7] selection:bg-white selection:text-black font-['Inter']">
      
      {/* Navbar - Refined Smoothness */}
      <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ease-in-out ${
        isScrolled ? 'bg-black/80 backdrop-blur-2xl py-3 border-b border-white/5' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-lg font-semibold tracking-tight text-white flex items-center gap-2 group transition-opacity hover:opacity-70"
          >
            {FREELANCER_DATA.name.split(' ').pop()}
          </button>
          
          <div className="hidden md:flex gap-10 text-[12px] font-medium tracking-wide">
            {['About', 'Services', 'Podcasts', 'Resume', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())} 
                className="text-[#a1a1a6] hover:text-white transition-all duration-300 ease-out uppercase tracking-widest"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex gap-4 text-[#a1a1a6]">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300"><Github size={18} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300"><Linkedin size={18} /></a>
            </div>
            <a 
              href={gmailComposeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider hover:bg-[#f5f5f7] hover:scale-105 active:scale-95 transition-all duration-500 ease-out shadow-lg"
            >
              Hire Me
            </a>
          </div>

          <button className="md:hidden text-white transition-transform active:scale-90" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-0 bg-black z-50 pt-24 px-10 flex flex-col gap-8 transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
           <button onClick={() => setMobileMenuOpen(false)} className="absolute top-6 right-6 text-white active:scale-90 transition-transform"><X size={32}/></button>
          {['About', 'Services', 'Podcasts', 'Resume', 'Contact'].map((item, idx) => (
            <button 
              key={item} 
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`text-4xl font-bold text-white tracking-tighter text-left transition-all duration-700 delay-[${idx * 100}ms] ${mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section - Refined Entrances */}
      <section id="about" className="relative pt-32 lg:pt-56 pb-24 min-h-screen flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-white/5 to-transparent rounded-full blur-[120px] opacity-50 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="flex-1 order-2 lg:order-1 text-center lg:text-left animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full">
                <span className="text-[10px] font-bold text-[#a1a1a6] uppercase tracking-[0.2em]">Freelancer</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-[110px] font-bold tracking-[-0.04em] mb-10 leading-[0.9] text-white">
                BUILDING <br />
                <span className="text-[#a1a1a6]">DIGITAL</span> <br />
                FUTURES.
              </h1>
              
              <p className="max-w-xl mx-auto lg:mx-0 text-xl md:text-2xl text-[#a1a1a6] mb-12 leading-relaxed font-normal">
                Hi, I'm <span className="text-white font-semibold">{FREELANCER_DATA.name}</span>. {FREELANCER_DATA.bio}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch lg:items-center justify-center lg:justify-start gap-4">
                <a 
                  href={FREELANCER_DATA.stripeLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold text-sm hover:bg-[#f5f5f7] active:scale-95 transition-all duration-500 ease-out shadow-2xl"
                >
                  Start a Project
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
                <button 
                  onClick={() => scrollToSection('resume')} 
                  className="px-10 py-5 rounded-full font-bold text-sm border border-white/20 text-white hover:bg-white/5 active:scale-95 transition-all duration-500 ease-out"
                >
                  View Experience
                </button>
              </div>
            </div>

            <div className="w-full max-w-[340px] md:max-w-[480px] order-1 lg:order-2 relative mx-auto lg:mx-0 animate-in fade-in zoom-in-95 duration-1000 delay-300">
              <div className="relative group">
                <div className="squircle overflow-hidden bg-[#1d1d1f] relative shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] border border-white/5 p-2 transition-transform duration-700 group-hover:scale-[1.02]">
                  <div className="aspect-[4/5] squircle overflow-hidden relative bg-black">
                    {!imageLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center bg-[#1d1d1f]">
                        <div className="w-8 h-8 border-2 border-white/10 border-t-white/50 rounded-full animate-spin"></div>
                      </div>
                    )}
                    <img 
                      src={FREELANCER_DATA.photo} 
                      alt={FREELANCER_DATA.name} 
                      className={`w-full h-full object-cover transition-all duration-1000 ease-out ${imageLoaded ? 'opacity-90 grayscale-0 scale-100' : 'opacity-0 scale-110'}`}
                      onLoad={() => setImageLoaded(true)}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600';
                      }}
                    />
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 glass p-6 rounded-3xl shadow-2xl hidden md:block transition-all duration-700 group-hover:-translate-y-2">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white">
                      <Globe size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-[#a1a1a6] uppercase tracking-widest">Based In</p>
                      <p className="text-sm font-semibold text-white tracking-tight">{FREELANCER_DATA.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Uniform Micro-animations */}
      <section id="services" className="py-32 bg-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-20 text-center lg:text-left">
            <p className="text-[#a1a1a6] text-[12px] font-bold uppercase tracking-[0.4em] mb-4">Core</p>
            <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none">SERVICES.</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="squircle p-12 bg-[#1d1d1f]/40 border border-white/5 hover:bg-[#1d1d1f]/70 transition-all duration-500 ease-out group relative cursor-default hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <div className="w-12 h-12 text-white mb-8 transition-transform duration-500 group-hover:-translate-y-3">
                   {service.title.includes('Full-Stack') && <Code size={40} strokeWidth={1} />}
                   {service.title.includes('E-commerce') && <ShoppingBag size={40} strokeWidth={1} />}
                   {service.title.includes('UI/UX') && <Palette size={40} strokeWidth={1} />}
                </div>
                <h4 className="text-2xl font-bold mb-4 text-white tracking-tight">{service.title}</h4>
                <p className="text-[#a1a1a6] leading-relaxed text-lg font-light transition-colors group-hover:text-white/80">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Podcasts Section - High-quality Imagery and Smooth Hover */}
      <section id="podcasts" className="py-32 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-20 text-center lg:text-left">
            <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight">PODCASTS.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {PODCASTS.map((podcast, idx) => (
              <a 
                key={podcast.id} 
                href={podcast.spotifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`${idx === 0 ? 'md:col-span-8' : 'md:col-span-4'} squircle relative overflow-hidden group hover:scale-[1.01] transition-all duration-700 ease-out bg-[#1d1d1f] border border-white/5 shadow-2xl block`}
              >
                <div className="absolute inset-0">
                  <img 
                    src={podcast.image} 
                    alt={podcast.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1200ms] ease-out"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?auto=format&fit=crop&q=80&w=800';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent transition-opacity duration-700 group-hover:opacity-80"></div>
                </div>

                <div className="relative h-full min-h-[450px] p-8 md:p-12 flex flex-col justify-end">
                  <div className="mb-6 flex items-center gap-4 transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center text-white border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500">
                      <Mic size={20} />
                    </div>
                    <span className="text-[11px] font-bold text-white uppercase tracking-[0.3em] drop-shadow-lg">{podcast.category}</span>
                  </div>
                  
                  <h4 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight group-hover:translate-x-1 transition-transform duration-500 drop-shadow-2xl">{podcast.title}</h4>
                  <p className="text-[#f5f5f7] text-lg font-light leading-relaxed mb-10 max-w-xl transition-all duration-500 group-hover:text-white line-clamp-2 md:line-clamp-none drop-shadow-lg">
                    {podcast.description}
                  </p>
                  
                  <div className="inline-flex items-center gap-3 w-fit px-8 py-4 bg-white text-black rounded-full font-bold text-sm hover:bg-[#f5f5f7] active:scale-95 transition-all duration-500 shadow-xl group-hover:translate-x-1">
                    <Play size={16} fill="currentColor" />
                    Listen on Spotify
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Background Section - Refined Hover Transparency */}
      <section id="resume" className="py-32 bg-black relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-24">
            <p className="text-[#a1a1a6] text-[12px] font-bold uppercase tracking-[0.4em] mb-4">Academic</p>
            <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight uppercase">EDUCATIONAL BACKGROUND.</h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-16">
            <div className="space-y-12">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <GraduationCap size={20} className="text-[#a1a1a6]" />
                <h4 className="text-xl font-bold text-white tracking-tight uppercase">Institutions</h4>
              </div>
              <div className="space-y-10">
                {ACADEMIC_BACKGROUND.map((edu, i) => (
                  <div key={i} className="group transition-all duration-500 hover:translate-x-2">
                    <p className="text-[11px] font-bold text-[#a1a1a6] uppercase tracking-widest mb-1">{edu.year}</p>
                    <h5 className="text-lg text-white font-bold leading-tight mb-2 group-hover:text-white">{edu.degree}</h5>
                    <p className="text-[#a1a1a6] text-sm font-light transition-colors group-hover:text-white/60">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-12">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <Award size={20} className="text-[#a1a1a6]" />
                <h4 className="text-xl font-bold text-white tracking-tight uppercase">Credentials</h4>
              </div>
              <div className="grid gap-6">
                {CERTIFICATIONS.map((cert, i) => (
                  <div key={i} className="group border-b border-white/5 pb-4 last:border-0 transition-all duration-500 hover:translate-x-2">
                    <p className="text-[10px] font-bold text-[#a1a1a6] uppercase tracking-widest mb-1">{cert.provider}</p>
                    <h5 className="text-white font-medium text-md leading-snug group-hover:text-white transition-colors">{cert.title}</h5>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-12">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <Users size={20} className="text-[#a1a1a6]" />
                <h4 className="text-xl font-bold text-white tracking-tight uppercase">Leadership</h4>
              </div>
              <div className="space-y-10">
                {LEADERSHIP.map((lead, i) => (
                  <div key={i} className="group transition-all duration-500 hover:translate-x-2">
                    <h5 className="text-lg text-white font-bold mb-1 group-hover:text-white">{lead.role}</h5>
                    <p className="text-[#a1a1a6] text-[11px] font-bold uppercase tracking-widest mb-3 transition-colors group-hover:text-white/60">{lead.organization}</p>
                    <p className="text-[#a1a1a6] text-sm leading-relaxed font-light">{lead.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Cinematic Scale */}
      <section id="contact" className="py-48 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl text-center relative z-10">
          <h3 className="text-5xl md:text-[100px] font-bold mb-20 text-white tracking-tighter leading-none transition-transform duration-1000 hover:scale-[1.02] cursor-default">LET'S CREATE <br />SOMETHING REAL.</h3>
          
          <div className="flex flex-col items-center gap-16">
            <a 
              href={gmailComposeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl md:text-5xl font-light text-white hover:text-[#a1a1a6] transition-all duration-700 underline underline-offset-[16px] decoration-white/10 hover:decoration-white/40"
            >
              {FREELANCER_DATA.email}
            </a>

            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={copyEmail}
                className="flex items-center gap-3 px-8 py-4 bg-[#1d1d1f] border border-white/5 hover:bg-white hover:text-black active:scale-95 transition-all duration-500 rounded-full text-xs font-bold uppercase tracking-widest text-white"
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
                {copied ? 'Copied' : 'Copy Email'}
              </button>
              <a 
                href={gmailComposeUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-white border border-white hover:bg-[#f5f5f7] active:scale-95 transition-all duration-500 rounded-full text-xs font-bold uppercase tracking-widest text-black shadow-2xl"
              >
                <Zap size={18} />
                Instant Hire
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Final Polish */}
      <footer className="py-20 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="space-y-4">
            <div className="text-2xl font-bold tracking-tight text-white uppercase">
              {FREELANCER_DATA.name.split(' ').pop()}
            </div>
            <p className="text-[#a1a1a6] text-[11px] font-bold uppercase tracking-[0.3em]">Bridging Agribusiness and Tech.</p>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-6">
            <div className="flex gap-8">
              {['About', 'Services', 'Podcasts', 'Resume'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-[#a1a1a6] hover:text-white transition-colors duration-300 text-[11px] font-bold uppercase tracking-widest"
                >
                  {item}
                </button>
              ))}
            </div>
            <p className="text-[#424245] text-[11px] font-medium tracking-wide">All rights reserved. oblx © 2026</p>
          </div>
        </div>
      </footer>

      <ChatAssistant />
    </div>
  );
};

export default App;
