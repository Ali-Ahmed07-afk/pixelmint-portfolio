import React from 'react';
import { GitBranch, ExternalLink, Code2, FolderGit2 } from 'lucide-react';

export default function Projects() {
  const projectsList = [
    {
      id: 1,
      title: "Color Changer",
      category: "Front-End Web App",
      description: "An interactive DOM manipulation web application that dynamically changes background colors based on user selection.",
      techStack: ["HTML5", "CSS3", "JavaScript"],
      githubUrl: "https://github.com/Ali-Ahmed07-afk/JS-dom-Projects/tree/main/1-colorChanger",
      liveUrl: "https://js-dom-projects-rho.vercel.app/",
    },
    {
      id: 2,
      title: "BMI Calculator",
      category: "Front-End Web App",
      description: "A functional health utility tool that calculates Body Mass Index based on height and weight inputs with instant feedback.",
      techStack: ["HTML5", "CSS3", "JavaScript"],
      githubUrl: "https://github.com/Ali-Ahmed07-afk/JS-dom-Projects/tree/main/2-BMICalculator",
      liveUrl: "https://js-dom-projects-p1x7.vercel.app/",
    },
    {
      id: 3,
      title: "Digital Clock",
      category: "Front-End Web App",
      description: "A real-time JavaScript digital clock interface displaying continuous live system time with sleek UI styling.",
      techStack: ["HTML5", "CSS3", "JavaScript"],
      githubUrl: "https://github.com/Ali-Ahmed07-afk/JS-dom-Projects/tree/main/3-DigitalClock",
      liveUrl: "https://js-dom-projects-9xmh.vercel.app/",
    },
    {
      id: 4,
      title: "Guess The Number",
      category: "Front-End Web Game",
      description: "An engaging logic-based guessing game where players attempt to guess a randomly generated number within limited attempts.",
      techStack: ["HTML5", "CSS3", "JavaScript"],
      githubUrl: "https://github.com/Ali-Ahmed07-afk/JS-dom-Projects/tree/main/4-GuessTheNumber",
      liveUrl: "https://js-dom-projects-jqkw.vercel.app/",
    },
    {
      id: 5,
      title: "Keyboard Check",
      category: "Front-End Web Utility",
      description: "A real-time event listener utility tool that detects and displays physical key codes and key values pressed on the keyboard.",
      techStack: ["HTML5", "CSS3", "JavaScript"],
      githubUrl: "https://github.com/Ali-Ahmed07-afk/JS-dom-Projects/tree/main/5-keyboard",
      liveUrl: "https://js-dom-projects-kfew.vercel.app/",
    },
    {
      id: 6,
      title: "Unlimited Colors",
      category: "Front-End Web App",
      description: "An async-driven web tool that continuously changes background colors automatically using dynamic hex code generation.",
      techStack: ["HTML5", "CSS3", "JavaScript"],
      githubUrl: "https://github.com/Ali-Ahmed07-afk/JS-dom-Projects/tree/main/6-unlimitedColors",
      liveUrl: "https://js-dom-projects-dqg4.vercel.app/",
    },
    {
      id: 7,
      title: "Street Cricket Scorer",
      category: "Mobile Web App",
      description: "A specialized digital scoring application built for tracking street cricket matches, over limits, and player statistics in real time.",
      techStack: ["React", "JavaScript", "Tailwind CSS"],
      githubUrl: "", // GitHub link empty rakha hai
      liveUrl: "https://street-cricket-scorer.ai.studio", // Yahan apna live link paste kar lein
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-4">
          <FolderGit2 className="w-4 h-4" />
          <span>Our Portfolio & Work</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Featured <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
          Explore our interactive front-end web applications and development showcase.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsList.map((project) => (
          <div 
            key={project.id}
            className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between group backdrop-blur-sm shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  {project.category}
                </span>
                <Code2 className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-slate-100 group-hover:text-emerald-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map((tech, index) => (
                  <span 
                    key={index}
                    className="text-xs font-medium bg-slate-800/80 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <GitBranch className="w-4 h-4" />
                  <span>GitHub Repo</span>
                </a>
              ) : (
                <span className="flex items-center gap-2 text-sm font-semibold text-slate-600 cursor-not-allowed">
                  <GitBranch className="w-4 h-4" />
                  <span>Private Code</span>
                </span>
              )}

              <a
                href={project.liveUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors ml-auto"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}