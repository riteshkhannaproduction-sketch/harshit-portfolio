'use client'
import { useState, useEffect } from 'react'

const skills = [
  { 
    number: '01', 
    title: 'System Architecture',         
    icon: '⬡', 
    description: 'Designing scalable and highly available backend systems. Experienced in microservices, distributed systems, and event-driven architectures.',
    details: [
      'Architected distributed microservices handling millions of requests daily.',
      'Designed event-driven systems using Kafka and RabbitMQ for asynchronous processing.',
      'Implemented robust load balancing, caching layers (Redis, Memcached), and CDN integrations.',
      'Conducted system audits to identify and resolve performance bottlenecks in legacy codebases.'
    ]
  },
  { 
    number: '02', 
    title: 'Full Stack Development',        
    icon: '⟨⟩', 
    description: 'Building robust applications from front to back. Proficient in Next.js, React, Node.js, Python, and modern web frameworks.',
    details: [
      'Developed complex, highly interactive frontend applications using React and Next.js.',
      'Built scalable and secure backend RESTful and GraphQL APIs with Node.js (Express/Nest) and Python (Django/FastAPI).',
      'Integrated third-party services, payment gateways, and authentication providers (OAuth, JWT).',
      'Established full end-to-end testing strategies using Cypress and Jest.'
    ]
  },
  { 
    number: '03', 
    title: 'IT Project Management',    
    icon: '📊', 
    description: 'Leading enterprise-level IT projects and digital transformation. Proven track record in agile methodologies and stakeholder management.',
    details: [
      'Led cross-functional teams of engineers, designers, and QA to deliver enterprise software.',
      'Successfully managed high-value project budgets, ensuring on-time and under-budget delivery.',
      'Facilitated Agile ceremonies to optimize team velocity and continuous improvement.',
      'Bridged the gap between technical teams and executive stakeholders through clear communication.'
    ]
  },
  { 
    number: '04', 
    title: 'Cloud & Infrastructure', 
    icon: '☁', 
    description: 'Deploying and managing infrastructure on AWS and enterprise networks. Experienced with Docker, CI/CD pipelines, and cloud security.',
    details: [
      'Managed cloud infrastructure on AWS using core services like EC2, S3, RDS, ECS, and Lambda.',
      'Automated deployment pipelines (CI/CD) using GitHub Actions and GitLab CI.',
      'Containerized applications using Docker and orchestrated deployments.',
      'Implemented Infrastructure as Code (IaC) using Terraform for reproducible environments.'
    ]
  },
  { 
    number: '05', 
    title: 'Database Design',       
    icon: '🗄', 
    description: 'Architecting efficient database schemas and optimizing complex queries. Strong hands-on experience with PostgreSQL, MongoDB, and Redis.',
    details: [
      'Designed complex relational database schemas in PostgreSQL focusing on data integrity.',
      'Optimized slow database queries through indexing, materialized views, and restructuring.',
      'Implemented scalable NoSQL solutions using MongoDB for high read/write throughput.',
      'Managed data migrations and schema evolutions across environments without downtime.'
    ]
  },
  { 
    number: '06', 
    title: 'API Integration',        
    icon: '🔌', 
    description: 'Developing and consuming RESTful and GraphQL APIs. Ensuring secure, performant, and reliable data flow between services.',
    details: [
      'Designed and developed comprehensive GraphQL APIs to improve client performance.',
      'Integrated complex enterprise systems through secure REST API connections and webhooks.',
      'Implemented rate limiting, API gateways, and thorough API documentation using Swagger.',
      'Built resilient integration layers with automated retries and circuit breakers.'
    ]
  },
]

export default function SkillsSection() {
  const [activeModal, setActiveModal] = useState(null)

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [activeModal])

  return (
    <>
      <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-black/40 mb-3 sm:mb-4">My Expertise</p>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight text-black"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                I Have Expertise to <br />Tackle Challenges
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm max-w-xs md:max-w-sm">
              With a strong foundation in both design and development, I bridge the gap between beautiful aesthetics and functional solutions.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="group bg-white border border-gray-100 rounded-2xl p-5 sm:p-7 hover:border-lime-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                onClick={() => setActiveModal(skill)}
              >
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <span className="text-lime-400 font-bold text-2xl sm:text-3xl">{skill.icon}</span>
                  <span className="text-black/20 font-black text-xs tracking-widest">{skill.number}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {skill.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{skill.description}</p>
                <button 
                  className="mt-4 sm:mt-5 flex items-center gap-2 text-xs font-semibold text-black/40 group-hover:text-black transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveModal(skill);
                  }}
                >
                  Learn more <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="mt-12 sm:mt-16 pt-10 sm:pt-12 border-t border-gray-200">
            <p className="text-xs font-semibold uppercase tracking-widest text-black/40 mb-5 sm:mb-6 text-center">Technologies I Work With</p>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'GraphQL', 'Docker', 'AWS', 'Figma', 'Git', 'REST APIs'].map((tech) => (
                <span
                  key={tech}
                  className="bg-black text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-medium hover:bg-lime-400 hover:text-black transition-all duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 px-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setActiveModal(null)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 z-10">
            {/* Header Area */}
            <div className="bg-black text-white p-6 sm:p-8 flex items-start justify-between flex-shrink-0">
              <div>
                <div className="text-lime-400 font-bold text-3xl mb-2">{activeModal.icon}</div>
                <h3 
                  className="text-2xl sm:text-3xl font-black text-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {activeModal.title}
                </h3>
              </div>
              <button 
                onClick={() => setActiveModal(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Body Area */}
            <div className="p-6 sm:p-8 overflow-y-auto">
              <p className="text-gray-600 font-medium text-sm sm:text-base mb-6 leading-relaxed">
                {activeModal.description}
              </p>
              
              <h4 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-4">Key Achievements & Capabilities</h4>
              <ul className="space-y-4">
                {activeModal.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-lime-400 mt-0.5 flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <button 
                  onClick={() => setActiveModal(null)}
                  className="w-full sm:w-auto px-8 py-3 bg-black text-white rounded-full text-sm font-semibold hover:bg-lime-400 hover:text-black transition-all duration-200"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
