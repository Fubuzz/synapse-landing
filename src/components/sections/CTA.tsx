"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { useState } from "react";

export function CTA() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <section 
      className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }}
    >
      {/* INSANE animated background */}
      <motion.div
        className="absolute inset-0 opacity-60"
        animate={{
          background: [
            "radial-gradient(circle at 50% 50%, rgba(0,255,255,0.4) 0%, rgba(255,0,255,0.3) 50%, transparent 100%)",
            "radial-gradient(circle at 30% 70%, rgba(255,0,255,0.4) 0%, rgba(255,255,0,0.3) 50%, transparent 100%)",
            "radial-gradient(circle at 70% 30%, rgba(255,255,0,0.4) 0%, rgba(0,255,255,0.3) 50%, transparent 100%)",
            "radial-gradient(circle at 50% 50%, rgba(0,255,255,0.4) 0%, rgba(255,0,255,0.3) 50%, transparent 100%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Mouse-following spotlight */}
      <motion.div
        className="absolute inset-0 opacity-40 pointer-events-none"
        animate={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.3) 0%, transparent 50%)`,
        }}
      />

      {/* Morphing blobs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-50 animate-morph"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-magenta-500 to-purple-500 rounded-full blur-3xl opacity-50 animate-morph"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Grid overlay */}
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 1 }}
          className="text-center"
        >
          {/* Glowing badge */}
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-strong border-2 border-cyan-400/50 mb-12"
            animate={{
              boxShadow: [
                "0 0 30px rgba(0, 255, 255, 0.5)",
                "0 0 60px rgba(255, 0, 255, 0.5)",
                "0 0 30px rgba(0, 255, 255, 0.5)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles className="w-6 h-6 text-cyan-400 animate-spin-slow" />
            <span className="text-lg font-black text-holographic tracking-wider">
              JOIN THE EVOLUTION
            </span>
            <Zap className="w-6 h-6 text-magenta-400" />
          </motion.div>

          {/* MASSIVE headline */}
          <motion.h2
            className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="block neon-cyan mb-4">
              TRANSCEND
            </span>
            <span className="block neon-magenta mb-4">
              REALITY
            </span>
            <span className="block text-holographic">
              TODAY
            </span>
          </motion.h2>

          <motion.p
            className="text-2xl md:text-3xl text-cyan-200 mb-16 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join the <span className="text-cyan-400 font-bold">quantum elite</span>. 
            Transform your credit decisioning into an{" "}
            <span className="text-magenta-400 font-bold">interdimensional experience</span>.
          </motion.p>

          {/* INSANE CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.15, rotate: [0, -3, 3, 0] }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-cyan-500 via-magenta-500 to-yellow-500 hover:from-cyan-600 hover:via-magenta-600 hover:to-yellow-600 text-black px-16 py-10 text-2xl font-black rounded-full border-4 border-white/50 group overflow-hidden"
              >
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  animate={{
                    x: ["-200%", "200%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                
                {/* Pulsing glow */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{
                    boxShadow: [
                      "0 0 40px rgba(0,255,255,0.8)",
                      "0 0 80px rgba(255,0,255,0.8)",
                      "0 0 40px rgba(0,255,255,0.8)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <span className="relative z-10 flex items-center gap-4">
                  <Zap className="w-8 h-8" />
                  ACTIVATE NOW
                  <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                </span>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="glass-strong border-4 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/20 px-16 py-10 text-2xl font-black rounded-full backdrop-blur-2xl"
              >
                WITNESS DEMO
              </Button>
            </motion.div>
          </motion.div>

          {/* Animated benefits */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-20 flex flex-wrap justify-center gap-6 text-base"
          >
            {[
              "⚡ INSTANT ACTIVATION",
              "🚀 ZERO FRICTION",
              "♾️ INFINITE SCALE",
              "🔮 QUANTUM SUPPORT",
            ].map((item, i) => (
              <motion.div
                key={item}
                className="px-6 py-3 glass-strong rounded-full border border-cyan-400/30 font-mono"
                animate={{
                  y: [0, -10, 0],
                  boxShadow: [
                    "0 0 10px rgba(0,255,255,0.2)",
                    "0 0 20px rgba(0,255,255,0.4)",
                    "0 0 10px rgba(0,255,255,0.2)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              >
                <span className="text-cyan-300 font-bold">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
