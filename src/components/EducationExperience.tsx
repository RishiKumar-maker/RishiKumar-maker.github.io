import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Calendar, MapPin, Sparkles, PlusCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function EducationExperience() {
  const { education, experience } = portfolioData;

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-white dark:bg-slate-950">
      {/* Background radial highlight */}
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Education */}
          <div className="lg:col-span-6 space-y-10 text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-mono text-xs border border-indigo-100/50 dark:border-indigo-900/30">
                <GraduationCap className="w-3.5 h-3.5" />
                Academia
              </div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
                Education
              </h2>
              <div className="h-1 w-12 bg-indigo-600 dark:bg-indigo-400 rounded-full" />
            </div>

            <div className="relative border-l border-slate-200 dark:border-slate-800 pl-6 ml-3 space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative group bento-card p-6 ml-2"
                >
                  {/* Timeline point indicator */}
                  <span className="absolute -left-9.5 top-1.5 flex items-center justify-center w-7 h-7 rounded-full bg-indigo-500 text-white shadow-sm ring-4 ring-white dark:ring-slate-950 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-3.5 h-3.5" />
                  </span>

                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                      <h3 className="font-sans font-bold text-lg text-slate-900 dark:text-white">
                        {edu.degree} in {edu.fieldOfStudy}
                      </h3>
                      {edu.gpa && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20 w-fit">
                          GPA: {edu.gpa}
                        </span>
                      )}
                    </div>

                    <div className="font-sans font-semibold text-sm text-indigo-600 dark:text-indigo-400">
                      {edu.institution}
                    </div>

                    <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-400 dark:text-slate-500 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {edu.location}
                      </span>
                    </div>

                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans pt-1">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Experience */}
          <div className="lg:col-span-6 space-y-10 text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 font-mono text-xs border border-purple-100/50 dark:border-purple-900/30">
                <Briefcase className="w-3.5 h-3.5" />
                Industry
              </div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
                Experience
              </h2>
              <div className="h-1 w-12 bg-purple-600 dark:bg-purple-400 rounded-full" />
            </div>

            <div className="relative border-l border-slate-200 dark:border-slate-800 pl-6 ml-3 space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative group bento-card p-6 ml-2"
                >
                  {/* Timeline point indicator */}
                  <span className={`absolute -left-9.5 top-1.5 flex items-center justify-center w-7 h-7 rounded-full text-white shadow-sm ring-4 ring-white dark:ring-slate-950 group-hover:scale-110 transition-transform ${exp.isComingSoon ? 'bg-indigo-500/20 border border-dashed border-indigo-500 text-indigo-500 dark:text-indigo-400 dark:bg-indigo-950/20' : 'bg-purple-500'}`}>
                    {exp.isComingSoon ? (
                      <PlusCircle className="w-3.5 h-3.5" />
                    ) : (
                      <Briefcase className="w-3.5 h-3.5" />
                    )}
                  </span>

                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                      <h3 className="font-sans font-bold text-lg text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      {exp.isComingSoon && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20 w-fit">
                          Learning Phase
                        </span>
                      )}
                    </div>

                    <div className="font-sans font-semibold text-sm text-purple-600 dark:text-purple-400">
                      {exp.company}
                    </div>

                    <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-400 dark:text-slate-500 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans pt-1">
                      {exp.description}
                    </p>

                    {/* Helpful expansion tips for the student */}
                    {exp.isComingSoon && (
                      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 font-sans space-y-1.5 mt-4">
                        <p className="font-semibold text-slate-700 dark:text-slate-300">💡 Student Tip:</p>
                        <p>Once you secure your first internship, teaching assistant role, or freelance gig, replace this node in <code className="font-mono text-[10px] bg-slate-200 dark:bg-slate-800 px-1 py-0.5 rounded">src/data/portfolioData.ts</code> to showcase your accomplishments!</p>
                      </div>
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
