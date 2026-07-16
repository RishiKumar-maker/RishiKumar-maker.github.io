import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Github, Linkedin, Twitter, Download, Copy, Check, Send, Sparkles, HelpCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personalInfo } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [showIntegrationHelp, setShowIntegrationHelp] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors = { name: '', email: '', message: '' };
    let hasError = false;

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
      hasError = true;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email.';
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      hasError = true;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please type a message.';
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    // Frontend Mock Submit Success!
    setFormSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white dark:bg-slate-950">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-teal-500/5 dark:bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-mono text-xs border border-indigo-100/50 dark:border-indigo-900/30">
            <Sparkles className="w-3.5 h-3.5" />
            Connect
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
            Contact Me
          </h2>
          <div className="h-1 w-12 bg-indigo-600 dark:bg-indigo-400 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="font-display text-xl font-bold text-slate-800 dark:text-slate-100">
                Let's stay in touch!
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed font-sans">
                I am actively seeking junior developer roles, student internships, or general collaborations. Even if you just want to ask a question, say hello, or talk computer science, feel free to drop me a message!
              </p>
            </div>

            {/* Tactile Copy Email Box */}
            <div className="p-4 bento-card flex items-center justify-between gap-3 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="space-y-0.5 truncate">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500">Direct Email</p>
                  <p className="font-sans font-medium text-sm text-slate-700 dark:text-slate-300 truncate">{personalInfo.email}</p>
                </div>
              </div>
              <button
                id="copy-email-btn"
                onClick={copyEmail}
                className="p-2.5 rounded-xl bg-white dark:bg-slate-950 text-slate-500 hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-400 border border-slate-200/50 dark:border-slate-800 shadow-sm active:scale-95 transition-all cursor-pointer"
                aria-label="Copy email address"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Quick Links / Download Resume */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                id="resume-download-btn"
                href={personalInfo.resumeUrl}
                className="px-5 py-3 rounded-xl bg-indigo-600 dark:bg-indigo-500 text-white font-sans font-semibold text-sm hover:opacity-95 shadow-lg shadow-indigo-500/10 active:scale-98 transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Résumé
              </a>
            </div>

            {/* Social Channels List */}
            <div className="space-y-3">
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-semibold">
                Social Networks
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bento-card flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850 transition-all text-sm font-sans font-medium"
                >
                  <Github className="w-4 h-4 text-slate-900 dark:text-white" />
                  GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bento-card flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850 transition-all text-sm font-sans font-medium"
                >
                  <Linkedin className="w-4 h-4 text-blue-600" />
                  LinkedIn
                </a>
                {personalInfo.twitter && (
                  <a
                    href={personalInfo.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 bento-card flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850 transition-all text-sm font-sans font-medium col-span-2"
                  >
                    <Twitter className="w-4 h-4 text-sky-500" />
                    Twitter / X
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 md:p-8 bento-card relative text-left">
              
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-display text-lg font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                  <Send className="w-4 h-4 text-indigo-500" /> Send a Message
                </h3>
                <button
                  id="toggle-help-btn"
                  onClick={() => setShowIntegrationHelp(!showIntegrationHelp)}
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-indigo-500 dark:text-slate-500 dark:hover:text-indigo-400 transition-colors"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  {showIntegrationHelp ? 'Hide Setup Help' : 'How to connect?'}
                </button>
              </div>

              {/* Formspree Integration Guidance panel */}
              <AnimatePresence>
                {showIntegrationHelp && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-6 p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100/50 dark:border-indigo-950 text-xs text-indigo-700 dark:text-indigo-400 space-y-2 overflow-hidden font-sans"
                  >
                    <p className="font-bold">🚀 How to hook up a working backend form in 2 minutes:</p>
                    <ol className="list-decimal pl-4 space-y-1">
                      <li>Create a free account at <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="underline font-semibold">formspree.io</a>.</li>
                      <li>Create a new form and copy your Form ID (e.g., <code className="bg-indigo-100/60 dark:bg-indigo-950 px-1 py-0.5 rounded font-mono">"mqkvyvzd"</code>).</li>
                      <li>Open <code className="bg-indigo-100/60 dark:bg-indigo-950 px-1 py-0.5 rounded font-mono">src/data/portfolioData.ts</code>.</li>
                      <li>Add your ID to the <code className="font-mono font-semibold">formspreeId</code> variable inside the <code className="font-mono">personalInfo</code> block. That's it! Your form will now submit directly to your email!</li>
                    </ol>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form submission success banner */}
              <AnimatePresence>
                {formSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 text-emerald-800 dark:text-emerald-400 text-xs font-semibold flex items-center gap-2.5"
                  >
                    <Check className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                    <div>
                      <p>Thank you! Your message was submitted successfully (Frontend-only demo).</p>
                      <p className="text-[10px] font-normal opacity-85 mt-0.5">To receive email messages directly, follow the "How to connect" tips at the top right!</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Standard Form */}
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-slate-950 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-sans ${
                      errors.name ? 'border-red-500/70 focus:ring-red-500/20' : 'border-slate-200 dark:border-slate-800'
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-[11px] font-sans mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className={`w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-slate-950 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-sans ${
                      errors.email ? 'border-red-500/70 focus:ring-red-500/20' : 'border-slate-200 dark:border-slate-800'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-[11px] font-sans mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Type your message here..."
                    className={`w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-slate-950 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-sans resize-none ${
                      errors.message ? 'border-red-500/70 focus:ring-red-500/20' : 'border-slate-200 dark:border-slate-800'
                    }`}
                  />
                  {errors.message && <p className="text-red-500 text-[11px] font-sans mt-1">{errors.message}</p>}
                </div>

                <button
                  id="submit-contact-form"
                  type="submit"
                  className="w-full py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-sans font-semibold text-sm hover:opacity-95 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
