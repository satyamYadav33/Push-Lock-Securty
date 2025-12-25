
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: "Security Experts", value: "150", suffix: "+" },
    { label: "Years Experience", value: "5", suffix: "+" },
    { label: "Properties Secured", value: "1,200", suffix: "+" },
    { label: "Response Rate", value: "99.9", suffix: "%" },
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="text-4xl md:text-5xl font-black text-blue-900 mb-2 font-outfit transition-transform group-hover:scale-110">
                {stat.value}<span className="text-cyan-600">{stat.suffix}</span>
              </div>
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center items-center gap-12 grayscale opacity-60">
            <span className="font-outfit font-bold text-2xl text-slate-400">CITY SCHOOLS</span>
            <span className="font-outfit font-bold text-2xl text-slate-400">HEALTHCORE</span>
            <span className="font-outfit font-bold text-2xl text-slate-400">RESI-GUARD</span>
            <span className="font-outfit font-bold text-2xl text-slate-400">METRO BANK</span>
        </div>
      </div>
    </section>
  );
};

export default Stats;
