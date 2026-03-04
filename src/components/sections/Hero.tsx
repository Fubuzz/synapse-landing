"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Scan line effect */}
      <div className="scan-line" />

      {/* Cyber grid background */}
      <div className="absolute inset-0 cyber-grid opacity-30" />

      {/* INSANE animated gradient mesh */}
      <div 
        className="absolute inset-0 animate-gradient-wild opacity-60"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(0, 255, 255, 0.3) 0%, 
            rgba(255, 0, 255, 0.3) 25%, 
            rgba(255, 255, 0, 0.2) 50%, 
            transparent 70%)`
        }}
      />

      {/* Morphing blobs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-50 animate-morph animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-yellow-500 via-red-500 to-purple-500 rounded-full blur-3xl opacity-50 animate-morph animate-float-reverse" 
           style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-40 animate-morph animate-spin-slow" />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-40 right-40 w-20 h-20 border-2 border-cyan-400 rotate-45 animate-pulse-glow"
        animate={{
          y: [0, -30, 0],
          rotate: [45, 225, 45],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 left-40 w-16 h-16 border-2 border-magenta-400 rounded-full animate-pulse-glow"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-center"
        >
          {/* Glitchy badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-strong mb-8 border-2 border-cyan-400/50 animate-pulse-glow"
            animate={{
              boxShadow: [
                "0 0 20px rgba(0, 255, 255, 0.5)",
                "0 0 40px rgba(255, 0, 255, 0.5)",
                "0 0 20px rgba(0, 255, 255, 0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-5 h-5 text-cyan-400 animate-spin-slow" />
            <span className="text-sm font-bold text-holographic tracking-wider">
              FUTURE OF CREDIT INTELLIGENCE
            </span>
            <Zap className="w-5 h-5 text-magenta-400" />
          </motion.div>

          {/* MASSIVE holographic headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-7xl md:text-8xl lg:text-9xl font-black mb-8 leading-none tracking-tighter"
          >
            <motion.span
              className="block text-holographic drop-shadow-2xl"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              AI-POWERED
            </motion.span>
            <motion.span
              className="block neon-cyan mt-4"
              animate={{
                textShadow: [
                  "0 0 10px rgba(0,255,255,0.8), 0 0 20px rgba(0,255,255,0.6), 0 0 30px rgba(0,255,255,0.4)",
                  "0 0 20px rgba(255,0,255,0.8), 0 0 40px rgba(255,0,255,0.6), 0 0 60px rgba(255,0,255,0.4)",
                  "0 0 10px rgba(0,255,255,0.8), 0 0 20px rgba(0,255,255,0.6), 0 0 30px rgba(0,255,255,0.4)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              CREDIT
            </motion.span>
            <motion.span
              className="block neon-magenta mt-4"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              DECISIONING
            </motion.span>
          </motion.h1>

          {/* Glowing subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-cyan-200 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          >
            <span className="text-cyan-400 font-bold">Approve faster.</span>{" "}
            <span className="text-magenta-400 font-bold">Default less.</span>{" "}
            <span className="text-yellow-400 font-bold">Scale infinitely.</span>
            <br />
            <span className="text-slate-400">Machine learning that evolves with every decision.</span>
          </motion.p>

          {/* WILD CTAs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: [0, -2, 2, 0] }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 via-purple-500 to-magenta-500 hover:from-cyan-600 hover:via-purple-600 hover:to-magenta-600 text-white px-12 py-8 text-xl font-black rounded-full animate-pulse-glow border-2 border-white/20 group relative overflow-hidden"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <span className="relative z-10 flex items-center gap-3">
                  ENTER THE FUTURE
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="glass-strong border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/20 px-12 py-8 text-xl font-bold rounded-full backdrop-blur-xl"
              >
                WITNESS THE DEMO
              </Button>
            </motion.div>
          </motion.div>

          {/* Animated trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-20 flex flex-wrap justify-center gap-8 text-sm"
          >
            {["SOC 2 TYPE II", "GDPR COMPLIANT", "ISO 27001", "BANK-GRADE ENCRYPTION"].map((badge, i) => (
              <motion.div
                key={badge}
                className="flex items-center gap-2 px-4 py-2 glass rounded-full border border-cyan-400/30"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-cyan-400 font-mono text-xs">{badge}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
