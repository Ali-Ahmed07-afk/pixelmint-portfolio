import React from 'react';
import { GitBranch, Code, Globe, User, Sparkles, Mail, Code2 } from 'lucide-react';

export default function About() {
  const about = [
    {
      id: 1,
      name: "Ali Ahmed",
      role: "Co-Founder & Lead Front-End Developer",
      bio: "Specializing in Front-End Web Architecture, JavaScript/React Applications, and AI-assisted Software Workflows. Driven by modern UI design systems and high-performance engineering.",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "C++", "AI Workflows"],
      githubUrl: "https://github.com/Ali-Ahmed07-afk",
      email: "mailto:aliahmed15may08@gmail.com",
      imageSrc: "/ali.jpg", // PASTE ALI AHMED IMAGE LINK HERE
    },
    {
      id: 2,
      name: "Waqar Ahmed",
      role: "Co-Founder & Back-End Developer",
      bio: "Skilled software developer dedicated to building responsive layouts, robust logic structures, and efficient back-end integrated solutions.",
      skills: ["HTML5", "CSS3", "JavaScript", "C++", "Back-End Logic"],
      githubUrl: "https://github.com/waqar12345101-byte", // PASTE WAQAR AHMED GITHUB LINK HERE
      email: "mailto:contact@pixelmint.com",
      imageSrc: "/waqar.jpg", // PASTE WAQAR AHMED IMAGE LINK HERE
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 px-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-4">
          <Sparkles className="w-4 h-4" />
          <span>Leadership & Vision</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          About <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Pixelmint</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
          The minds driving design, technical excellence, and innovation at Pixelmint.
        </p>
      </div>

      {/* About Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {about.map((item) => (
          <div
            key={item.id}
            className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 backdrop-blur-sm shadow-xl flex flex-col justify-between group"
          >
            <div>
              {/* Picture Container */}
              <div className="w-full h-95 mb-6 rounded-2xl bg-slate-800 border-2 border-dashed border-slate-700 flex items-center justify-center overflow-hidden relative group-hover:border-emerald-500/40 transition-colors">
                {item.imageSrc ? (
                  <img
                    src={item.imageSrc}
                    alt={item.name}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="text-slate-500 text-xs text-center p-4 flex flex-col items-center gap-2">
                    <User className="w-12 h-12 text-slate-600" />
                    <span>[PLACEHOLDER: Add {item.name} Picture Here]</span>
                  </div>
                )}
              </div>

              {/* Info */}
              <span className="text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-2 block">
                {item.role}
              </span>
              <h2 className="text-3xl font-black text-white group-hover:text-emerald-400 transition-colors mb-3">
                {item.name}
              </h2>
              <p className="text-slate-300 leading-relaxed text-sm mb-6">
                {item.bio}
              </p>

              {/* Tech Stack & Expertise */}
              <div className="mb-8">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-3">
                  <Code2 className="w-4 h-4 text-emerald-400" />
                  <span>Tech Stack & Expertise:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-3 py-1 rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
              <a
                href={item.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-medium transition text-xs border border-slate-700"
              >
                <GitBranch className="w-4 h-4 text-emerald-400" /> View GitHub Profile
              </a>
              <a
                href={item.email}
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-emerald-400 transition border border-slate-700 ml-auto"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}