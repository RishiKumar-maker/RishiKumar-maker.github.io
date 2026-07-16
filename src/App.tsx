import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from './data/portfolioData';
import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import EducationExperience from './components/EducationExperience';
import AchievementsCertifications from './components/AchievementsCertifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import NotFound from './components/NotFound';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isNotFound, setIsNotFound] = useState(false);

  // Initialize and Sync Theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      // Default to dark mode as requested by user
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Scrollspy: Detect which section is in view
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'achievements', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for headers

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simple custom path checker (supports simulated custom path for NotFound demo)
  useEffect(() => {
    const checkPath = () => {
      const hash = window.location.hash;
      if (hash && hash !== '' && !hash.startsWith('#')) {
        setIsNotFound(true);
      }
    };
    checkPath();
    window.addEventListener('hashchange', checkPath);
    return () => window.removeEventListener('hashchange', checkPath);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { label: 'Home', target: 'home' },
    { label: 'About', target: 'about' },
    { label: 'Skills', target: 'skills' },
    { label: 'Projects', target: 'projects' },
    { label: 'Experience', target: 'experience' },
    { label: 'Achievements', target: 'achievements' },
    { label: 'Contact', target: 'contact' },
  ];

  if (isNotFound) {
    return <NotFound resetPath={() => { setIsNotFound(false); window.location.hash = ''; }} />;
  }

  return (
    <div className="min-h-screen font-sans bg-[#F4F4F5] dark:bg-[#0A0A0A] text-slate-800 dark:text-slate-100 transition-colors duration-300">
      
      {/* Sticky Header / Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/60 dark:bg-[#0A0A0A]/60 backdrop-blur-md border-b border-slate-200/50 dark:border-white/5">
        
        {/* Dynamic top scroll progress bar */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-slate-100 dark:bg-slate-900">
          <motion.div
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-500"
            style={{
              scaleX: 0, // Injected by framer-motion scroll calculations dynamically or fallback
              transformOrigin: '0%'
            }}
            id="scroll-progress-indicator"
          />
        </div>

        <div className="container mx-auto px-6 h-18 max-w-6xl flex items-center justify-between">
          {/* Logo */}
          <button
            id="nav-logo"
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-slate-900 dark:text-white group cursor-pointer"
          >
            <span className="p-1.5 rounded-lg bg-indigo-600 dark:bg-indigo-500 text-white group-hover:scale-105 transition-transform">
              {portfolioData.personalInfo.firstName[0]}
            </span>
            <span>
              {portfolioData.personalInfo.firstName}
              <span className="text-indigo-600 dark:text-indigo-400">.</span>
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 bg-slate-100/80 dark:bg-white/[0.03] p-1.5 rounded-full border border-slate-200/30 dark:border-white/10">
            {menuItems.map((item) => (
              <button
                id={`nav-link-${item.target}`}
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all ${
                  activeSection === item.target
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/40'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions & Responsive Hamburger */}
          <div className="flex items-center gap-4">
            {/* Dark/Light mode theme switch */}
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

            {/* Resume button */}
            <a
              id="resume-btn-nav"
              href={portfolioData.personalInfo.resumeUrl}
              className="hidden md:inline-flex items-center gap-1 px-4 py-2 text-xs font-semibold rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-850 text-slate-700 dark:text-slate-200 border border-slate-200/50 dark:border-slate-800/80 transition-colors"
            >
              Resume <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger menu toggle */}
            <button
              id="mobile-menu-hamburger"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-850 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation overlay drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden border-t border-slate-200/50 dark:border-white/5 bg-[#F4F4F5] dark:bg-[#0A0A0A] overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-2">
                {menuItems.map((item) => (
                  <button
                    id={`mobile-nav-link-${item.target}`}
                    key={item.target}
                    onClick={() => scrollToSection(item.target)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                      activeSection === item.target
                        ? 'bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 font-bold border-l-4 border-indigo-600 dark:border-indigo-500'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <a
                  id="mobile-resume-download"
                  href={portfolioData.personalInfo.resumeUrl}
                  className="w-full text-center py-3 mt-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-850 text-slate-800 dark:text-slate-200 text-sm font-semibold border border-slate-200/50 dark:border-slate-800/85 block"
                >
                  Download Résumé
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content Sections */}
      <main className="relative">
        <Hero scrollToSection={scrollToSection} />
        
        {/* Modern section dividers with light gradient bands */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-slate-200 dark:via-slate-850 to-transparent" />
        
        <About />
        
        <div className="w-full h-px bg-linear-to-r from-transparent via-slate-200 dark:via-slate-850 to-transparent" />
        
        <Skills />
        
        <div className="w-full h-px bg-linear-to-r from-transparent via-slate-200 dark:via-slate-850 to-transparent" />
        
        <Projects />
        
        <div className="w-full h-px bg-linear-to-r from-transparent via-slate-200 dark:via-slate-850 to-transparent" />
        
        <EducationExperience />
        
        <div className="w-full h-px bg-linear-to-r from-transparent via-slate-200 dark:via-slate-850 to-transparent" />
        
        <AchievementsCertifications />
        
        <div className="w-full h-px bg-linear-to-r from-transparent via-slate-200 dark:via-slate-850 to-transparent" />
        
        <Contact />
      </main>

      {/* Footer copyright and summary */}
      <Footer />

      {/* Back to top widget and scroll position indicator circle */}
      <BackToTop />
    </div>
  );
}
