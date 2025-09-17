// Updated FeatureSection.tsx - Consistent with design system
"use client";

import { motion } from "framer-motion";
import { Brain, FileEdit, RefreshCw, Shield, Zap, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Brain,
    title: "AI Summarization",
    description: "Transform lengthy PDFs into clear, actionable insights using advanced AI technology.",
    color: "blue"
  },
  {
    icon: FileEdit,
    title: "Smart PDF Editor",
    description: "Find & replace text, edit content, and customize documents with precision tools.",
    color: "purple"
  },
  {
    icon: RefreshCw,
    title: "Format Converter",
    description: "Convert PDFs to Word, images, Excel, and more. Support for 20+ file formats.",
    color: "green"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process documents in seconds with optimized AI models and cloud infrastructure.",
    color: "yellow"
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Enterprise-grade security with end-to-end encryption and automatic data deletion.",
    color: "red"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Share summaries, collaborate on documents, and manage team workflows seamlessly.",
    color: "indigo"
  },
];

type ColorMap = {
  [key: string]: string;
};

const colorMap: ColorMap = {
  blue: "from-blue-500 to-blue-600",
  purple: "from-purple-500 to-purple-600", 
  green: "from-green-500 to-green-600",
  yellow: "from-yellow-500 to-orange-500",
  red: "from-red-500 to-red-600",
  indigo: "from-indigo-500 to-indigo-600"
};

export default function FeatureSection() {
  return (
    <section className="bg-white dark:bg-slate-900 py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-100/30 to-purple-100/30 dark:from-blue-900/10 dark:to-purple-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            <Zap className="w-4 h-4 mr-2" />
            Powerful Features
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Everything you need for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              PDF workflows
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
            Beyond summarization—a complete toolkit to edit, convert, and automate your document processes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Card className="group relative h-full p-8 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                {/* Gradient top border */}
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${colorMap[color]} rounded-t-lg`} />
                
                <div className="flex flex-col h-full">
                  <div className={`mb-6 w-14 h-14 rounded-2xl bg-gradient-to-r ${colorMap[color]} p-0.5`}>
                    <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white dark:bg-slate-800">
                      <Icon className="w-7 h-7 text-gray-700 dark:text-gray-300" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed flex-grow">
                    {description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 dark:text-gray-400 italic">
            Plus: merge/split documents, compress files, add watermarks, password protection, and more advanced tools.
          </p>
        </div>
      </div>
    </section>
  );
}