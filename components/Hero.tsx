
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1557597774-9d2739f85a94?q=80&w=2000&auto=format&fit=crop" 
          alt="Modern Security Monitoring" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-600/20 text-cyan-400 rounded-full text-xs font-bold tracking-wider uppercase mb-6 border border-cyan-400/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            5 Years of Trusted Protection
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Comprehensive <span className="text-cyan-500">Security</span> for What Matters Most.
          </h1>
          
          <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-lg">
            A dedicated team of 150+ professionals providing elite security for homes, schools, and hospitals. Premium protection starting at reasonable costs.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-cyan-600/20 hover:-translate-y-1 text-center"
            >
              Get a Free Quote
            </a>
            <a 
              href="#services" 
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold backdrop-blur-sm transition-all text-center border border-white/10"
            >
              Explore Services
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i} 
                  src={`https://picsum.photos/seed/${i+10}/64/64`} 
                  className="w-10 h-10 rounded-full border-2 border-blue-950" 
                  alt="Team Member" 
                />
              ))}
            </div>
            <p className="text-sm text-slate-400">
              Join <span className="text-white font-semibold">1,000+ satisfied clients</span> secured by our experts.
            </p>
          </div>
        </div>
        
        <div className="hidden lg:block relative">
          <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-900/40">
            <img 
              src="https://images.unsplash.com/photo-1590483734724-383b853b237d?q=80&w=800&auto=format&fit=crop" 
              alt="Security Professional" 
              className="w-full h-auto"
            />
          </div>
          {/* Floating Element */}
          <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-2xl max-w-[240px] z-20 animate-bounce-slow">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="font-bold text-slate-900">24/7 Monitoring</span>
            </div>
            <p className="text-xs text-slate-500 leading-tight">Our rapid response team is always active and ready to intervene.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
