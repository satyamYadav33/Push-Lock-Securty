
import React from 'react';

const ValueProp: React.FC = () => {
  const benefits = [
    {
      title: "Reasonable Cost",
      description: "We believe safety is a right, not a luxury. Our plans are competitively priced without compromising on quality.",
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      title: "150+ Expert Staff",
      description: "Our team is rigorously vetted and trained in conflict resolution, first aid, and advanced surveillance tech.",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    },
    {
      title: "Customized Strategy",
      description: "No two properties are the same. We conduct a detailed threat assessment before designing your security plan.",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
    },
    {
      title: "Modern Technology",
      description: "We utilize AI-driven monitoring and real-time reporting to stay one step ahead of any potential threats.",
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-100 rounded-full z-0 opacity-50 blur-2xl"></div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-100 rounded-full z-0 opacity-50 blur-3xl"></div>
            
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=1000&auto=format&fit=crop" 
                alt="Security Team Briefing" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 hidden xl:block">
                <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-xl max-w-[200px]">
                    <div className="text-4xl font-black mb-2 font-outfit">5</div>
                    <div className="text-xs font-bold uppercase tracking-widest opacity-80">Years of Success</div>
                </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
              High-Quality Security Doesn't Have to <span className="text-blue-900">Break the Bank.</span>
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {benefits.map((benefit, idx) => (
                <div key={idx}>
                  <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <svg className="w-8 h-8 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                </div>
                <div>
                    <p className="text-slate-900 font-bold mb-1 italic">"We grew from 5 to 150 employees because we prioritize people over profits."</p>
                    <p className="text-xs text-slate-500 font-semibold">— CEO, Push Lock Security</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
