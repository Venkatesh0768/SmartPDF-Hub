"use client";

import { motion } from "framer-motion";
import { UploadCloud, BrainCog, DownloadCloud, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    icon: UploadCloud,
    title: "Upload PDF",
    description: "Drag & drop your document or browse from your device. Supports any PDF format up to 50MB.",
    color: "from-blue-500 to-blue-600",
    step: "01"
  },
  {
    icon: BrainCog,
    title: "AI Analysis",
    description: "Our advanced AI model processes, analyzes, and extracts key insights from your document instantly.",
    color: "from-purple-500 to-purple-600", 
    step: "02"
  },
  {
    icon: DownloadCloud,
    title: "Get Summary",
    description: "Receive a beautifully formatted, clear, and actionable summary ready to use or share.",
    color: "from-green-500 to-green-600",
    step: "03"
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-100/30 to-blue-100/30 dark:from-purple-900/10 dark:to-blue-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            <BrainCog className="w-4 h-4 mr-2" />
            Simple Process
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            How{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              SmartPDF AI
            </span>{" "}
            works
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
            Transform any PDF into an easy-to-digest summary in three simple steps. 
            No technical knowledge required.
          </p>
        </div>

        <div className="relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="flex justify-between items-center px-32">
              <ArrowRight className="w-8 h-8 text-gray-300 dark:text-gray-600" />
              <ArrowRight className="w-8 h-8 text-gray-300 dark:text-gray-600" />
            </div>
          </div>

          <div className="grid gap-12 lg:gap-8 md:grid-cols-3">
            {steps.map(({ icon: Icon, title, description, color, step }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="relative text-center"
              >
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-600 dark:text-gray-400">{step}</span>
                </div>

                {/* Icon container */}
                <div className="relative mx-auto mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${color} p-0.5 shadow-lg`}>
                    <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white dark:bg-slate-800">
                      <Icon className="w-10 h-10 text-gray-700 dark:text-gray-300" />
                    </div>
                  </div>
                  
                  {/* Glow effect */}
                  <div className={`absolute inset-0 w-20 h-20 rounded-2xl bg-gradient-to-r ${color} opacity-20 blur-xl`} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm mx-auto">
                  {description}
                </p>

                {/* Mobile arrow */}
                {i < steps.length - 1 && (
                  <div className="md:hidden flex justify-center mt-8">
                    <ArrowRight className="w-6 h-6 text-gray-300 dark:text-gray-600 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Ready to try it yourself?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Free to start</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>No signup required</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Instant results</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}