import { Mic, GitBranch, Layers, Cpu, BarChart3 } from 'lucide-react'
import useScrollReveal from '../useScrollReveal'

const projects = [
  {
    title: 'Multilingual Code-Mixed Translation App',
    tag: 'FYP · 2025',
    description:
      'Android app for real-time speech translation handling Malay–Chinese–English code-switching',
    highlights: [
      { icon: Mic, text: 'Fine-tuned Meta SeamlessM4T-v2-large' },
      { icon: GitBranch, text: 'Integrated Gemini API' },
      { icon: Layers, text: 'Built React Native app with Firebase backend' },
    ],
    techStack: ['Python', 'PyTorch', 'HuggingFace', 'React Native', 'Firebase', 'Google Cloud TTS', 'Gemini API'],
    size: 'sm',
  },
  // {
  //   title: 'Todo Website',
  //   tag: 'In Progress',
  //   description: 'Full-stack task management web application with RESTful API backend and component-based frontend.',
  //   highlights: [
  //     { icon: Layers, text: 'Django REST Framework backend with PostgreSQL' },
  //     { icon: Layers, text: 'React frontend with responsive component-based UI' },
  //     { icon: Layers, text: 'Features: task CRUD, user auth, category tagging, due-date tracking' },
  //   ],
  //   techStack: ['Django (DRF)', 'React', 'PostgreSQL'],
  //   size: 'sm',
  // },
]

const academics = [
  { title: 'Restaurant Food Ordering System', tech: 'C++', desc: 'Console app with order management, menu browsing, and billing' },
  { title: 'Hospital Management System', tech: 'Java', desc: 'Patient records, doctor scheduling, and appointment booking' },
  { title: 'Library Management System', tech: 'Oracle · Microsoft Access', desc: 'Full CRUD database system with report generation' },
  { title: 'Malaysia Cuisine Website', tech: 'HTML5 · CSS · JS · Bootstrap 4', desc: 'Responsive multi-page website showcasing Malaysian food' },
]

export default function Projects() {
  const [ref, visible] = useScrollReveal()
  return (
    <section ref={ref} className={`py-12 px-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} id="projects">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <p className="font-mono text-xs text-slate-500 dark:text-cyan-400 uppercase tracking-[0.2em] mb-2">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">Selected Work</h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* FYP - spans 2 cols */}
          {projects.map((proj, i) => {
            const isLg = proj.size === 'lg'
            return (
              <div
                key={i}
                className={`group rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 hover:border-cyan-400/40 dark:hover:border-cyan-500/30 hover:shadow-sm dark:hover:shadow-none transition-all duration-300 flex flex-col ${
                  isLg ? 'lg:col-span-2' : 'lg:col-span-1'
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {proj.title}
                  </h3>
                  <span className="font-mono text-xs text-slate-600 dark:text-cyan-400 bg-slate-200 dark:bg-cyan-500/10 border border-slate-300 dark:border-cyan-500/20 rounded-full px-2.5 py-0.5 whitespace-nowrap ml-3 mt-0.5">
                    {proj.tag}
                  </span>
                </div>

                <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-5">{proj.description}</p>

                {/* Highlights */}
                <ul className={`space-y-3 mb-6 flex-1 ${isLg ? 'grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3' : ''}`}>
                  {proj.highlights.map((h, j) => (
                    <li key={j} className="flex gap-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                      <div className="mt-0.5 shrink-0">
                        <h.icon size={14} className="text-slate-400 dark:text-cyan-500/60" />
                      </div>
                      <span>{h.text}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-slate-300 dark:border-slate-800">
                  {proj.techStack.map((t) => (
                    <span key={t} className="font-mono text-xs px-2.5 py-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-400 group-hover:bg-slate-300 dark:group-hover:bg-slate-800/70 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}

          {/* Academic Projects Card */}
          <div className="rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 hover:border-cyan-400/40 dark:hover:border-cyan-500/30 hover:shadow-sm dark:hover:shadow-none transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Academic Projects</h3>
              <span className="font-mono text-xs text-slate-600 dark:text-cyan-400 bg-slate-200 dark:bg-cyan-500/10 border border-slate-300 dark:border-cyan-500/20 rounded-full px-2.5 py-0.5 whitespace-nowrap ml-3 mt-0.5">
                Academic Projects
              </span>
            </div>
            <ul className="space-y-4">
              {academics.map((a, i) => (
                <li key={i} className="group/item">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-base font-medium text-slate-700 dark:text-slate-200 group-hover/item:text-cyan-600 dark:group-hover/item:text-cyan-400 transition-colors">
                      {a.title}
                    </span>
                  </div>
                  <p className="font-mono text-xs text-slate-500 dark:text-cyan-500/70 mb-0.5">{a.tech}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-500">{a.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
