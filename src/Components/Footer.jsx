import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8 px-6 text-center text-slate-500 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} PIXELMINT. All rights reserved.</p>
        <p className="text-xs text-slate-400">Built with React, Tailwind CSS & AI Workflows.</p>
      </div>
    </footer>
  );
}