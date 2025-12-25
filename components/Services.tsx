
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Residential Security",
      description: "Advanced smart monitoring and on-site patrolling to keep your home and family safe 24/7.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      bg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "Educational Security",
      description: "Specialized safety protocols for schools and universities, ensuring a peaceful learning environment.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      bg: "bg-cyan-50",
      iconColor: "text-cyan-600",
    },
    {
      title: "Healthcare Protection",
      description: "Discreet but firm security for hospitals and clinics, managing access and emergency situations.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.423 15.441c.067.124.113.26.137.408.306 1.815-1.077 3.419-3.074 3.419H7.514c-1.997 0-3.38-1.604-3.074-3.419a1.947 1.947 0 01.137-.408M16.477 9c.489 0 .93-.245 1.185-.63L20.314 4.5M3.686 4.5l2.652 3.87c.255.385.696.63 1.185.63h8.954m0 0a4.5 4.5 0 11-9 0m9 0v.5a.5.5 0 01-.5.5h-8a.5.5 0 01-.5-.5V9" />
        </svg>
      ),
      bg: "bg-slate-50",
      iconColor: "text-slate-600",
    },
    {
      title: "Commercial & Retail",
      description: "Loss prevention and asset protection strategies tailored for businesses of all sizes.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      bg: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-900 font-bold tracking-tight mb-4 flex items-center justify-center gap-2">
            <span className="w-12 h-1 bg-cyan-600"></span>
            OUR SERVICES
            <span className="w-12 h-1 bg-cyan-600"></span>
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">What We <span className="text-blue-800">Secure</span></h3>
          <p className="text-lg text-slate-600">
            Push Lock Security offers a wide range of specialized services, ensuring every sector receives the specific protection it needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all group">
              <div className={`w-16 h-16 ${service.bg} ${service.iconColor} rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-blue-900 group-hover:text-white`}>
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-900 transition-colors">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-cyan-600 font-bold hover:gap-3 transition-all">
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
