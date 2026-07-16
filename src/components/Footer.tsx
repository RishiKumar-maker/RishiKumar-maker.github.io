import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personalInfo } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-100 dark:border-slate-900 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="space-y-1">
          <p className="font-display font-bold text-slate-800 dark:text-slate-200 text-sm">
            {personalInfo.name}
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 font-sans">
            &copy; {currentYear} Personal Portfolio. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 text-xs font-mono text-slate-400 dark:text-slate-500">
          <p>
            Designed to grow with me.
          </p>
        </div>
      </div>
    </footer>
  );
}
