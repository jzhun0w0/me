import { MapPin, Mail, Code2, ExternalLink } from 'lucide-react'

function EmailLink() {
  const user = 'jiazhub123456'
  const domain = 'gmail.com'

  const handleClick = (e) => {
    e.preventDefault()
    window.location.href = `mailto:${user}@${domain}`
  }

  return (
    <a href="#"
      onClick={handleClick}
      className="inline-flex items-center gap-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
    >
      <Mail size={14} /> {user}@{domain}<ExternalLink size={12} className="opacity-60" />
    </a>
  )
}

export default function Hero() {
  return (
    <section className="flex flex-col justify-center px-4 pt-16 pb-8">
      <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">

        {/* Left: Avatar */}
        <div className="shrink-0">
          <img
            src={`${import.meta.env.BASE_URL}hero.jpg`}
            alt="Oi Jia Zhun"
            className="w-36 md:w-48 rounded-md border border-slate-200 dark:border-slate-700 shadow-sm"
          />
        </div>

        {/* Right: Name + Info */}
        <div className="flex-1">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-6">
            Oi Jia Zhun
          </h1>

          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-5 max-w-xl text-justify">
            A Computer Science student from UTAR with strong problem-solving skills and a diverse work experience in education, programming, and the service industry. Skilled in using various programming languages and office software
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-1.5 text-base font-mono text-slate-600 dark:text-slate-500">
            <EmailLink />
            <a href="https://github.com/jzhun0w0" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              <Code2 size={14} /> jzhun0w0<ExternalLink size={12} className="opacity-60" />
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin size={14} /> Chemor, Perak
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
