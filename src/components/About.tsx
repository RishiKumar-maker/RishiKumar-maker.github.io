import { motion } from 'motion/react';
import { Sparkles, BookOpen, Heart, Flame, Code } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personalInfo } = portfolioData;

  const highlights = [
    {
      icon: BookOpen,
      title: "Active Learning",
      description: "Constantly expanding knowledge with tutorials, courses, and documentation.",
      color: "text-amber-500",
      bgColor: "bg-amber-500/10"
    },
    {
      icon: Flame,
      title: "Hands-on Builder",
      description: "Believes in learning-by-doing by launching fully functional code prototypes.",
      color: "text-rose-500",
      bgColor: "bg-rose-500/10"
    },
    {
      icon: Heart,
      title: "Community Driven",
      description: "Collaborating with peers and contributing to campus computer science circles.",
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/20">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col items-start text-left mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-mono text-xs border border-indigo-100/50 dark:border-indigo-900/30">
            <Sparkles className="w-3.5 h-3.5" />
            Background
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            About Me
          </h2>
          <div className="h-1 w-12 bg-indigo-600 dark:bg-indigo-400 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Detailed Biography Text */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="p-6 md:p-8 bento-card"
            >
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-indigo-500" /> My Coding Journey
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-sans mb-4">
                My curiosity for coding ignited when I wanted to build custom modifications for my favorite video games and automate school math problems. What began as simple copy-pasted script adjustments quickly blossomed into a profound passion for computer science and software development.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                As a student, I treat every project as an opportunity to master design principles, learn robust typing systems, and optimize algorithms. I’m eager to build tools that are not only beautiful but solve everyday inconveniences for people in my community.
              </p>
            </motion.div>

            {/* Quick Core values or stats block */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bento-card text-left">
                <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">100%</p>
                <p className="font-mono text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mt-1">Growth Mindset</p>
              </div>
              <div className="p-5 bento-card text-left">
                <p className="text-3xl font-bold text-teal-600 dark:text-teal-400">3+</p>
                <p className="font-mono text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mt-1">Production-Ready Demos</p>
              </div>
            </div>
          </div>

          {/* Key Highlight Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 font-semibold mb-2 block">
              What Guides Me
            </h4>
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1 }}
                  className="p-5 bento-card flex gap-4 items-start group cursor-pointer"
                >
                  <div className={`p-3 rounded-xl ${item.bgColor} ${item.color} flex-shrink-0 group-hover:scale-105 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 text-left">
                    <h5 className="font-sans font-semibold text-base text-slate-900 dark:text-white">
                      {item.title}
                    </h5>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
