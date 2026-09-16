import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Sparkles, Layers, Rocket, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-hidden">
      {/* Dynamic Background Glow Effects */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-teal-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-6 max-w-7xl mx-auto text-center flex flex-col items-center justify-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-8 backdrop-blur-md shadow-lg shadow-emerald-500/5">
          <Sparkles className="w-4 h-4 animate-pulse" />
          <span>Next-Gen Software Solutions & Web Design</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight max-w-4xl mb-6">
          We Build Digital Products That <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Scale & Inspire</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
          At Pixelmint, we combine front-end precision, clean architectures, and modern UI/UX to create high-impact web applications for startups and businesses.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all duration-300 shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 group"
          >
            Start a Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/services"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold transition-all duration-300 flex items-center justify-center gap-2"
          >
            Explore Services
          </Link>
        </div>

        {/* Floating Feature Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl text-left">
          <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
            <Code2 className="w-6 h-6 text-emerald-400 mb-2" />
            <h4 className="font-semibold text-slate-200">Modern Stack</h4>
            <p className="text-xs text-slate-400 mt-1">React, Tailwind & C++ Integration</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
            <Layers className="w-6 h-6 text-teal-400 mb-2" />
            <h4 className="font-semibold text-slate-200">Pixel Perfect</h4>
            <p className="text-xs text-slate-400 mt-1">Responsive & Fluid Interfaces</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
            <Rocket className="w-6 h-6 text-cyan-400 mb-2" />
            <h4 className="font-semibold text-slate-200">High Speed</h4>
            <p className="text-xs text-slate-400 mt-1">Optimized Performance & SEO</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
            <ShieldCheck className="w-6 h-6 text-emerald-400 mb-2" />
            <h4 className="font-semibold text-slate-200">Scalable Architecture</h4>
            <p className="text-xs text-slate-400 mt-1">Clean & Maintainable Code</p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="my-12 px-6 max-w-5xl mx-auto w-full">
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-emerald-500/20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Elevate Your Digital Presence?</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-6 text-sm md:text-base">
            Let's turn your ideas into functional, beautifully engineered web experiences.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-md shadow-emerald-500/20"
          >
            Get In Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}