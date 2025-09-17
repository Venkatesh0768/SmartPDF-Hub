"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 py-24">
      {/* Background elements */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
      </div>
      
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center mb-6"
        >
          <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-blue-200/50 px-4 py-2 rounded-full text-blue-700 shadow-lg dark:bg-slate-800/60 dark:border-blue-800/30 dark:text-blue-300">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Start your free trial</span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-bold md:text-5xl text-gray-900 dark:text-white mb-6"
        >
          Ready to save hours of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            reading time?
          </span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-300 mb-8"
        >
          Join thousands of professionals who trust SmartPDF AI to transform 
          lengthy documents into clear, actionable insights.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button 
            asChild 
            size="lg"
            className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Link href="/summarizer" className="flex items-center gap-2">
              Get started free
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
          
          <p className="text-sm text-gray-500 dark:text-gray-400">
            No credit card required
          </p>
        </motion.div>
      </div>
    </section>
  );
}