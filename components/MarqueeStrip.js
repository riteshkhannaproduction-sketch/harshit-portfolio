'use client'
import { useEffect, useRef } from 'react'

const techStack = [
  'React.js', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'TailwindCSS',
  'MongoDB', 'PostgreSQL', 'GraphQL', 'Docker', 'AWS', 'Figma',
  'React.js', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'TailwindCSS',
  'MongoDB', 'PostgreSQL', 'GraphQL', 'Docker', 'AWS', 'Figma',
]

export default function MarqueeStrip() {
  return (
    <div className="bg-black py-4 overflow-hidden">
      <div className="marquee-content">
        {techStack.map((tech, i) => (
          <span key={i} className="flex items-center gap-4 px-4">
            <span className="text-white font-medium text-sm uppercase tracking-widest whitespace-nowrap">
              {tech}
            </span>
            <span className="text-lime-400 text-xl font-bold">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
