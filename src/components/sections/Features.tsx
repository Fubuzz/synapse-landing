"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Zap, Brain, BarChart3, Shield } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Zap,
    title: "Quantum Decisioning",
    description: "Sub-millisecond credit decisions powered by neural quantum processors. Reality bends to your risk models.",
    gradient: "from-yellow-400 via-orange-500 to-red-600",
    glowColor: "rgba(255, 200, 0, 0.6)",
  },
  {
    icon: Brain,
    title: "Neural Evolution",
    description: "Self-improving AI that learns from every transaction. Your models get smarter while you sleep.",
    gradient: "from-purple-400 via-pink-500 to-red-500",
    glowColor: "rgba(200, 0, 255, 0.6)",
  },
  {
    icon: BarChart3,
    title: "Holographic Analytics",
    description: "Visualize risk in 4D. Interactive dashboards that predict the future before it happens.",
    gradient: "from-cyan-400 via-blue-500 to-purple-600",
    glowColor: "rgba(0, 200, 255, 0.6)",
  },
  {
    icon: Shield,
    title: "Quantum Encryption",
    description: "Bank-grade security meets alien technology. Compliance so advanced, regulators applaud.",
    gradient: "from-green-400 via-emerald-500 to-cyan-600",
    glowColor: "rgba(0, 255, 150, 0.6)",
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="perspective-container"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          x.set(0);
          y.set(0);
        }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="transform-3d"
      >
        <Card className="relative p-8 bg-black/40 border-2 border-cyan-400/30 overflow-hidden h-full backdrop-blur-xl group">
          {/* Animated gradient background */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
            animate={isHovered ? {
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            } : {}}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ backgroundSize: "200% 200%" }}
          />

          {/* Holographic shine effect */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${(x.get() + 0.5) * 100}% ${(y.get() + 0.5) * 100}%, rgba(255,255,255,0.2), transparent 50%)`,
            }}
          />

          {/* Scan lines */}
          <div className="absolute inset-0 opacity-30 pointer-events-none"
               style={{
                 backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,255,0.1) 2px, rgba(0,255,255,0.1) 4px)",
               }}
          />

          {/* Content */}
          <div className="relative z-10">
            <motion.div
              className="mb-6"
              animate={isHovered ? {
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              } : {}}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className={`inline-flex p-4 rounded-2xl glass-strong relative`}
                animate={{
                  boxShadow: isHovered
                    ? [`0 0 20px ${feature.glowColor}`, `0 0 40px ${feature.glowColor}`, `0 0 20px ${feature.glowColor}`]
                    : "0 0 0px rgba(0,0,0,0)",
                }}
                transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
              >
                <Icon className={`w-10 h-10 bg-gradient-to-br ${feature.gradient} bg-clip-text text-transparent`} 
                      style={{ filter: `drop-shadow(0 0 10px ${feature.glowColor})` }} />
              </motion.div>
            </motion.div>

            <motion.h3
              className="text-3xl font-black mb-4 text-holographic"
              animate={isHovered ? {
                scale: [1, 1.05, 1],
              } : {}}
              transition={{ duration: 0.4 }}
            >
              {feature.title}
            </motion.h3>

            <p className="text-cyan-100/80 leading-relaxed text-lg font-light">
              {feature.description}
            </p>

            {/* Particle dots */}
            <div className="absolute top-4 right-4 flex gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`w-2 h-2 rounded-full bg-gradient-to-br ${feature.gradient}`}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Glow effect on hover */}
          <motion.div
            className={`absolute -bottom-full -right-full w-96 h-96 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
            style={{ background: feature.glowColor }}
          />
        </Card>
      </motion.div>
    </motion.div>
  );
}

export function Features() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black">
      {/* Animated background */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-cyan-900/20"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{ backgroundSize: "400% 400%" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.h2
            className="text-6xl md:text-7xl font-black mb-6 text-holographic"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            CAPABILITIES BEYOND
            <br />
            <span className="neon-cyan">HUMAN COMPREHENSION</span>
          </motion.h2>
          <p className="text-2xl text-cyan-200/70 max-w-3xl mx-auto font-light">
            Technology so advanced, it feels like magic from the future
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
