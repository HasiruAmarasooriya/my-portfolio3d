"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-10 overflow-hidden text-gray-900 dark:text-gray-100">
      {/* ✅ Background coding wallpaper */}
      <div className="absolute inset-0">
        <img
          src="/wp11657076.jpg" // Coding wallpaper
          alt="Coding Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ✅ Overlay - light & dark mode balanced */}
      <div className="absolute inset-0 bg-white/40 dark:bg-black/60 backdrop-blur-sm mix-blend-multiply dark:mix-blend-normal"></div>

      {/* ✅ Contact Form */}
      <div className="relative z-10 w-full max-w-5xl grid md:grid-cols-2 gap-10">
        {/* LEFT - Info */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white/60 dark:bg-gray-800/40 p-8 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/20"
        >
          <h2 className="text-3xl font-bold mb-6">📞 Get in Touch</h2>
          <p className="mb-6 text-gray-800 dark:text-gray-200">
            I’m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <ul className="space-y-4 text-gray-800 dark:text-gray-200">
            <li className="flex items-center gap-3">
              <span className="text-xl">📧</span>
              <span>hasiruamarasooriya1234@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-xl">📱</span>
              <span>+94 77 850 0998</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-xl">📍</span>
              <span>Sri Lanka</span>
            </li>
          </ul>
          <div className="flex gap-4 mt-8">
            <a
              href="https://hasiruamarasooriya.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">🌐 Portfolio</Button>
            </a>

            <a
              href="https://linkedin.com/in/hasiru-amarasooriya-aaa565221"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">💼 LinkedIn</Button>
            </a>

            <a
              href="https://github.com/HasiruAmarasooriya"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">🐙 GitHub</Button>
            </a>
          </div>
        </motion.div>

        {/* RIGHT - Form */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white/60 dark:bg-gray-800/40 p-8 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/20 relative"
        >
          <h2 className="text-2xl font-semibold mb-6">💬 Send a Message</h2>
          <form className="space-y-4">
            <Input
              placeholder="Your Name"
              className="bg-white/30 dark:bg-white/10 border-none"
            />
            <Input
              placeholder="Your Email"
              type="email"
              className="bg-white/30 dark:bg-white/10 border-none"
            />
            <Textarea
              placeholder="Your Message"
              className="bg-white/30 dark:bg-white/10 border-none"
            />
            <Button className="w-full">🚀 Send Message</Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
