'use client'
import { useState } from 'react'

const faqs = [
  { q: 'What IT consulting and development services do you offer?', a: 'I specialize in full-stack web development, enterprise IT strategy, digital transformation, system architecture, and technical project management.' },
  { q: 'How do you approach a new software project?',               a: 'My approach focuses on thorough requirement analysis, agile execution, and robust architectural design. I ensure alignment between business objectives and technical implementation.' },
  { q: 'Are you open to consulting or freelance opportunities?',     a: 'Yes, I am available for select technical consulting, system architecture design, and freelance development opportunities alongside my primary role.' },
  { q: 'What is your preferred technology stack?',                  a: 'I am highly proficient in Next.js, React, Node.js, and Python. For databases, I work with PostgreSQL and MongoDB, deploying primarily on AWS infrastructure.' },
  { q: 'Do you manage teams as well as write code?',                a: 'Absolutely. As a Senior Manager at HPCL, I lead cross-functional teams of engineers while staying deeply involved in technical architecture and code quality.' },
  { q: 'Do you offer post-launch support and infrastructure scaling?', a: 'Yes, I provide comprehensive post-launch support including infrastructure scaling, CI/CD pipeline automation, and performance optimization to ensure long-term stability.' },
]

export default function FAQSection() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-black/40 mb-3 sm:mb-4">FAQ</p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight text-black"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Frequently Asked <br /> Question
          </h2>
          <p className="text-gray-500 mt-3 sm:mt-4 max-w-sm mx-auto text-sm">
            Find answers to the most common questions about working with me.
          </p>
        </div>

        {/* Two-column layout → single column on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">

          {/* Accordion */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl border-2 overflow-hidden transition-all duration-300 cursor-pointer ${
                  open === i ? 'border-black shadow-md' : 'border-gray-100 hover:border-gray-300'
                }`}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div className="flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5">
                  <h3 className={`font-semibold text-sm sm:text-base pr-4 leading-snug ${open === i ? 'text-black' : 'text-gray-700'}`}>
                    {faq.q}
                  </h3>
                  <div className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 text-sm ${open === i ? 'bg-lime-400 text-black rotate-45' : 'bg-gray-100 text-gray-500'}`}>
                    +
                  </div>
                </div>
                <div className={`px-5 sm:px-6 transition-all duration-300 overflow-hidden ${open === i ? 'max-h-48 pb-5' : 'max-h-0'}`}>
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right panel — stacks below on mobile */}
          <div className="flex flex-col gap-4 sm:gap-5">
            {/* Answer card */}
            <div className="bg-black rounded-2xl p-6 sm:p-8 text-white flex-1">
              <div className="text-lime-400 text-3xl mb-4 sm:mb-5">?</div>
              <h3
                className="text-xl sm:text-2xl font-black mb-3 sm:mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {open !== null ? faqs[open].q : 'Still have questions?'}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {open !== null
                  ? faqs[open].a
                  : "Can't find the answer you're looking for? Feel free to reach out directly and I'll get back to you within 24 hours."}
              </p>
              {open === null && (
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 mt-5 sm:mt-6 bg-lime-400 text-black px-5 py-3 rounded-full text-sm font-semibold hover:bg-white transition-all"
                >
                  Ask Me Directly →
                </a>
              )}
            </div>

            {/* Quick stats — 2x2 grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { icon: '⚡', label: 'Fast Delivery',  value: '< 48hrs response'   },
                { icon: '✅', label: 'Quality Code',   value: '100% clean & tested' },
                { icon: '🔄', label: 'Revisions',      value: 'Unlimited rounds'    },
                { icon: '🔒', label: 'NDA Ready',      value: 'Confidential work'   },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100">
                  <div className="text-xl sm:text-2xl mb-1.5 sm:mb-2">{item.icon}</div>
                  <div className="text-sm font-bold text-black">{item.label}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
