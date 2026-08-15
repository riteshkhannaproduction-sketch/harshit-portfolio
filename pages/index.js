import Head from 'next/head'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import MarqueeStrip from '../components/MarqueeStrip'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import EducationSection from '../components/EducationSection'
import TestimonialsSection from '../components/TestimonialsSection'
import FAQSection from '../components/FAQSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Harshit Kaul — Portfolio</title>
        <meta name="description" content="Harshit Kaul — Creative Developer & Designer. Building innovative digital experiences with modern technologies." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Harshit Kaul, Portfolio, Web Developer, UI Designer, React, Next.js" />
        <meta property="og:title" content="Harshit Kaul — Portfolio" />
        <meta property="og:description" content="Creative Developer & Designer bringing innovative ideas to life." />
        <meta property="og:type" content="website" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="relative">
        {/* Fixed Navigation */}
        <Navbar />

        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Marquee scrolling tech strip */}
        <MarqueeStrip />

        {/* 3. About Me */}
        <AboutSection />

        {/* 4. Skills / Expertise */}
        <SkillsSection />

        {/* 5. Work Experience */}
        <ExperienceSection />

        {/* 6. Best Projects */}
        <ProjectsSection />

        {/* 7. Education & Certifications */}
        <EducationSection />

        {/* 8. Testimonials */}
        <TestimonialsSection />

        {/* 9. FAQ */}
        <FAQSection />

        {/* 10. Contact */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </main>
    </>
  )
}
