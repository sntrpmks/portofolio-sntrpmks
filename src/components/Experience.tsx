"use client";

import { motion } from "framer-motion";
import { Briefcase, Mic } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Keynote Speaker & Presenter",
      company: "SMKN 1 Wonosobo",
      date: "Mei 2026",
      description: "Menjadi pemateri di hadapan lebih dari 600 siswa lintas jurusan untuk mempresentasikan proyek inovatif Web Event SMKN 1 Wonosobo. Menjelaskan arsitektur pengembangan web, UI/UX berdesain modern, serta implementasi teknis integrasi chatbot AI Gemini (RAG & API).",
      icon: <Mic size={24} />,
      color: "bg-pink"
    },
    {
      id: 2,
      title: "Student Intern",
      company: "Proactive Robotika (Proactive Education) – Yogyakarta",
      date: "Jan 2026 - Mar 2026",
      description: "Berkontribusi di sektor pendidikan dengan membantu proses penyampaian materi pembelajaran Robotika dan Coding. Bertindak sebagai mentor bagi siswa untuk memahami dasar logika pemrograman. Menyiapkan materi pengajaran serta peralatan teknis untuk memastikan aktivitas kelas berjalan lancar.",
      icon: <Briefcase size={24} />,
      color: "bg-blue"
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-7xl font-black uppercase mb-16 text-center drop-shadow-[3px_3px_0_#111]">
          My <span className="text-pink">Experience</span>
        </h2>

        <div className="relative border-l-4 border-black ml-4 md:ml-0 md:pl-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-12 ml-8 md:ml-12 relative"
            >
              <div className={`absolute -left-14 md:-left-18 top-0 w-12 h-12 rounded-full neo-border neo-shadow flex items-center justify-center text-white ${exp.color} z-10`}>
                {exp.icon}
              </div>

              <div className="bg-white p-6 neo-border neo-shadow hover:translate-x-2 hover:-translate-y-2 transition-transform">
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                  <h3 className="text-2xl font-bold uppercase">{exp.title}</h3>
                  <span className="text-sm font-bold bg-main px-3 py-1 neo-border inline-block mt-2 md:mt-0 whitespace-nowrap">
                    {exp.date}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-blue mb-4">{exp.company}</h4>
                <p className="text-lg font-medium">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

