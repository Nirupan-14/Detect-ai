"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Button() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <section className="text-center my-24 p-12 bg-gradient-to-r from-[#2E90FA]/10 to-[#4F46E5]/10 rounded-3xl border border-[#2E90FA]/20 backdrop-blur-sm">
        <motion.h3
          className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#2E90FA] to-[#4F46E5] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Ready to Verify Digital Authenticity?
        </motion.h3>
        <motion.p
          className="text-[#B0B0B0] text-lg mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Experience our cutting-edge AI detection technology and ensure the authenticity of your digital content.
        </motion.p>
        <Link href="/detect">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#2E90FA] to-[#4F46E5] text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-[#2E90FA]/30 hover:shadow-[#2E90FA]/50 transition-all duration-300"
          >
            Try Detect AI Now
          </motion.button>
        </Link>
      </section>
    </motion.div>
  );
}
