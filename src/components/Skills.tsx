"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "Software Development", "Java Fundamentals", "Algoritma", "Next.js", 
    "Artificial Intelligence (AI)", "AI Development", "API Development", 
    "AI API Integration", "Robotics", "Automation", "Mentoring"
  ];

  return (
    <section id="skills" className="py-24 bg-main neo-border-y border-y-4 border-black overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_20%,_#111_120%)] opacity-10 pointer-events-none" />
      
      <h2 className="text-5xl md:text-7xl font-black uppercase mb-12 text-center drop-shadow-[3px_3px_0_#111] text-white">
        My <span className="text-black drop-shadow-none">Skills</span>
      </h2>

      <div className="relative flex overflow-x-hidden group bg-white neo-border py-4 transform -rotate-2 scale-110">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <span 
              key={index} 
              className="mx-4 text-4xl font-black uppercase text-black hover:text-pink transition-colors cursor-default"
            >
              {skill}
              <span className="mx-4 text-blue">•</span>
            </span>
          ))}
        </div>
      </div>
      
      <div className="relative flex overflow-x-hidden group bg-black neo-border py-4 transform rotate-2 scale-110 mt-8">
        <div className="animate-marquee-reverse whitespace-nowrap flex items-center">
          {[...skills.reverse(), ...skills, ...skills].map((skill, index) => (
            <span 
              key={index} 
              className="mx-4 text-4xl font-black uppercase text-white hover:text-green transition-colors cursor-default"
            >
              {skill}
              <span className="mx-4 text-pink">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
