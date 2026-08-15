export default function EducationSection() {
  const education = [
    {
      degree: 'B.Tech — Computer Science & Engineering',
      field: 'Computer Science & Engineering',
      institution: 'IIIT Hyderabad',
      period: '2018 – 2022',
      grade: 'JEE Advanced Qualified',
      description:
        'Cracked JEE Mains & Advanced 2018 and secured admission to IIIT Hyderabad — one of India\'s premier tech institutes. Completed B.Tech in Computer Science with a strong focus on systems, algorithms, data structures, and software engineering. Completed internship at Adobe in the 7th semester and received a Pre-Placement Offer (PPO). Also cracked GATE in the final year, securing a coveted PSU offer from HPCL.',
    },
    {
      degree: 'Intermediate (Class XII)',
      field: 'Science — Physics, Chemistry, Mathematics',
      institution: 'Hiranandani Foundation School',
      period: '2017 – 2018',
      grade: '90%',
      description:
        'Completed Class XII from Hiranandani Foundation School with 90% aggregate in the Science stream (PCM). Simultaneously prepared for JEE Mains & Advanced — successfully cracking both in 2018 and securing admission to IIIT Hyderabad.',
    },
    {
      degree: 'High School (Class X)',
      field: 'CBSE Board — All Subjects',
      institution: 'Hiranandani Foundation School',
      period: '2015 – 2016',
      grade: '95%',
      description:
        'Completed Class X from Hiranandani Foundation School with an outstanding 95% aggregate across all subjects. Built a strong academic foundation in mathematics and sciences that led to clearing JEE Advanced and securing IIIT Hyderabad admission.',
    },
  ]

  const certifications = [
    { name: 'GATE Qualified',            org: 'IIT — Graduate Aptitude Test',  year: '2022' },
    { name: 'JEE Advanced Qualified',    org: 'IIT Joint Entrance Exam',        year: '2018' },
    { name: 'Adobe PPO Recipient',       org: 'Adobe Systems India',            year: '2021' },
    { name: 'B.Tech Computer Science',   org: 'IIIT Hyderabad',                 year: '2022' },
  ]

  return (
    <section id="education" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#F0EF6A]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10 sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-black/40 mb-3 sm:mb-4">Academic Background</p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight text-black"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Education &<br className="hidden sm:block" /> Certifications
          </h2>
        </div>

        {/* Grid — single col mobile, 3-col lg */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">

          {/* Education cards */}
          <div className="lg:col-span-2 flex flex-col gap-4 sm:gap-6">
            {education.map((edu, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 sm:p-8 border-2 border-black/10 hover:border-black transition-all duration-300 hover:shadow-xl group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div>
                    <div className="text-xs font-bold text-black/40 uppercase tracking-widest mb-1">{edu.period}</div>
                    <h3
                      className="text-lg sm:text-xl font-black text-black"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {edu.degree}
                    </h3>
                    <div className="text-gray-600 font-medium text-sm mt-0.5">{edu.field}</div>
                  </div>
                  <div className="flex-shrink-0 bg-lime-400 text-black text-xs font-bold px-3 py-1.5 rounded-full self-start whitespace-nowrap">
                    {edu.grade}
                  </div>
                </div>
                <div className="text-sm font-semibold text-black/60 mb-2">{edu.institution}</div>
                <p className="text-sm text-gray-600 leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>

          {/* Certifications + Stat */}
          <div>
            <h3
              className="text-lg sm:text-xl font-black text-black mb-4 sm:mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Achievements
            </h3>
            <div className="flex flex-col gap-3 sm:gap-4">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="bg-black text-white rounded-2xl p-4 sm:p-5 flex items-start gap-3 sm:gap-4 hover:-translate-x-1 transition-transform duration-200"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-lime-400 flex items-center justify-center text-black font-black text-sm flex-shrink-0">
                    ✦
                  </div>
                  <div>
                    <div className="font-bold text-sm">{cert.name}</div>
                    <div className="text-white/50 text-xs mt-0.5">{cert.org}</div>
                    <div className="text-white/30 text-xs mt-0.5">{cert.year}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 sm:mt-8 bg-black rounded-2xl p-5 sm:p-6 text-center">
              <div
                className="text-4xl sm:text-5xl font-black text-lime-400 mb-1 sm:mb-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                4+
              </div>
              <div className="text-white text-sm font-medium">Years of Experience</div>
              <div className="text-white/40 text-xs mt-1">IIIT Hyd → Adobe → HPCL</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
