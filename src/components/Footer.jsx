import { Globe, MessageCircle } from 'lucide-react'
import useScrollReveal from '../useScrollReveal'

const languages = [
  { lang: 'Chinese', level: 'Native', desc: 'Reading, Writing, Listening, Speaking' },
  { lang: 'English', level: 'Professional (B2)', desc: 'Reading, Writing, Listening, Speaking', extra: '(MUET: Band 3.5)' },
  { lang: 'Bahasa Melayu', level: 'Conversational (A2)', desc: 'Listening, Speaking' },
]

const strengths = [
  'Quick to adapt to new environments',
  'Consistent quality in deliverables',
  'Strong team collaborator',
  'Effective time management',
  'Resilient under constraints',
]

export default function Footer() {
  const [ref, visible] = useScrollReveal()
  return (
    <footer ref={ref} className={`py-12 px-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Languages */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Globe size={15} className="text-slate-500 dark:text-cyan-400" />
              <h3 className="font-mono text-xs text-slate-500 dark:text-cyan-400 uppercase tracking-wider">Languages</h3>
            </div>
            <ul className="space-y-3">
              {languages.map((l) => (
                <li key={l.lang}>
                  <span className="text-base font-medium text-slate-800 dark:text-slate-200">{l.lang}</span>
                  <span className="text-base text-slate-600 dark:text-slate-400"> — {l.level}</span>
                  <p className="text-base text-slate-600 dark:text-slate-400">{l.desc}</p>
                  {l.extra && (
                    <p className="text-base text-slate-600 dark:text-slate-400">{l.extra}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Strengths */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <MessageCircle size={15} className="text-slate-500 dark:text-cyan-400" />
              <h3 className="font-mono text-xs text-slate-500 dark:text-cyan-400 uppercase tracking-wider">Strengths</h3>
            </div>
            <ul className="space-y-2">
              {strengths.map((s) => (
                <li key={s} className="text-base text-slate-600 dark:text-slate-400 flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-slate-600/50 dark:bg-cyan-500/50 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

        </div>

        <p className="mt-10 text-center font-mono text-xs text-slate-400 dark:text-slate-600">
          &copy; {new Date().getFullYear()} Oi Jia Zhun's Resume.
        </p>
      </div>
    </footer>
  )
}
