'use client'
import { useState } from 'react'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSent(true);
        setTimeout(() => setSent(false), 3000);
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-3 sm:mb-4">Get In Touch</p>
          <h2
            className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Let's Work <span className="text-lime-400">Together</span>
          </h2>
          <p className="text-white/50 mt-3 sm:mt-5 max-w-md mx-auto text-sm">
            Whether you need technical consulting, a robust software solution, or just want to discuss enterprise IT strategy, I'm here to help. Drop me a message!
          </p>
        </div>

        {/* Grid — stacks on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">

          {/* Left: Contact info */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
            {[
              { icon: '✉', label: 'Email Me',  value: 'harshitkaul19@outlook.com',        sub: 'Usually replies within 24 hours'      },
              { icon: '📍', label: 'Location',  value: 'Pune, India',    sub: 'Open to remote opportunities'         },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 sm:gap-5 p-4 sm:p-5 bg-white/5 rounded-2xl border border-white/10 hover:border-lime-400/50 transition-colors">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-lime-400 flex items-center justify-center text-black text-lg sm:text-xl flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-white/40 text-xs font-medium mb-0.5">{item.label}</div>
                  <div className="text-white font-semibold text-sm sm:text-base">{item.value}</div>
                  <div className="text-white/30 text-xs mt-0.5">{item.sub}</div>
                </div>
              </div>
            ))}


          </div>

          {/* Right: Contact form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="text-white/50 text-xs font-medium mb-1.5 sm:mb-2 block uppercase tracking-widest">Name</label>
                <input
                  type="text" required placeholder="John Doe"
                  value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-white placeholder-white/20 text-sm focus:outline-none focus:border-lime-400 transition-colors"
                />
              </div>
              <div>
                <label className="text-white/50 text-xs font-medium mb-1.5 sm:mb-2 block uppercase tracking-widest">Email</label>
                <input
                  type="email" required placeholder="john@example.com"
                  value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-white placeholder-white/20 text-sm focus:outline-none focus:border-lime-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-white/50 text-xs font-medium mb-1.5 sm:mb-2 block uppercase tracking-widest">Subject</label>
              <input
                type="text" placeholder="Project Collaboration"
                value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-white placeholder-white/20 text-sm focus:outline-none focus:border-lime-400 transition-colors"
              />
            </div>

            <div>
              <label className="text-white/50 text-xs font-medium mb-1.5 sm:mb-2 block uppercase tracking-widest">Message</label>
              <textarea
                rows={5} required placeholder="Tell me about your project..."
                value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-white placeholder-white/20 text-sm focus:outline-none focus:border-lime-400 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className={`w-full py-3.5 sm:py-4 rounded-xl text-base font-bold tracking-wide transition-all duration-200 ${
                sent ? 'bg-green-400 text-black' : 'bg-lime-400 text-black hover:bg-white hover:text-black'
              }`}
            >
              {sent ? '✓ Message Sent!' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
