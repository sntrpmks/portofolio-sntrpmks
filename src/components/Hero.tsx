"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const roles = ["Software Developer", "AI Enthusiast"];
  const [currentRole, setCurrentRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let ticker = setTimeout(() => {
      handleTyping();
    }, typingSpeed);

    return () => clearTimeout(ticker);
  }, [currentRole, isDeleting]);

  const handleTyping = () => {
    const i = loopNum % roles.length;
    const fullText = roles[i];

    setCurrentRole(
      isDeleting
        ? fullText.substring(0, currentRole.length - 1)
        : fullText.substring(0, currentRole.length + 1)
    );

    setTypingSpeed(isDeleting ? 30 : 100);

    if (!isDeleting && currentRole === fullText) {
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && currentRole === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-32 left-10 w-24 h-24 bg-pink rounded-full neo-border neo-shadow hidden md:block animate-bounce" />
      <div className="absolute bottom-32 right-20 w-32 h-32 bg-main neo-border neo-shadow hidden md:block" style={{ animation: "spin 10s linear infinite" }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue rotate-45 neo-border neo-shadow hidden lg:block" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center z-10 max-w-5xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="inline-block bg-green text-white font-bold px-4 py-2 mb-6 neo-border neo-shadow uppercase tracking-widest text-sm"
        >
          Hello World, I am
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-black uppercase leading-none mb-6 drop-shadow-[4px_4px_0_#111]">
          Ahmad <br className="md:hidden" />
          <span className="text-main drop-shadow-[4px_4px_0_#111]">Sinatria Pamungkas</span>
        </h1>

        <div className="text-xl md:text-3xl font-bold mb-10 max-w-3xl mx-auto bg-white p-4 neo-border neo-shadow inline-block h-[76px] md:h-[88px] flex items-center justify-center">
          <span>{currentRole}</span>
          <span className="animate-ping border-r-4 border-black ml-1 h-full"></span>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="#projects" className="neo-button bg-main text-xl flex items-center gap-2 group w-full sm:w-auto justify-center">
            View Work
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="neo-button bg-white text-xl flex items-center gap-2 w-full sm:w-auto justify-center">
            Contact Me
            <Download size={20} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
