"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Zap, Brain, BarChart3, Shield } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Real-time Decisioning",
    description: "Get instant credit decisions with sub-second API response times. Process thousands of applications simultaneously without breaking a sweat.",
    gradient: "from-yellow-500/20 to-orange-500/20",
    iconColor: "text-yellow-400",
  },
  {
    icon: Brain,
    title: "ML Model Management",
    description: "Train, deploy, and monitor custom machine learning models tailored to your risk appetite. Version control and A/B testing built-in.",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
  },
  {
    icon: BarChart3,
    title: "Risk Analytics Dashboard",
    description: "Visualize your portfolio health in real-time. Track default rates, approval metrics, and model performance with beautiful dashboards.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "Stay compliant with built-in explainability, audit trails, and regulatory reporting. We handle the complexity so you can focus on growth.",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-400",
  },
];

export function Features() {
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
              Everything you need to
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              make smarter decisions
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Powerful features that help you approve more good customers and reject more bad ones
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group relative p-8 bg-slate-900/50 border-slate-800 hover:border-blue-500/50 transition-all duration-300 overflow-hidden h-full">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="mb-6">
                      <div className="inline-flex p-3 rounded-xl bg-slate-800/50 group-hover:bg-slate-800 transition-colors">
                        <Icon className={`w-8 h-8 ${feature.iconColor}`} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
