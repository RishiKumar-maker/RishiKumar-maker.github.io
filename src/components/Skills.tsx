import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import LucideIcon from './LucideIcon';

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-white dark:bg-slate-950">
      {/* Background blobs */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-teal-500/5 dark:bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-mono text-xs border border-indigo-100/50 dark:border-indigo-900/30">
            <Sparkles className="w-3.5 h-3.5" />
            Capabilities
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            My Skills & Tech Stack
          </h2>
          <div className="h-1 w-12 bg-indigo-600 dark:bg-indigo-400 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {skills.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="p-6 md:p-8 bento-card"
            >
              <h3 className="font-display text-lg font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-2.5 border-b border-slate-200/50 dark:border-slate-800 pb-3">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300 font-medium">
                        <LucideIcon name={skill.iconName} className="w-4 h-4 text-indigo-500" size={16} />
                        <span>{skill.name}</span>
                      </div>
                      <span className="font-mono text-xs text-indigo-600 dark:text-indigo-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-xs text-slate-400 dark:text-slate-500 font-sans"
        >
          * Skill levels represent my confidence and familiarity in applying each technology to solve problems.
        </motion.div>
      </div>
    </section>
  );
}
