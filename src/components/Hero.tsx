import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ArrowDown, MapPin, Download, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const { personalInfo } = portfolioData;
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [greeting, setGreeting] = useState('Hello');

  // Typing effect logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = personalInfo.subtitles[currentSubtitleIndex];
    const typingSpeed = isDeleting ? 30 : 80;

    const handleType = () => {
      if (!isDeleting) {
        setTypedText(fullText.substring(0, typedText.length + 1));
        if (typedText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 2000); // Wait before deleting
        } else {
          timer = setTimeout(handleType, typingSpeed);
        }
      } else {
        setTypedText(fullText.substring(0, typedText.length - 1));
        if (typedText === '') {
          setIsDeleting(false);
          setCurrentSubtitleIndex((prev) => (prev + 1) % personalInfo.subtitles.length);
        } else {
          timer = setTimeout(handleType, typingSpeed);
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentSubtitleIndex, personalInfo.subtitles]);

  // Dynamic time-of-day greeting
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Dynamic Background Gradients / Aura */}
      <div className="absolute top-1/4 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-teal-500/10 dark:bg-teal-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left Column: Copy & Actions */}
        <div className="col-span-1 md:col-span-7 flex flex-col items-start text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-100/50 dark:border-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-sans text-xs font-medium backdrop-blur-md"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {greeting}, I'm open to opportunities
          </motion.div>

          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white"
            >
              Hi, I'm <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">{personalInfo.name}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-8 sm:h-10 text-xl sm:text-2xl font-mono text-slate-600 dark:text-slate-300 flex items-center"
            >
              <span>I'm a&nbsp;</span>
              <span className="text-indigo-600 dark:text-indigo-400 border-r-2 border-indigo-600 dark:border-indigo-400 pr-1 animate-pulse">
                {typedText}
              </span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl font-sans"
          >
            {personalInfo.bio}
          </motion.p>

          {/* Core Info Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400"
          >
            <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800/40 px-3 py-1.5 rounded-lg border border-slate-100 dark:border-slate-800">
              <MapPin className="w-4 h-4 text-indigo-500" />
              <span>{personalInfo.location}</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button
              id="cta-projects"
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-sans font-medium text-sm hover:opacity-95 shadow-lg shadow-indigo-500/10 dark:shadow-slate-900/20 active:scale-98 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              View My Work
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button
              id="cta-contact"
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 font-sans font-medium text-sm hover:bg-slate-50 dark:hover:bg-slate-800/50 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Contact Me
            </button>
            <a
              id="resume-download-hero"
              href={personalInfo.resumeUrl}
              className="px-6 py-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 border border-indigo-100/50 dark:border-indigo-950/50 font-sans font-medium text-sm hover:bg-indigo-100/50 dark:hover:bg-indigo-900/30 active:scale-98 transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </motion.div>

          {/* Quick Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4 pt-4 border-t border-slate-100 dark:border-slate-800 w-full sm:w-auto justify-start"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Profile Visual */}
        <div className="col-span-1 md:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl p-3 bg-gradient-to-tr from-indigo-500 via-purple-500 to-teal-500 shadow-2xl overflow-hidden group"
          >
            <div className="w-full h-full bg-white/90 dark:bg-neutral-900/90 rounded-[1.25rem] flex flex-col justify-center items-center p-6 text-center border border-slate-200/80 dark:border-white/10 relative overflow-hidden">
              {/* Internal ambient ring */}
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent pointer-events-none" />

              {/* Dynamic decorative visual initialism */}
              <span className="font-display text-7xl sm:text-8xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 dark:from-indigo-400 dark:via-purple-400 dark:to-teal-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(99,102,241,0.15)] select-none">
                {personalInfo.firstName[0]}
                {personalInfo.lastName[0]}
              </span>

              {/* Tag lines */}
              <div className="mt-4 space-y-1 relative z-10">
                <p className="font-sans font-semibold text-lg text-slate-900 dark:text-white">
                  {personalInfo.name}
                </p>
                <p className="font-mono text-xs text-indigo-600 dark:text-indigo-400/80">
                  ~/portfolio
                </p>
              </div>

              {/* Modern Grid Overlay */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
            </div>

            {/* Glowing border outline */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-teal-500 opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-500 -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5">
        <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500">
          Scroll Down
        </span>
        <motion.button
          id="btn-scroll-down"
          onClick={() => scrollToSection('about')}
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="p-1.5 rounded-full border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm cursor-pointer"
          aria-label="Scroll to About Me"
        >
          <ArrowDown className="w-4 h-4" />
        </motion.button>
      </div>
    </section>
  );
}
