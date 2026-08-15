export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white">
      {/* CTA Banner */}
      <div className="bg-lime-400 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-7 sm:gap-8">
          <div>
            <h2
              className="text-2xl sm:text-3xl md:text-5xl font-black text-black leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Ready to Build Something<br />
              <span className="italic">Extraordinary?</span>
            </h2>
            <p className="text-black/60 mt-2 sm:mt-3 text-sm max-w-sm">
              I specialize in enterprise IT strategy and full-stack development. Let's collaborate and turn your vision into reality.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <a href="#contact" className="bg-black text-white px-5 sm:px-7 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-white hover:text-black transition-all duration-200">
              Start a Project →
            </a>
            <a href="#about" className="bg-black/10 text-black px-5 sm:px-7 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-black hover:text-white transition-all duration-200">
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Footer body */}
      <div className="py-12 sm:py-16 px-4 sm:px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">

          {/* Brand — full width on mobile */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-2xl sm:text-3xl font-black mb-3 sm:mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              HK<span className="text-lime-400">©</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Senior Manager at HPCL. Architecting scalable systems and delivering enterprise IT solutions.
            </p>
            {/* <div className="flex gap-3 mt-5 sm:mt-6">
              {['in', '⌗', '𝕏', '◉'].map((icon, i) => (
                <a key={i} href="#" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 flex items-center justify-center text-sm text-white/60 hover:bg-lime-400 hover:text-black transition-all duration-200">
                  {icon}
                </a>
              ))}
            </div> */}
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-white/40 mb-4 sm:mb-5">Navigation</h4>
            <ul className="flex flex-col gap-2 sm:gap-3">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/60 hover:text-white text-sm transition-colors">
                    → {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-white/40 mb-4 sm:mb-5">Services</h4>
            <ul className="flex flex-col gap-2 sm:gap-3">
              {['UI/UX Design', 'Web Development', 'Mobile Development', 'Branding Design', 'Interaction Design', 'Code Review', 'Consulting'].map((service) => (
                <li key={service}>
                  <a href="#contact" className="text-white/60 hover:text-white text-sm transition-colors">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-white/40 mb-4 sm:mb-5">Contact</h4>
            <div className="flex flex-col gap-3 sm:gap-4">
              <div>
                <div className="text-white/30 text-xs mb-1">Email</div>
                <a href="mailto:harshitkaul19@outlook.com" className="text-sm text-white/80 hover:text-lime-400 transition-colors break-all">harshitkaul19@outlook.com</a>
              </div>
              <div>
                <div className="text-white/30 text-xs mb-1">Location</div>
                <div className="text-sm text-white/80">Pune, India</div>
              </div>
              <div>
                <div className="text-white/30 text-xs mb-1">Availability</div>
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
                  Available for Work
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-5 sm:py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-white/30 text-xs">
          <span>© {currentYear} Harshit Kaul. All rights reserved.</span>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
