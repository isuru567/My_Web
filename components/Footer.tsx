import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          © {new Date().getFullYear()} DevPortfolio. All rights reserved.
        </p>
        <div className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-500">
          <span>Made with</span>
          <Heart size={16} className="text-red-500 fill-red-500" />
          <span>using React & Tailwind</span>
        </div>
      </div>
    </footer>
  );
};
