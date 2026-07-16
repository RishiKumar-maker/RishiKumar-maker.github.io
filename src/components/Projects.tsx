import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, ExternalLink, Github, Code, CheckCircle2, CircleDot, Calendar, X, Sparkles } from 'lucide-react';
import { portfolioData, Project } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'web' | 'mobile' | 'ml' | 'other'>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Dynamic project categories
  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Dev' },
    { value: 'mobile', label: 'Mobile Apps' },
    { value: 'ml', label: 'AI & ML' },
    { value: 'other', label: 'Other/Tools' }
  ];

  // Filter and Search logic
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  // Dynamic SVG Gradient generator for project card placeholders
  const getGradientForProject = (title: string) => {
    const hash = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const index = hash % 5;
    const gradients = [
      'from-indigo-600 to-purple-600 dark:from-indigo-500/80 dark:to-purple-500/80',
      'from-teal-500 to-emerald-500 dark:from-teal-500/80 dark:to-emerald-500/80',
      'from-blue-600 to-cyan-500 dark:from-blue-500/80 dark:to-cyan-400/80',
      'from-rose-500 to-orange-500 dark:from-rose-500/80 dark:to-orange-500/80',
      'from-indigo-500 to-teal-400 dark:from-indigo-500/80 dark:to-teal-400/80',
    ];
    return gradients[index];
  };

  const getStatusIcon = (status: Project['status']) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />;
      case 'In Progress':
        return <CircleDot className="w-3.5 h-3.5 text-amber-500 animate-pulse" />;
      case 'Planned':
        return <Calendar className="w-3.5 h-3.5 text-slate-400" />;
    }
  };

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-100 dark:border-emerald-500/20';
      case 'In Progress':
        return 'bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-100 dark:border-amber-500/20';
      case 'Planned':
        return 'bg-slate-50 dark:bg-slate-500/10 text-slate-700 dark:text-slate-400 border-slate-100 dark:border-slate-500/20';
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/20">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-mono text-xs border border-indigo-100/50 dark:border-indigo-900/30">
            <Sparkles className="w-3.5 h-3.5" />
            Showcase
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-sans max-w-xl">
            A curated list of web applications, experiments, and school projects I am working on. Select a card to view detailed case studies.
          </p>
          <div className="h-1 w-12 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-2" />
        </div>

        {/* Search & Filter Toolbar */}
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between mb-12 bg-white/70 dark:bg-white/[0.03] p-4 rounded-3xl border border-slate-200/50 dark:border-white/10 shadow-sm backdrop-blur-md">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
            <input
              id="project-search"
              type="text"
              placeholder="Search by project name or technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-sans"
            />
          </div>

          {/* Category Filter buttons */}
          <div className="flex flex-wrap gap-1.5 items-center">
            {categories.map((cat) => (
              <button
                id={`filter-${cat.value}`}
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value as any)}
                className={`px-3.5 py-1.5 rounded-xl font-sans text-xs font-medium cursor-pointer border transition-all ${
                  selectedCategory === cat.value
                    ? 'bg-indigo-600 text-white border-indigo-600 dark:bg-indigo-500 dark:border-indigo-500 shadow-sm'
                    : 'bg-transparent text-slate-600 dark:text-slate-400 border-transparent hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  id={`project-card-${project.id}`}
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setActiveProject(project)}
                  className="bento-card group overflow-hidden flex flex-col h-full cursor-pointer !p-0"
                >
                  {/* Thumbnail / Abstract Graphic Header */}
                  <div className="relative h-44 w-full overflow-hidden flex items-center justify-center">
                    {project.imageUrl ? (
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-tr ${getGradientForProject(project.title)} flex items-center justify-center p-6 relative overflow-hidden`}>
                        <Code className="w-10 h-10 text-white/20 absolute -right-3 -bottom-3 rotate-12 scale-150" />
                        <span className="font-display font-black text-2xl text-white tracking-wider drop-shadow-sm truncate max-w-xs">
                          {project.title}
                        </span>
                        <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                        {/* Dynamic decorative dot matrix */}
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]" />
                      </div>
                    )}

                    {/* Status Badge */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full border text-[10px] font-mono uppercase tracking-wider font-semibold backdrop-blur-md ${getStatusColor(project.status)}`}>
                        {getStatusIcon(project.status)}
                        <span>{project.status}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between text-left space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-display text-lg font-bold text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3 font-sans">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/40 dark:border-slate-700/40"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 border border-indigo-100/50 dark:border-indigo-900/30">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          /* Empty / Zero state */
          <div className="py-16 px-6 text-center border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl max-w-md mx-auto">
            <Code className="w-10 h-10 text-slate-300 dark:text-slate-700 mx-auto mb-3" />
            <h3 className="font-sans font-semibold text-slate-700 dark:text-slate-300 mb-1">No Projects Found</h3>
            <p className="text-xs text-slate-400 dark:text-slate-500 max-w-xs mx-auto">
              We couldn't find any projects matching your search term. Try checking another category or refining your filter.
            </p>
          </div>
        )}

        {/* More coming soon banner */}
        <div className="mt-12 p-6 bento-card border-dashed border-indigo-500/30 dark:border-indigo-500/30 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4 max-w-3xl mx-auto">
          <div className="space-y-0.5">
            <h4 className="font-sans font-semibold text-sm text-indigo-900 dark:text-indigo-300">More projects coming soon!</h4>
            <p className="text-xs text-indigo-600/70 dark:text-indigo-400/70">Currently studying design patterns and learning full-stack system architecture.</p>
          </div>
          <button
            id="more-coming-soon-cta"
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-4 py-1.5 bg-indigo-600 dark:bg-indigo-500 text-white text-xs font-semibold rounded-xl hover:opacity-90 active:scale-98 cursor-pointer transition-all shrink-0"
          >
            Have a project idea?
          </button>
        </div>
      </div>

      {/* Detail Overlay Case Study Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
            />

            {/* Modal Card Content Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-2xl max-h-[85vh] bg-white dark:bg-[#0A0A0A] rounded-[24px] border border-slate-200/80 dark:border-white/10 shadow-2xl overflow-y-auto flex flex-col z-10"
            >
              {/* Image banner inside modal */}
              <div className="relative h-56 w-full shrink-0 flex items-center justify-center">
                {activeProject.imageUrl ? (
                  <img
                    src={activeProject.imageUrl}
                    alt={activeProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-tr ${getGradientForProject(activeProject.title)} flex items-center justify-center p-6 relative overflow-hidden`}>
                    <Code className="w-12 h-12 text-white/10 absolute -right-2 -bottom-2 scale-150 rotate-6" />
                    <span className="font-display font-black text-3xl text-white tracking-wider drop-shadow-sm select-none">
                      {activeProject.title}
                    </span>
                    <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]" />
                  </div>
                )}

                {/* Close Button */}
                <button
                  id="close-project-modal"
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-950/40 text-white hover:bg-slate-950/60 backdrop-blur-md cursor-pointer border border-white/10 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Categories inside modal */}
                <div className="absolute bottom-4 left-4">
                  <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono uppercase tracking-wider font-bold backdrop-blur-md ${getStatusColor(activeProject.status)}`}>
                    {getStatusIcon(activeProject.status)}
                    <span>{activeProject.status}</span>
                  </div>
                </div>
              </div>

              {/* Body details inside modal */}
              <div className="p-6 md:p-8 space-y-6 text-left overflow-y-auto">
                <div className="space-y-1.5">
                  <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                    {activeProject.title}
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {activeProject.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-sans font-semibold tracking-wider uppercase px-2 py-0.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 font-semibold">
                    Overview
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed font-sans">
                    {activeProject.longDescription || activeProject.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 font-semibold">
                    Technologies Implemented
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* External links */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100 dark:border-slate-900">
                  {activeProject.githubLink && (
                    <a
                      id="modal-link-github"
                      href={activeProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-sans font-medium text-xs hover:opacity-95 active:scale-98 transition-all flex items-center justify-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      Browse Repository
                    </a>
                  )}
                  {activeProject.liveLink && activeProject.status === 'Completed' && (
                    <a
                      id="modal-link-live"
                      href={activeProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-indigo-600 dark:bg-indigo-500 text-white font-sans font-medium text-xs hover:opacity-95 active:scale-98 transition-all flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Launch Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
