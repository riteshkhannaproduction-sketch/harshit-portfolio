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
      {/* ─────────────────────────────────────────────────────────
          LAYER 0 — HUGE NAME  (behind photo on BOTH breakpoints)

          Mobile:  top-[40%]  — pushes name to chest/shoulder area
          Desktop: md:top-[22%] — keeps name in the upper zone
      ───────────────────────────────────────────────────────── */}
      <div className="absolute inset-x-0 z-0 overflow-hidden top-[15%] md:top-[22%]">
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            /*
              Mobile:  13vw × 390px ≈ 51px  → bumped up by clamp min
              Desktop: 14.8vw × 1440px ≈ 213px
            */
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

      {/* ─────────────────────────────────────────────────────────
          LAYER 1 — PHOTO  (centred, on top of name)

          Mobile:  80vw wide, anchored to top-[12%]
                   → face appears ~20% into the photo ≈ 16% from top
                   → name at 40% is in the shoulder/chest zone  ✓

          Desktop: 36vw wide, anchored to bottom-0
                   → fills almost the full screen height
      ───────────────────────────────────────────────────────── */}
      <div
        className={[
          'absolute left-1/2 -translate-x-1/2 z-10',
          // ── mobile: narrower = shorter, stays clear of bottom tagline ──
          'top-[24%] w-[66vw]',
          // ── desktop: bottom-anchored, overlaps name like Baskara ──
          'md:top-auto md:bottom-0 md:w-[38vw]',
        ].join(' ')}
        style={{ maxWidth: '500px', maxHeight: 'calc(100svh - 200px)' }}
      >
        {/* Fixed aspect ratio so the portrait stays consistent */}
        <div className="relative w-full" style={{ aspectRatio: '3 / 4.1' }}>
          <Image
            src="/images/Adobe Express - file.png"
            alt="Harshit Kaul"
            fill
            priority
            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 38vw, 500px"
            className="object-cover object-top"
            style={{ mixBlendMode: 'multiply' }}
          />
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────
          LAYER 2 — bottom fade
      ───────────────────────────────────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none"
        style={{
          height: '120px',
          background: 'linear-gradient(to top, rgba(250,253,232,0.9) 0%, transparent 100%)',
        }}
      />

      {/* ─────────────────────────────────────────────────────────
          LAYER 3 — Taglines
      ───────────────────────────────────────────────────────── */}

      {/* Desktop left */}
      <div
        className="hidden md:block absolute z-30 pointer-events-none"
        style={{ left: '2.5rem', bottom: '5rem', maxWidth: '190px' }}
      >
        <p style={{ fontSize: '0.78rem', lineHeight: 1.55, color: 'rgba(0,0,0,0.6)', fontWeight: 500 }}>
          Hello, I'm Harshit Kaul — Senior Manager at HPCL & B.Tech CS graduate from IIIT Hyderabad (2022).
        </p>
      </div>

      {/* Desktop right */}
      <div
        className="hidden md:block absolute z-30 pointer-events-none text-right"
        style={{ right: '2.5rem', bottom: '5rem', maxWidth: '190px' }}
      >
        <p style={{ fontSize: '0.78rem', lineHeight: 1.55, color: 'rgba(0,0,0,0.6)', fontWeight: 500 }}>
          JEE Advanced & GATE Qualified. Adobe PPO Recipient. Currently leading IT transformation at HPCL.
        </p>
      </div>

      {/* Mobile — two-line tagline, left-aligned like Baskara */}
      <div
        className="md:hidden absolute z-30 inset-x-0 px-5"
        style={{ bottom: '3.5rem' }}
      >
        <p style={{ fontSize: '0.72rem', lineHeight: 1.6, color: 'rgba(0,0,0,0.55)', fontWeight: 500 }}>
          Senior Manager @ HPCL · B.Tech CS, IIIT Hyderabad · JEE Advanced & GATE Qualified
        </p>
      </div>

      {/* ─────────────────────────────────────────────────────────
          Copyright + Scroll hint
      ───────────────────────────────────────────────────────── */}
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

      {/* Decorative dots */}
      <div className="absolute top-1/3 right-8 w-3 h-3 rounded-full bg-black opacity-10 z-0" />
      <div className="absolute top-1/2 right-14 w-2 h-2 rounded-full bg-black opacity-10 z-0" />
    </section>
  )
}
