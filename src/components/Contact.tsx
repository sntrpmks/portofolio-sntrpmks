"use client";

import { motion } from "framer-motion";
import { Mail, Code2, Globe, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-blue p-8 md:p-12 neo-border neo-shadow text-white relative"
      >
        <div className="absolute -top-6 -right-6 w-12 h-12 bg-main rounded-full neo-border animate-ping" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-5xl md:text-7xl font-black uppercase mb-6 drop-shadow-[4px_4px_0_#111]">
              Let's <br />Talk
            </h2>
            <p className="text-xl font-bold mb-8">
              Interested in working together or have a question? Feel free to reach out!
            </p>

            <div className="flex flex-col gap-4">
              <a href="mailto:sinatriapamungkas0@gmail.com" className="flex items-center gap-4 text-xl font-bold hover:translate-x-2 transition-transform">
                <div className="bg-white text-black p-3 neo-border">
                  <Mail size={24} />
                </div>
                sinatriapamungkas0@gmail.com
              </a>
              <a href="https://linkedin.com/in/sntrpmks" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-xl font-bold hover:translate-x-2 transition-transform">
                <div className="bg-white text-black p-3 neo-border">
                  <Globe size={24} />
                </div>
                LinkedIn
              </a>
              <a href="https://github.com/sntrpmks" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-xl font-bold hover:translate-x-2 transition-transform">
                <div className="bg-white text-black p-3 neo-border">
                  <Code2 size={24} />
                </div>
                GitHub
              </a>
            </div>
          </div>

          <form className="flex flex-col gap-6 bg-white p-6 neo-border neo-shadow text-black">
            <h3 className="text-2xl font-black uppercase mb-2">Send a Message</h3>

            <div className="flex flex-col gap-2">
              <label className="font-bold">Name</label>
              <input type="text" className="neo-border p-3 focus:outline-none focus:bg-pink/10 transition-colors" placeholder="John Doe" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold">Email</label>
              <input type="email" className="neo-border p-3 focus:outline-none focus:bg-pink/10 transition-colors" placeholder="john@example.com" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold">Message</label>
              <textarea rows={4} className="neo-border p-3 focus:outline-none focus:bg-pink/10 transition-colors" placeholder="Hello there..."></textarea>
            </div>

            <button type="button" className="neo-button bg-main text-xl flex items-center justify-center gap-2 mt-4 hover:bg-green hover:text-white transition-colors">
              Send <Send size={20} />
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
