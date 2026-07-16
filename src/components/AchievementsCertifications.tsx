import { motion } from 'motion/react';
import { Award, ShieldCheck, Calendar, ExternalLink, Sparkles, PlusCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function AchievementsCertifications() {
  const { achievements, certifications } = portfolioData;

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/20">
      {/* Background radial elements */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Achievements Column */}
          <div className="space-y-8 text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 font-mono text-xs border border-amber-100/50 dark:border-amber-900/30">
                <Award className="w-3.5 h-3.5" />
                Honors
              </div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
                Achievements
              </h2>
              <div className="h-1 w-12 bg-amber-500 rounded-full" />
            </div>

            <div className="space-y-4">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`p-5 bento-card flex gap-4 ${
                    item.isPlaceholder
                      ? 'border-dashed border-slate-300 dark:border-white/10 opacity-60'
                      : ''
                  }`}
                >
                  <div className={`p-3 rounded-xl flex-shrink-0 h-fit ${
                    item.isPlaceholder
                      ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500'
                      : 'bg-amber-500/10 text-amber-500'
                  }`}>
                    {item.isPlaceholder ? (
                      <PlusCircle className="w-5 h-5" />
                    ) : (
                      <Award className="w-5 h-5" />
                    )}
                  </div>

                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className={`font-sans font-bold text-base ${
                        item.isPlaceholder ? 'text-slate-500 dark:text-slate-400 italic' : 'text-slate-800 dark:text-slate-100'
                      }`}>
                        {item.title}
                      </h3>
                      <span className="flex items-center gap-1 text-[11px] font-mono text-slate-400 dark:text-slate-500">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </span>
                    </div>

                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                      {item.description}
                    </p>

                    {!item.isPlaceholder && item.category && (
                      <span className="inline-flex items-center text-[10px] font-mono uppercase px-2 py-0.5 bg-amber-500/10 text-amber-700 dark:text-amber-400 rounded-md">
                        {item.category}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="space-y-8 text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-mono text-xs border border-indigo-100/50 dark:border-indigo-900/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                Credentials
              </div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
                Certifications
              </h2>
              <div className="h-1 w-12 bg-indigo-500 rounded-full" />
            </div>

            <div className="space-y-4">
              {certifications.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`p-5 bento-card flex gap-4 ${
                    item.isPlaceholder
                      ? 'border-dashed border-slate-300 dark:border-white/10 opacity-60'
                      : ''
                  }`}
                >
                  <div className={`p-3 rounded-xl flex-shrink-0 h-fit ${
                    item.isPlaceholder
                      ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500'
                      : 'bg-indigo-500/10 text-indigo-500'
                  }`}>
                    {item.isPlaceholder ? (
                      <PlusCircle className="w-5 h-5" />
                    ) : (
                      <ShieldCheck className="w-5 h-5" />
                    )}
                  </div>

                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className={`font-sans font-bold text-base ${
                        item.isPlaceholder ? 'text-slate-500 dark:text-slate-400 italic' : 'text-slate-800 dark:text-slate-100'
                      }`}>
                        {item.title}
                      </h3>
                      <span className="flex items-center gap-1 text-[11px] font-mono text-slate-400 dark:text-slate-500">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </span>
                    </div>

                    <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                      {item.issuer}
                    </div>

                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                      {item.isPlaceholder ? "Studies underway! Certifications from platforms like freeCodeCamp, Coursera, or Microsoft Learn will reside here upon completion." : "Verified technical qualification."}
                    </p>

                    {!item.isPlaceholder && item.credentialUrl && (
                      <a
                        id={`cert-credential-${index}`}
                        href={item.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-indigo-600 dark:text-indigo-400 hover:underline font-medium font-sans"
                      >
                        View Credential <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
