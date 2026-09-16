import React from 'react';
import { Layout, Trophy, Bug, Sparkles, Search } from 'lucide-react';

export default function Services() {
  const serviceList = [
    { icon: <Layout className="w-6 h-6 text-emerald-400" />, title: "Landing Page Architecture", desc: "High-converting, responsive landing pages designed with modern Tailwind CSS and optimized UI/UX flows." },
    { icon: <Trophy className="w-6 h-6 text-emerald-400" />, title: "Thumbnail & Visual Brand Design", desc: "Custom eye-catching thumbnails and marketing assets tailored to grab instant user attention." },
    { icon: <Bug className="w-6 h-6 text-emerald-400" />, title: "JS / React Code Bug Fixing", desc: "Deep debugging and refactoring services to resolve broken state, component re-renders, or JS logic errors." },
    { icon: <Sparkles className="w-6 h-6 text-emerald-400" />, title: "AI-Powered App Development", desc: "Building next-generation intelligent web applications integrated with modern LLMs and AI automation tools." },
    { icon: <Search className="w-6 h-6 text-emerald-400" />, title: "AI-Driven Research & Insights", desc: "Leveraging AI workflows to conduct fast technical research, data extraction, and competitive market analysis." },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl font-black text-white mb-3">Our Core Services</h2>
        <p className="text-slate-400">Professional front-end web development, visual branding, and intelligent AI integration.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceList.map((service, idx) => (
          <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:bg-slate-900/80 hover:border-slate-700 transition">
            <div className="p-3 bg-slate-800 rounded-xl w-fit mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}