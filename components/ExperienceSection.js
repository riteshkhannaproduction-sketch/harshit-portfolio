export default function ExperienceSection() {
  const experiences = [
    {
      company: 'Hindustan Petroleum Corporation Limited (HPCL)',
      role: 'Senior Manager — IT Division',
      period: 'Jul 2024 – Present',
      type: 'Full-time',
      description:
        'Promoted to Senior Manager within two years of joining. Currently leading end-to-end IT project delivery, digital transformation initiatives, and cross-functional technology strategy at one of India\'s largest public-sector oil & gas corporations. Overseeing multiple enterprise IT systems, vendor management, and a team of engineers and analysts.',
      tags: ['IT Strategy', 'Project Management', 'Digital Transformation', 'ERP', 'Team Leadership'],
    },
    {
      company: 'Hindustan Petroleum Corporation Limited (HPCL)',
      role: 'Project Manager — IT Division',
      period: 'Aug 2022 – Jun 2024',
      type: 'Full-time',
      description:
        'Joined HPCL after cracking GATE in the final year of B.Tech at IIIT Hyderabad, securing a prestigious PSU offer. Managed IT infrastructure projects, coordinated with cross-functional teams, developed project timelines, and delivered technology solutions across departments. Received early promotion to Senior Manager for exceptional performance.',
      tags: ['Project Planning', 'IT Infrastructure', 'Stakeholder Management', 'Agile', 'Python'],
    },
    {
      company: 'Adobe Systems India Pvt. Ltd.',
      role: 'Software Engineer Intern',
      period: 'Jul 2021 – Dec 2021',
      type: 'Internship (PPO)',
      description:
        'Completed 6-month internship at Adobe during the 7th semester of B.Tech at IIIT Hyderabad. Worked on core product features, collaborated with senior engineers on design systems, and contributed to performance improvements. Received a Pre-Placement Offer (PPO) from Adobe — later opted for HPCL after qualifying GATE.',
      tags: ['React', 'JavaScript', 'Design Systems', 'Performance', 'Agile/Scrum'],
    },
  ]

  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-black/40 mb-3 sm:mb-4">Work History</p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight text-black"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Professional<br className="hidden sm:block" /> Experience
            </h2>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-3 sm:left-7 top-0 bottom-0 w-0.5 bg-gray-100 hidden sm:block" />

          <div className="flex flex-col gap-5 sm:gap-8">
            {experiences.map((exp, i) => (
              <div key={i} className="flex gap-4 sm:gap-10 group">

                {/* Dot */}
                <div className="hidden sm:flex relative flex-shrink-0 items-start pt-1">
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-gray-200 group-hover:border-black flex items-center justify-center transition-all duration-200 relative z-10">
                    <div className="w-3 h-3 rounded-full bg-gray-300 group-hover:bg-lime-400 transition-colors duration-200" />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 bg-gray-50 rounded-2xl p-5 sm:p-7 border-2 border-gray-100 group-hover:border-black transition-all duration-200 mb-2">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3
                          className="text-base sm:text-xl font-black text-black"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {exp.role}
                        </h3>
                        <span className="text-xs bg-lime-400 text-black px-2 py-0.5 rounded-full font-medium whitespace-nowrap">
                          {exp.type}
                        </span>
                      </div>
                      <div className="text-gray-500 font-medium text-sm">{exp.company}</div>
                    </div>
                    <div className="text-xs text-black/40 font-medium bg-black/5 px-3 py-1.5 rounded-full whitespace-nowrap self-start">
                      {exp.period}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 sm:mb-5">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-black text-white px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
