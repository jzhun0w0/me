import { Code2, Brain, Smartphone, Globe, Cloud, Database, Wrench } from 'lucide-react'

const categories = [
  {
    icon: Code2,
    label: 'Languages',
    items: ['Python', 'C++', 'Java', 'JavaScript', 'SQL'],
  },
  {
    icon: Brain,
    label: 'AI / ML',
    items: ['PyTorch', 'HuggingFace', 'ASR', 'NLP', 'LLM Fine-Tuning', 'CUDA'],
  },
  {
    icon: Smartphone,
    label: 'Mobile',
    items: ['React Native'],
  },
  {
    icon: Globe,
    label: 'Web',
    items: ['Django (DRF)', 'React', 'HTML5', 'CSS', 'Bootstrap 4', 'jQuery'],
  },
  {
    icon: Cloud,
    label: 'Cloud',
    items: ['Firebase', 'Google Cloud TTS', 'Microsoft Azure', 'REST API'],
  },
  {
    icon: Database,
    label: 'Database',
    items: ['PostgreSQL', 'MySQL', 'Oracle', 'Microsoft Access'],
  },
  {
    icon: Wrench,
    label: 'Tools',
    items: ['VS Code', 'Git', 'Anaconda', 'Eclipse', 'Wireshark', 'VirtualBox'],
  },
]

export default function TechStack() {
  return (
    <section className="py-12 px-4" id="skills">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <p className="font-mono text-xs text-slate-500 dark:text-cyan-400 uppercase tracking-[0.2em] mb-2">Tech Stack</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">What I Work With</h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-fr">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="group rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-5 hover:border-cyan-400/40 dark:hover:border-cyan-500/30 hover:shadow-sm dark:hover:shadow-none hover:bg-slate-50 dark:hover:bg-slate-900/80 transition-all duration-300 flex flex-col"
            >
              {/* Icon */}
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-1.5 rounded-md bg-slate-200 dark:bg-cyan-500/10 text-slate-600 dark:text-cyan-400">
                  <cat.icon size={16} />
                </div>
                <span className="font-mono text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {cat.label}
                </span>
              </div>

              {/* Items */}
              <ul className="flex flex-wrap gap-1.5 mt-auto">
                {cat.items.map((tech) => (
                  <li
                    key={tech}
                    className="font-mono text-sm px-2.5 py-1 rounded-md bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:bg-slate-300 dark:group-hover:bg-slate-800/80 transition-colors"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
