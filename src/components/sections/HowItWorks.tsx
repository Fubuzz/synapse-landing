"use client";

import { motion } from "framer-motion";
import { Database, Brain, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Database,
    title: "Connect Your Data",
    description: "Integrate with your existing systems via API. We support all major data sources and formats.",
    color: "blue",
  },
  {
    icon: Brain,
    title: "Train ML Models",
    description: "Our AI learns from your historical data to build custom decisioning models that match your risk appetite.",
    color: "purple",
  },
  {
    icon: Rocket,
    title: "Deploy Decisions",
    description: "Go live in minutes. Make real-time credit decisions at scale with instant explainability and audit trails.",
    color: "cyan",
  },
];

export function HowItWorks() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              How it works
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Get up and running in three simple steps
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden md:block absolute top-24 left-1/2 -translate-x-1/2 w-full max-w-4xl">
            <svg className="w-full h-2" viewBox="0 0 1000 2" preserveAspectRatio="none">
              <motion.path
                d="M0,1 L1000,1"
                stroke="url(#gradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="8 8"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.5" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const colorClasses = {
                blue: "from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-400",
                purple: "from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-400",
                cyan: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-400",
              }[step.color];

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="text-center">
                    {/* Step number and icon */}
                    <div className="mb-6 relative inline-block">
                      <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${colorClasses} border flex items-center justify-center relative z-10`}>
                        <Icon className="w-12 h-12" />
                      </div>
                      {/* Glow */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colorClasses} blur-xl opacity-50`} />
                      
                      {/* Step number badge */}
                      <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center text-sm font-bold text-slate-400 z-20">
                        {index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow connector - mobile */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center my-8">
                      <ArrowRight className="w-6 h-6 text-slate-600" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
