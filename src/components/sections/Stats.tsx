"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 500, suffix: "M+", label: "Decisions Processed", color: "from-blue-400 to-cyan-400" },
  { value: 99.9, suffix: "%", label: "Platform Uptime", color: "from-green-400 to-emerald-400" },
  { value: 40, suffix: "%", label: "Faster Approvals", color: "from-purple-400 to-pink-400" },
  { value: 60, suffix: "%", label: "Fewer Defaults", color: "from-orange-400 to-red-400" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
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

export function Stats() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Trusted by the best
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Numbers that speak for themselves
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="mb-4">
                <div className={`text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  {stat.suffix}
                </div>
              </div>
              <div className="text-slate-400 text-sm md:text-base font-medium">
                {stat.label}
              </div>
              
              {/* Glow line */}
              <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
