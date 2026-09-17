import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/90 border-b border-slate-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
          PIXELMINT<span className="text-emerald-400">.</span>
        </Link>
        <div className="flex flex-wrap gap-3 md:gap-8 text-sm font-semibold">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-emerald-400 border-b-2 border-emerald-400 pb-1" : "text-slate-300 hover:text-white transition"}>Home</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "text-emerald-400 border-b-2 border-emerald-400 pb-1" : "text-slate-300 hover:text-white transition"}>Projects</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? "text-emerald-400 border-b-2 border-emerald-400 pb-1" : "text-slate-300 hover:text-white transition"}>Services</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-emerald-400 border-b-2 border-emerald-400 pb-1" : "text-slate-300 hover:text-white transition"}>Founder</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-emerald-400 border-b-2 border-emerald-400 pb-1" : "text-slate-300 hover:text-white transition"}>Contact Us</NavLink>
        </div>
      </div>
    </nav>
  );
}