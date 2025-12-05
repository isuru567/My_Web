import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400/20 dark:bg-primary-600/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/20 dark:bg-indigo-600/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary-600 dark:text-primary-400 uppercase bg-primary-100 dark:bg-primary-900/30 rounded-full">
            Senior React Engineer
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
            Building digital <br />
            <span className="text-primary-600 dark:text-primary-400">experiences</span> that matter.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-lg leading-relaxed">
            I craft accessible, pixel-perfect, and performant web applications using modern technologies like React, TypeScript, and Tailwind CSS.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40"
            >
              View Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-slate-700 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-indigo-500 rounded-3xl rotate-6 opacity-20 dark:opacity-40 blur-lg"></div>
             <img 
               src="https://picsum.photos/800/800?grayscale" 
               alt="Developer Portrait" 
               className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white dark:border-slate-800"
             />
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -left-6 z-20 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
                  <Download size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Resume</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">Available Now</p>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
