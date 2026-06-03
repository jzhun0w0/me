import { Search } from 'lucide-react'

export default function Certificate() {
  return (
    <section className="py-12 px-4" id="certificate">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <p className="font-mono text-xs text-slate-500 dark:text-cyan-400 uppercase tracking-[0.2em] mb-2">Certificate</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">Certifications</h2>
        </div>

        <a
          href={`${import.meta.env.BASE_URL}fyp.jpg`}
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-cyan-400/40 dark:hover:border-cyan-500/30 hover:shadow-sm dark:hover:shadow-none transition-all duration-300 w-48"
        >
          {/* Thumbnail with overlay */}
          <div className="relative overflow-hidden rounded-t-xl">
            <img
              src={`${import.meta.env.BASE_URL}fyp.jpg`}
              alt="FICT FYP Competition"
              className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              <Search className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={28} />
            </div>
          </div>

          {/* Label */}
          <div className="px-4 py-3">
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              FICT FYP Competition
            </h3>
          </div>
        </a>
      </div>
    </section>
  )
}
