import Image from 'next/image'

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{
        minHeight: '100svh',
        background: 'linear-gradient(170deg, #D8E830 0%, #E8F23A 30%, #F5F89A 65%, #FAFDE8 100%)',
      }}
    >
      {/* ==========================================================
          MOBILE + TABLET LAYOUT  (hidden on lg+ / 1024px+)
          Clean stacked: Name → Photo → Tagline
      ========================================================== */}
      <div
        className="lg:hidden flex flex-col items-center w-full"
        style={{ minHeight: '100svh' }}
      >
        {/* Name — at the top, large */}
        <div className="w-full overflow-hidden pt-20 pb-1 px-2">
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(44px, 12.5vw, 96px)',
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: '0.04em',
              whiteSpace: 'nowrap',
              color: '#0A0A0A',
              userSelect: 'none',
              textAlign: 'center',
              width: '100%',
            }}
          >
            HARSHIT<span style={{ opacity: 0.7 }}>©</span>
          </h1>
        </div>

        {/* Photo — centred, fills remaining space */}
        <div
          className="relative mx-auto"
          style={{
            width: '60vw',
            maxWidth: '420px',
            flex: '1 1 0',
            minHeight: '0',
          }}
        >
          <Image
            src="/images/Adobe Express - file.png"
            alt="Harshit Kaul"
            fill
            priority
            sizes="(max-width: 1023px) 60vw, 420px"
            className="object-contain object-bottom"
          />
        </div>

        {/* Tagline — at the bottom */}
        <div className="w-full px-5 pb-14 pt-2">
          <p
            style={{
              fontSize: '0.78rem',
              lineHeight: 1.6,
              color: 'rgba(0,0,0,0.55)',
              fontWeight: 500,
            }}
          >
            Senior Manager @ HPCL · B.Tech CS, IIIT Hyderabad · JEE Advanced & GATE Qualified
          </p>
        </div>
      </div>

      {/* ==========================================================
          DESKTOP LAYOUT  (hidden below lg / 1024px)
          Absolute-layered Baskara-style — unchanged
      ========================================================== */}

      {/* HUGE NAME — behind photo */}
      <div className="hidden lg:block absolute inset-x-0 z-0 overflow-hidden top-[22%]">
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(48px, 14.8vw, 220px)',
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: '0.045em',
            whiteSpace: 'nowrap',
            color: '#0A0A0A',
            userSelect: 'none',
            textAlign: 'center',
            width: '100%',
          }}
        >
          HARSHIT<span style={{ opacity: 0.7 }}>©</span>
        </h1>
      </div>

      {/* Photo — bottom-anchored */}
      <div
        className="hidden lg:block absolute left-1/2 -translate-x-1/2 z-10 bottom-0 w-[38vw]"
        style={{ maxWidth: '500px', maxHeight: 'calc(100svh - 200px)' }}
      >
        <div className="relative w-full" style={{ aspectRatio: '3 / 4.1' }}>
          <Image
            src="/images/Adobe Express - file.png"
            alt="Harshit Kaul"
            fill
            priority
            sizes="(max-width: 1280px) 38vw, 500px"
            className="object-cover object-top"
            style={{ mixBlendMode: 'multiply' }}
          />
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="hidden lg:block absolute bottom-0 left-0 right-0 z-20 pointer-events-none"
        style={{
          height: '120px',
          background: 'linear-gradient(to top, rgba(250,253,232,0.9) 0%, transparent 100%)',
        }}
      />

      {/* Desktop tagline — left */}
      <div
        className="hidden lg:block absolute z-30 pointer-events-none"
        style={{ left: '2.5rem', bottom: '5rem', maxWidth: '190px' }}
      >
        <p style={{ fontSize: '0.78rem', lineHeight: 1.55, color: 'rgba(0,0,0,0.6)', fontWeight: 500 }}>
          Hello, I'm Harshit Kaul — Senior Manager at HPCL & B.Tech CS graduate from IIIT Hyderabad (2022).
        </p>
      </div>

      {/* Desktop tagline — right */}
      <div
        className="hidden lg:block absolute z-30 pointer-events-none text-right"
        style={{ right: '2.5rem', bottom: '5rem', maxWidth: '190px' }}
      >
        <p style={{ fontSize: '0.78rem', lineHeight: 1.55, color: 'rgba(0,0,0,0.6)', fontWeight: 500 }}>
          JEE Advanced & GATE Qualified. Adobe PPO Recipient. Currently leading IT transformation at HPCL.
        </p>
      </div>

      {/* Decorative dots — desktop only */}
      <div className="hidden lg:block absolute top-1/3 right-8 w-3 h-3 rounded-full bg-black opacity-10 z-0" />
      <div className="hidden lg:block absolute top-1/2 right-14 w-2 h-2 rounded-full bg-black opacity-10 z-0" />

      {/* ==========================================================
          Copyright + Scroll hint  (both breakpoints, always visible)
      ========================================================== */}
      <div
        className="absolute bottom-5 left-5 right-5 flex justify-between items-center z-30"
        style={{ fontSize: '0.7rem', color: 'rgba(0,0,0,0.4)', fontWeight: 500 }}
      >
        <span>© Harshit Kaul 2024</span>
        <span className="flex items-center gap-1.5">
          Scroll down
          <svg className="w-3 h-3 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </div>
    </section>
  )
}
