"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Award, X, ZoomIn } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import bnspImg from "@/image/BNSP.jpg";
import hacktiv8Img from "@/image/Hacktiv8.jpg";
import ibmImg from "@/image/IBM.jpg";
import internshipImg from "@/image/Internship.jpg";
import smkdevImg from "@/image/SMKDEV.jpg";
import javaImg from "@/image/JavaFundamentals.jpg";

export default function Certificates() {
  const [selectedImg, setSelectedImg] = useState<any>(null);

  const certificates = [
    {
      id: 1,
      title: "Sertifikat Kompetensi: Junior Coder",
      issuer: "BNSP Indonesia",
      date: "Nov 2025 - Nov 2028",
      description: "Skema Sertifikasi Okupasi Junior Coder / Pemrograman Perangkat Lunak.",
      image: bnspImg,
      highlight: true
    },
    {
      id: 2,
      title: "Productivity and AI API Integration for Developers",
      issuer: "Hacktiv8 Indonesia (Maju Bareng AI)",
      date: "Mei 2026",
      description: "Artificial Intelligence (AI), API Development.",
      image: hacktiv8Img,
      highlight: true
    },
    {
      id: 3,
      title: "Introduction to Artificial Intelligence",
      issuer: "IBM",
      date: "Mei 2026",
      description: "Pemahaman dasar seputar Kecerdasan Buatan (AI).",
      image: ibmImg
    },
    {
      id: 4,
      title: "Internship Certificate in Robotics",
      issuer: "Proactive Robotika",
      date: "Maret 2026",
      description: "Pencapaian dan pengalaman kerja di bidang Robotika.",
      image: internshipImg
    },
    {
      id: 5,
      title: "Certificate of Completion SMKDEV SSEC2025",
      issuer: "SMKDEV",
      date: "September 2025",
      description: "Keterampilan dalam Artificial Intelligence (AI).",
      image: smkdevImg
    },
    {
      id: 6,
      title: "Award of Course Completion: Java Fundamentals",
      issuer: "Oracle",
      date: "Oktober 2024",
      description: "Pemahaman mendalam mengenai fondasi pemrograman Java.",
      image: javaImg
    }
  ];

  return (
    <section id="certificates" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-7xl font-black uppercase mb-16 text-center drop-shadow-[3px_3px_0_#111]">
          My <span className="text-blue">Credentials</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 neo-border neo-shadow hover:-translate-y-2 transition-transform flex flex-col justify-between ${
                cert.highlight ? "bg-main" : "bg-white"
              }`}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 neo-border ${cert.highlight ? "bg-white" : "bg-main"}`}>
                    <Award size={24} />
                  </div>
                  <span className="font-bold text-sm bg-black text-white px-2 py-1 neo-border">
                    {cert.date}
                  </span>
                </div>
                
                {/* Certificate Image Container with Click Preview */}
                <div 
                  onClick={() => setSelectedImg(cert.image)}
                  className="w-full h-48 bg-gray-200 neo-border mb-4 relative overflow-hidden flex items-center justify-center cursor-zoom-in group"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_#111_120%)] opacity-10 pointer-events-none z-10"></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-20 flex flex-col items-center justify-center text-white gap-2">
                    <ZoomIn size={32} className="scale-75 group-hover:scale-100 transition-transform duration-300" />
                    <span className="font-black uppercase text-xs tracking-wider">Click to Preview</span>
                  </div>

                  <Image 
                    src={cert.image} 
                    alt={cert.title} 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <h3 className="text-xl font-black uppercase mb-2">{cert.title}</h3>
                <h4 className="font-bold text-pink mb-4">{cert.issuer}</h4>
                <p className="font-medium text-sm border-t-2 border-black pt-4">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Fullscreen Preview Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-white neo-border neo-shadow flex flex-col overflow-hidden cursor-default"
            >
              {/* Retro OS Style Window Header */}
              <div className="bg-main px-4 py-3 neo-border-b flex justify-between items-center text-black font-black uppercase text-sm select-none">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-pink border border-black" />
                  <div className="w-3 h-3 rounded-full bg-blue border border-black" />
                  <div className="w-3 h-3 rounded-full bg-green border border-black" />
                  <span className="ml-2 font-black tracking-wider text-xs md:text-sm">Certificate_Viewer.exe</span>
                </div>
                <button 
                  onClick={() => setSelectedImg(null)}
                  className="bg-white hover:bg-pink hover:text-white p-1 neo-border text-black transition-colors cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Certificate Image Window Body */}
              <div className="p-4 md:p-6 bg-gray-100 flex items-center justify-center min-h-[30vh] max-h-[70vh] md:max-h-[75vh] overflow-y-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedImg.src}
                  alt="Certificate Full Preview"
                  className="max-h-[60vh] md:max-h-[65vh] max-w-full object-contain neo-border border-4 border-black"
                />
              </div>
              
              {/* Window Status Bar */}
              <div className="bg-white px-4 py-2 neo-border-t text-xs font-bold text-gray-500 flex justify-between uppercase">
                <span>Status: Ready</span>
                <span>Zoom: 100%</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
