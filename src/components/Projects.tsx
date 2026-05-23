"use client";

import { motion } from "framer-motion";
import { FolderGit2, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "AI API Integration Project",
      category: "Artificial Intelligence",
      description: "Proyek pengembangan integrasi API AI untuk memecahkan masalah otomatisasi dan produktivitas.",
      tech: ["Node.js", "AI", "API"],
      link: "#",
      color: "bg-pink"
    },
    {
      id: 2,
      title: "Robotics Control System",
      category: "Robotics & Automation",
      description: "Sistem otomasi untuk mengendalikan perangkat robotik dasar, dibuat selama masa magang.",
      tech: ["Java", "Robotics"],
      link: "#",
      color: "bg-blue"
    },
    {
      id: 3,
      title: "Personal Portfolio",
      category: "Web Development",
      description: "Website portofolio berdesain Neo-Brutalism dengan animasi canggih menggunakan Framer Motion.",
      tech: ["Next.js", "TailwindCSS", "Framer Motion"],
      link: "#",
      color: "bg-green"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-7xl font-black uppercase mb-16 text-center drop-shadow-[3px_3px_0_#111]">
          Featured <span className="text-pink">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group bg-white neo-border neo-shadow flex flex-col"
            >
              <div className={`${project.color} h-32 neo-border-b border-b-4 border-black relative overflow-hidden flex items-center justify-center`}>
                <FolderGit2 size={48} className="text-white mix-blend-overlay opacity-50" />
                <span className="absolute top-2 right-2 bg-white text-black font-bold text-xs px-2 py-1 neo-border">
                  {project.category}
                </span>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-black uppercase mb-3 group-hover:text-blue transition-colors">
                  {project.title}
                </h3>
                <p className="font-medium mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-bold bg-gray-100 px-2 py-1 neo-border">
                      {t}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link}
                  className="neo-button w-full flex items-center justify-center gap-2 hover:bg-main transition-colors text-sm"
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
