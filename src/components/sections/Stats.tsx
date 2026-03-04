"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 500, suffix: "M+", label: "QUANTUM DECISIONS", gradient: "from-cyan-400 via-blue-500 to-purple-600" },
  { value: 99.9, suffix: "%", label: "UPTIME SINGULARITY", gradient: "from-green-400 via-emerald-500 to-cyan-600" },
  { value: 40, suffix: "%", label: "VELOCITY BOOST", gradient: "from-purple-400 via-pink-500 to-red-500" },
  { value: 60, suffix: "%", label: "RISK ANNIHILATION", gradient: "from-orange-400 via-red-500 to-pink-600" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = latest.toFixed(suffix === "%" && value < 100 ? 1 : 0);
        }
      }),
    [springValue, suffix, value]
  );

  return <span ref={ref}>0</span>;
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{ scale: 1.1, z: 50 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      {/* Holographic card */}
      <div className="relative p-12 glass-strong border-2 border-cyan-400/30 rounded-3xl overflow-hidden">
        {/* Animated gradient background */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-20`}
          animate={isHovered ? {
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0],
          } : {}}
          transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
        />

        {/* Scan lines */}
        <div className="absolute inset-0 opacity-20"
             style={{
               backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,255,0.2) 2px, rgba(0,255,255,0.2) 4px)",
             }}
        />

        {/* Particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${stat.gradient}`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}

        {/* Number */}
        <motion.div
          className="relative z-10 mb-6"
          animate={isHovered ? {
            scale: [1, 1.1, 1],
          } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className={`text-7xl md:text-8xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent relative`}>
            <motion.div
              animate={{
                textShadow: [
                  "0 0 20px rgba(0,255,255,0.5)",
                  "0 0 40px rgba(255,0,255,0.5)",
                  "0 0 20px rgba(0,255,255,0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              {stat.suffix}
            </motion.div>
          </div>
        </motion.div>

        {/* Label */}
        <div className="relative z-10">
          <div className="text-cyan-100 text-sm md:text-base font-black tracking-widest mb-2">
            {stat.label}
          </div>
          <motion.div
            className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"
            animate={{
              scaleX: isHovered ? [0, 1] : 0,
            }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Glow effect */}
        <motion.div
          className={`absolute inset-0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none`}
          style={{
            background: `radial-gradient(circle, ${stat.gradient.split(' ')[1].replace('from-', 'rgba(')})`,
          }}
        />
      </div>

      {/* Floating ring */}
      <motion.div
        className={`absolute -inset-4 border-2 border-cyan-400/20 rounded-3xl pointer-events-none`}
        animate={isHovered ? {
          scale: [1, 1.05, 1],
          rotate: [0, 5, 0],
          opacity: [0.3, 0.6, 0.3],
        } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black">
      {/* Crazy animated background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(0,255,255,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(255,0,255,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, rgba(255,255,0,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(0,255,255,0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Floating geometric shapes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-20 h-20 border border-cyan-400/20"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 2) * 40}%`,
            rotate: i * 60,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [i * 60, i * 60 + 180, i * 60 + 360],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.h2
            className="text-6xl md:text-7xl font-black mb-6"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            style={{
              background: "linear-gradient(90deg, #00ffff 0%, #ff00ff 25%, #ffff00 50%, #00ffff 75%, #ff00ff 100%)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            METRICS FROM
            <br />
            ANOTHER DIMENSION
          </motion.h2>
          <p className="text-2xl text-cyan-200/70 max-w-3xl mx-auto font-light">
            Numbers so powerful, they warp reality
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
