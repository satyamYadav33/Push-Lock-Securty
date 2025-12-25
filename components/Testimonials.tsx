
import React, { useState } from 'react';

const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);

  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Homeowner",
      sector: "Residential",
      content: "Since installing Push Lock's home monitoring system, I've never felt safer. The response time when we accidentally tripped the alarm was incredible. Worth every penny.",
      avatar: "https://picsum.photos/seed/sarah/100/100"
    },
    {
      name: "Dr. Robert Chen",
      role: "Hospital Director",
      sector: "Healthcare",
      content: "Push Lock manages our facility's complex security needs with absolute professionalism. Their team is empathetic yet firm, which is vital in a hospital setting.",
      avatar: "https://picsum.photos/seed/robert/100/100"
    },
    {
      name: "Linda Thompson",
      role: "School Administrator",
      sector: "Education",
      content: "Ensuring the safety of 800 children is a massive responsibility. Push Lock Security made it simple with their comprehensive school safety protocols.",
      avatar: "https://picsum.photos/seed/linda/100/100"
    }
  ];

  return (
    <section className="py-24 bg-blue-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-cyan-400 font-bold tracking-widest uppercase mb-4">TESTIMONIALS</h2>
          <h3 className="text-4xl md:text-5xl font-black font-outfit">Trusted by <span className="text-cyan-400">Leaders</span></h3>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 relative">
              <div className="w-24 h-24 rounded-full border-4 border-cyan-500 overflow-hidden shadow-2xl">
                <img src={testimonials[active].avatar} alt={testimonials[active].name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-cyan-500 p-2 rounded-full shadow-lg">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.827a1 1 0 00-.788 0l-7 3a1 1 0 000 1.846l7 3a1 1 0 00.788 0l7-3a1 1 0 000-1.846l-7-3z" />
                  <path d="M4.394 12.115L9 14.089V17.18c-1.235-.359-2.265-1.127-2.886-2.031a1 1 0 00-1.722 1.025 5.003 5.003 0 006.108 2.27 1 1 0 00.5-.866V14.09l4.606-1.974A1 1 0 0015.606 10.27l-4.606 1.974V10.27l-4.606 1.974a1 1 0 00-1.006 1.842z" />
                </svg>
              </div>
            </div>

            <svg className="w-12 h-12 text-cyan-500/30 mb-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 7.34315 11.3602 6 13.017 6H19.017C20.6739 6 22.017 7.34315 22.017 9V15C22.017 16.6569 20.6739 18 19.017 18H16.017C15.4647 18 15.017 18.4477 15.017 19V21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V12C3.017 12.5523 2.56928 13 2.017 13H0.017C-0.535282 13 -1.017 12.5523 -1.017 12V9C-1.017 7.34315 0.326154 6 1.983 6H8.017C9.67385 6 11.017 7.34315 11.017 9V15C11.017 16.6569 9.67385 18 8.017 18H5.017C4.46472 18 4.017 18.4477 4.017 19V21H3.017Z" />
            </svg>

            <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-8 italic">
              "{testimonials[active].content}"
            </p>

            <div className="mb-12">
              <h4 className="text-xl font-bold font-outfit">{testimonials[active].name}</h4>
              <p className="text-cyan-400 font-semibold uppercase tracking-widest text-sm">{testimonials[active].role} — {testimonials[active].sector}</p>
            </div>

            <div className="flex gap-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-3 h-3 rounded-full transition-all ${active === i ? 'bg-cyan-500 w-8' : 'bg-white/20'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
