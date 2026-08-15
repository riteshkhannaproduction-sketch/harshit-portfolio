'use client'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'Plane',
    category: 'SaaS',
    tag: 'Open Source',
    color: 'bg-indigo-200',
    year: '2023',
    description: 'An open-source project management tool — a powerful alternative to Jira and Linear. Supports issues, cycles, modules, and analytics for engineering teams.',
    tech: ['Next.js', 'Django', 'PostgreSQL'],
    github: 'https://github.com/makeplane/plane',
  },
  {
    id: 2,
    title: 'Ghostfolio',
    category: 'Finance App',
    tag: 'Full Stack',
    color: 'bg-emerald-200',
    year: '2023',
    description: 'Open-source wealth management software for tracking investments, calculating portfolio performance, and providing financial insights with beautiful charts.',
    tech: ['Angular', 'NestJS', 'Prisma'],
    github: 'https://github.com/ghostfolio/ghostfolio',
  },
  {
    id: 3,
    title: 'Cal.com',
    category: 'Web App',
    tag: 'Full Stack',
    color: 'bg-sky-200',
    year: '2022',
    description: 'Open-source scheduling infrastructure — lets users share a booking link, manage calendar availability, and automate meeting coordination at scale.',
    tech: ['Next.js', 'tRPC', 'Prisma'],
    github: 'https://github.com/calcom/cal.com',
  },
  {
    id: 4,
    title: 'Lobe Chat',
    category: 'AI Tool',
    tag: 'AI / Frontend',
    color: 'bg-violet-300',
    year: '2024',
    description: 'A modern, open-source AI chat framework supporting multiple LLM providers (OpenAI, Gemini, Ollama). Features plugins, file upload, and voice conversation.',
    tech: ['Next.js', 'TypeScript', 'OpenAI'],
    github: 'https://github.com/lobehub/lobe-chat',
  },
  {
    id: 5,
    title: 'Novu',
    category: 'Developer Tool',
    tag: 'Backend',
    color: 'bg-rose-200',
    year: '2023',
    description: 'The open-source notification infrastructure platform. Send multi-channel notifications (email, SMS, push, in-app) through a single unified API.',
    tech: ['Node.js', 'React', 'MongoDB'],
    github: 'https://github.com/novuhq/novu',
  },
  {
    id: 6,
    title: 'Documenso',
    category: 'SaaS',
    tag: 'Full Stack',
    color: 'bg-amber-200',
    year: '2024',
    description: 'The open-source DocuSign alternative. Allows users to digitally sign, send, and manage documents with a beautiful, privacy-first interface.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL'],
    github: 'https://github.com/documenso/documenso',
  },
]

const categories = ['All', 'SaaS', 'Finance App', 'Web App', 'AI Tool', 'Developer Tool']

export default function ProjectsSection() {
  const [active, setActive]   = useState('All')
  const [hovered, setHovered] = useState(null)

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 sm:gap-8 mb-10 sm:mb-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3 sm:mb-4">Open Source & Projects</p>
            <h2
              className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight tracking-tight text-white"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              My Best Projects
            </h2>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-8 sm:mb-10 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                active === cat ? 'bg-lime-400 text-black' : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filtered.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              {/* Card image area */}
              <div className={`${project.color} aspect-video flex items-center justify-center relative`}>
                <div className="absolute inset-3 bg-white/10 rounded-xl border border-white/20 flex flex-col overflow-hidden">
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-black/30">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <div className="flex-1 mx-2 bg-black/20 rounded h-3" />
                  </div>
                  <div className="flex-1 p-3 flex flex-col gap-2">
                    <div className="h-3 bg-black/20 rounded w-3/4" />
                    <div className="h-2 bg-black/15 rounded w-full" />
                    <div className="h-2 bg-black/15 rounded w-5/6" />
                    <div className="mt-auto grid grid-cols-3 gap-1">
                      <div className="h-8 bg-black/20 rounded" />
                      <div className="h-8 bg-black/20 rounded" />
                      <div className="h-8 bg-black/20 rounded" />
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-lime-400 text-black text-[10px] font-bold px-2.5 py-1 rounded-full">{project.tag}</div>
                <div className="absolute top-4 right-4 text-white/60 text-xs font-medium">{project.year}</div>
              </div>

              {/* Card footer */}
              <div className="bg-[#1A1A1A] p-4 sm:p-5 flex items-center justify-between">
                <div className="flex-1 min-w-0 mr-3">
                  <div className="text-white/40 text-xs font-medium mb-1">{project.category}</div>
                  <h3
                    className="text-base sm:text-lg font-bold text-white group-hover:text-lime-400 transition-colors truncate"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {project.title}
                  </h3>
                  <div className="flex gap-1.5 mt-1.5 flex-wrap">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] text-white/40 bg-white/5 px-2 py-0.5 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-lime-400 group-hover:text-black group-hover:border-lime-400 transition-all flex-shrink-0 text-sm"
                  title="View on GitHub"
                >
                  ↗
                </a>
              </div>

              {/* Hover overlay */}
              {hovered === project.id && (
                <div className="absolute inset-0 bg-black/88 backdrop-blur-sm flex items-center justify-center p-6 rounded-2xl">
                  <div className="text-center">
                    <h3 className="text-lg sm:text-xl font-bold text-lime-400 mb-3">{project.title}</h3>
                    <p className="text-sm text-white/80 leading-relaxed">{project.description}</p>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-5 bg-lime-400 text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-white transition-all"
                    >
                      View on GitHub ↗
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
