"use client";

import { motion } from "framer-motion";
import profileImg from "@/image/profile.jpeg";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-5xl md:text-7xl font-black uppercase mb-12 drop-shadow-[3px_3px_0_#111]">
          About <span className="text-blue">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Photo */}
          <div className="bg-white p-6 neo-border neo-shadow flex flex-col items-center justify-center relative overflow-hidden group min-h-[300px]">
            <div className="absolute inset-0 bg-main/10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative w-48 h-48 rounded-full neo-border overflow-hidden bg-white z-10 shadow-[4px_4px_0_0_rgba(17,17,17,1)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profileImg.src}
                alt="Ahmad Sinatria Pamungkas"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback ke avatar AI jika foto belum dipasang di folder public/profile.jpg
                  e.currentTarget.src = "https://api.dicebear.com/7.x/initials/svg?seed=Sinatria&backgroundColor=ffde59";
                }}
              />
            </div>
            <div className="mt-6 text-center z-10">
              <h3 className="text-xl font-black uppercase">Ahmad Sinatria Pamungkas</h3>
              <p className="font-bold text-xs bg-black text-white px-2 py-1 neo-border mt-2 inline-block">
                Fresh Graduate 2026
              </p>
            </div>
          </div>

          <div className="bg-white p-8 neo-border neo-shadow lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4 uppercase">Who am I?</h3>
            <p className="text-lg font-medium leading-relaxed mb-4">
              Pengembang perangkat lunak yang berdedikasi dan calon AI Engineer dengan ketertarikan kuat pada bidang Kecerdasan Buatan (AI), pengembangan API, otomasi, serta teknologi modern.
            </p>
            <p className="text-lg font-medium leading-relaxed mb-4">
              Merupakan lulusan baru dari SMK Negeri 1 Wonosobo jurusan Rekayasa Perangkat Lunak (Software Engineering). Secara konsisten terus meningkatkan keterampilan teknis melalui berbagai program sertifikasi, proyek pribadi, dan proses belajar yang berkelanjutan.
            </p>
            <p className="text-lg font-medium leading-relaxed">
              Sangat menikmati proses mengeksplorasi teknologi baru, memecahkan masalah, serta membangun solusi digital yang efisien dan berdampak positif.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-pink text-white p-8 neo-border neo-shadow transform md:rotate-1">
            <h3 className="text-2xl font-bold mb-2 uppercase drop-shadow-[2px_2px_0_#111]">Eksplorasi & Inovasi</h3>
            <p className="text-lg font-medium">
              Aktif mendalami integrasi AI API untuk membangun otomasi yang mempermudah kehidupan sehari-hari, serta mempelajari fundamental robotika.
            </p>
          </div>

          <div className="bg-main p-8 neo-border neo-shadow transform md:-rotate-1 text-black">
            <h3 className="text-2xl font-bold mb-2 uppercase">Aspirasi Karir</h3>
            <p className="text-lg font-medium">
              Bertekad untuk terus berkembang menjadi AI Engineer profesional, berfokus pada integrasi teknologi cerdas untuk menciptakan aplikasi digital yang solutif dan efisien.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
