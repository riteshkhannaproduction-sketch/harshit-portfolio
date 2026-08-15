import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        <p className="text-xs font-semibold uppercase tracking-widest text-black/40 mb-3 sm:mb-4">About Me</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-start">

          {/* Left: Heading + Stats */}
          <div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-black"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              A Deep Dive into My Life's Experiences and Lessons Learned
            </h2>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-100">
              {[
                { value: '4+',  label: 'Years Experience' },
                { value: '15+', label: 'Projects Led'     },
                { value: '2',   label: 'Job Offers'       },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-black text-black" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-black/50 mt-1 font-medium leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Photo + Bio */}
          <div className="flex flex-col gap-6 sm:gap-8">

            {/* Photo */}
            <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-200" style={{ aspectRatio: '4/3' }}>
              <Image
                src="/images/Untitled design (16).png"
                alt="Harshit Kaul"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
              />
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 bg-lime-400 text-black text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse inline-block" />
                Open to Opportunities
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-3 sm:space-y-4">
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Hello, I'm Harshit Kaul — born on 19th August 2000. A Computer Science graduate from
                <strong> IIIT Hyderabad (B.Tech, 2022)</strong>, where I cracked JEE Advanced 2018 after
                scoring <strong>95% in Class X</strong> and <strong>90% in Class XII</strong> from
                Hiranandani Foundation School.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                During my 7th semester I interned at <strong>Adobe Systems</strong>, received a
                Pre-Placement Offer (PPO), but in my final year I simultaneously cracked <strong>GATE</strong> and
                chose to join <strong>HPCL (Hindustan Petroleum Corporation Limited)</strong> — one of India's
                largest Fortune 500 public-sector companies — as a Project Manager in the IT Division.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Within two years I was promoted to <strong>Senior Manager</strong>, where I now lead
                enterprise-level IT projects, digital transformation initiatives, and strategic technology
                decisions across the organisation.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 pt-1 sm:pt-2">
                <a href="#contact" className="bg-black text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-semibold hover:bg-lime-400 hover:text-black transition-all duration-200">
                  Get In Touch →
                </a>
                <a href="#experience" className="border border-black/20 text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-semibold hover:border-black transition-all duration-200">
                  View Experience
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
