import { GraduationCap, ExternalLink } from 'lucide-react'

const education = [
  {
    school: 'SMJK Poi Lam',
    url: 'https://www.facebook.com/SMJKPoiLamIpoh/',
    qualification: 'SPM',
    result: '4A 5B',
  },
  {
    school: 'University Tunku Abdul Rahman (UTAR)',
    url: 'https://utar.edu.my/',
    qualification: 'Foundation in Arts',
    result: 'CGPA: 3.5608',
  },
  {
    school: 'University Tunku Abdul Rahman (UTAR)',
    url: 'https://utar.edu.my/',
    qualification: 'Bachelor of Computer Science',
    result: 'Current CGPA: 3.3489',
  },
]

export default function Education() {
  return (
    <section className="py-12 px-4" id="education">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <p className="font-mono text-xs text-slate-500 dark:text-cyan-400 uppercase tracking-[0.2em] mb-2">Education</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">Academic Background</h2>
        </div>

        <div className="space-y-1">
          {education.map((edu, i) => (
            <div
              key={i}
              className="group rounded-xl border border-transparent hover:border-cyan-400/20 dark:hover:border-cyan-500/10 hover:bg-slate-50 dark:hover:bg-slate-900/30 px-5 py-4 transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 shrink-0">
                  <GraduationCap size={15} className="text-slate-500 dark:text-cyan-400" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold">
                    {edu.url ? (
                      <a href={edu.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-slate-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                        {edu.school}<ExternalLink size={13} className="opacity-60" />
                      </a>
                    ) : (
                      <span className="text-slate-800 dark:text-slate-200">{edu.school}</span>
                    )}
                  </h3>
                  <p className="font-mono text-base text-slate-600 dark:text-slate-400 mt-0.5">
                    {edu.qualification}<span className="text-slate-300 dark:text-slate-600 mx-2">·</span>{edu.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
