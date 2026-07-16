import { Home, ArrowLeft } from 'lucide-react';

interface NotFoundProps {
  resetPath: () => void;
}

export default function NotFound({ resetPath }: NotFoundProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-6 text-center">
      {/* Dynamic Background aura */}
      <div className="absolute top-1/4 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md w-full p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl space-y-6 relative z-10 text-left md:text-center">
        
        {/* Error initial */}
        <span className="block font-display text-8xl font-black bg-gradient-to-r from-red-500 to-indigo-600 dark:from-red-400 dark:to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(239,68,68,0.2)] select-none">
          404
        </span>

        <div className="space-y-2">
          <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
            Page Not Found
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
            The link you followed may be broken, or the section has been moved. Don't worry, your portfolio progress is still intact!
          </p>
        </div>

        <button
          id="notfound-back-home"
          onClick={resetPath}
          className="w-full py-3 px-5 rounded-xl bg-indigo-600 dark:bg-indigo-500 text-white font-sans font-semibold text-sm hover:opacity-95 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </button>
      </div>
    </div>
  );
}
