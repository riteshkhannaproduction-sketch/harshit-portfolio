'use client'
import { useState } from 'react'

const testimonials = [
  { id: 1, name: 'Amit Sharma',      company: 'TechFlow Solutions',      logo: 'T', logoColor: 'bg-blue-100 text-blue-600',    rating: 5, text: 'Harshit’s architectural insights and project management skills completely turned our digital transformation initiative around. His ability to lead complex engineering projects while keeping business goals in focus is truly exceptional.' },
  { id: 2, name: 'Priya Patel',       company: 'InnovateX',       logo: 'I', logoColor: 'bg-green-100 text-green-600',  rating: 5, text: 'Working with Harshit has been a game-changer for our team. He seamlessly bridged the gap between engineering and management, ensuring our enterprise software was delivered on time and exceeded performance benchmarks.' },
  { id: 3, name: 'Rahul Desai',  company: 'DataCore Analytics',  logo: 'D', logoColor: 'bg-yellow-100 text-yellow-700',rating: 5, text: 'Harshit is a rare talent who deeply understands both code and strategy. His work on our backend infrastructure dramatically improved our system uptime, and his clear communication kept all stakeholders aligned.' },
  { id: 4, name: 'Sneha Rao',       company: 'Nexus Enterprises',       logo: 'N', logoColor: 'bg-purple-100 text-purple-600',rating: 5, text: 'I was thoroughly impressed by Harshit’s technical expertise and leadership. He structured our development pipeline perfectly, reducing our time-to-market significantly. Highly recommended for any critical IT projects.' },
]

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)

  return (
    <section id="testimonials" className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-black/40 mb-3 sm:mb-4">Client Reviews</p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight text-black"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Testimonials
            </h2>
            <p className="text-gray-500 mt-2 sm:mt-3 text-sm max-w-xs">
              Positive feedback from clients I've worked with.
            </p>
          </div>
          {/* Dot navigation */}
          <div className="flex gap-2 self-start sm:self-end">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-200 ${active === i ? 'w-8 h-3 bg-black' : 'w-3 h-3 bg-gray-200 hover:bg-gray-400'}`}
              />
            ))}
          </div>
        </div>

        {/* Client logos row — scrollable on mobile */}
        <div className="flex gap-3 mb-8 sm:mb-12 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl border-2 transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                active === i ? 'border-black bg-black text-white' : 'border-gray-100 bg-gray-50 hover:border-gray-300'
              }`}
            >
              <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center text-xs font-bold ${active === i ? 'bg-lime-400 text-black' : t.logoColor}`}>
                {t.logo}
              </div>
              <span className="text-sm font-semibold">{t.company}</span>
            </button>
          ))}
        </div>

        {/* Testimonials grid — 1 col mobile, 2 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-2xl p-5 sm:p-7 border-2 cursor-pointer transition-all duration-300 ${
                active === i ? 'border-black bg-black text-white shadow-2xl scale-[1.01]' : 'border-gray-100 bg-gray-50 hover:border-gray-300'
              }`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4 sm:mb-5">
                {[...Array(t.rating)].map((_, j) => (
                  <span key={j} className={`text-sm ${active === i ? 'text-lime-400' : 'text-yellow-400'}`}>★</span>
                ))}
              </div>
              <p className={`text-sm leading-relaxed mb-5 sm:mb-6 ${active === i ? 'text-white/80' : 'text-gray-600'}`}>"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm font-bold ${active === i ? 'bg-lime-400 text-black' : t.logoColor}`}>
                  {t.logo}
                </div>
                <div>
                  <div className={`font-semibold text-sm ${active === i ? 'text-white' : 'text-black'}`}>{t.name}</div>
                  <div className={`text-xs ${active === i ? 'text-white/50' : 'text-gray-400'}`}>{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
