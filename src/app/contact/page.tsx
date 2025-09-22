"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden text-gray-900 dark:text-gray-100">
      {/* ✅ Background gradient + coding wallpaper */}
      <div className="absolute inset-0">
        <img
          src="/wp11657076.jpg"
          alt="Coding Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 via-blue-600/40 to-pink-600/40 mix-blend-overlay dark:mix-blend-multiply"></div>
      </div>

      {/* ✅ Page Content */}
      <div className="relative z-10 w-full max-w-7xl px-6 py-20 space-y-20">
        {/* 🔹 Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
            Let’s Build Something Great 🚀
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Have a project idea, a collaboration, or just want to say hi? I’d
            love to hear from you! Fill out the form or connect through my
            socials.
          </p>
        </motion.div>

        {/* 🔹 Main Contact Section */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT - Info */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white/70 dark:bg-gray-800/50 p-10 rounded-2xl shadow-2xl backdrop-blur-xl border border-white/20"
          >
            <h2 className="text-3xl font-bold mb-6">📞 Get in Touch</h2>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Whether you’re looking for web development, UI/UX design, or just
              want to brainstorm ideas, I’m here to help.
            </p>
            <ul className="space-y-4 text-gray-800 dark:text-gray-200">
              <li className="flex items-center gap-3">
                <span className="text-2xl">📧</span>
                <span>hasiruamarasooriya1234@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">📱</span>
                <span>+94 77 850 0998</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <span>Sri Lanka</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="https://hasiruamarasooriya.netlify.app/" target="_blank">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  🌐 Portfolio
                </Button>
              </a>
              <a
                href="https://linkedin.com/in/hasiru-amarasooriya-aaa565221"
                target="_blank"
              >
                <Button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white">
                  💼 LinkedIn
                </Button>
              </a>
              <a href="https://github.com/HasiruAmarasooriya" target="_blank">
                <Button className="bg-gradient-to-r from-green-500 to-teal-500 text-white">
                  🐙 GitHub
                </Button>
              </a>
            </div>
          </motion.div>

          {/* RIGHT - Form */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white/70 dark:bg-gray-800/50 p-10 rounded-2xl shadow-2xl backdrop-blur-xl border border-white/20"
          >
            <h2 className="text-2xl font-semibold mb-6">💬 Send a Message</h2>
            <form className="space-y-4">
              <Input
                placeholder="Your Name"
                className="bg-white/40 dark:bg-white/10 border-none"
              />
              <Input
                placeholder="Your Email"
                type="email"
                className="bg-white/40 dark:bg-white/10 border-none"
              />
              <Textarea
                placeholder="Your Message"
                className="bg-white/40 dark:bg-white/10 border-none"
              />
              <Button className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
                🚀 Send Message
              </Button>
            </form>
          </motion.div>
        </div>

        {/* 🔹 Extra Section: Map */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="rounded-2xl overflow-hidden shadow-2xl border border-white/20"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63316.17144930251!2d79.81500570763306!3d6.9349969348131815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2591748b3b9d1%3A0xa6a556843f27c1d7!2sColombo!5e0!3m2!1sen!2slk!4v1701600000000!5m2!1sen!2slk"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>

        {/* 🔹 Footer / Socials */}
        <div className="text-center space-y-4">
          <p className="text-gray-300">
            🌟 Let’s connect and create something amazing together!
          </p>
          <div className="flex justify-center gap-6 text-2xl">
            <a href="https://facebook.com/hasiru.amarasena" className="hover:text-blue-500">
              <img
                src="/facebook.png"
                alt="facebook"
                className="w-6 h-6 object-cover"
              ></img>
            </a>
            <a href="https://twitter.com" className="hover:text-sky-400">
              <img
                src="/twitter.png"
                alt="twitter" 
                className="w-6 h-6 object-cover"
              ></img>
            </a>
            <a href="https://instagram.com/hasiru_amarasooriya" className="hover:text-pink-500">
              <img
                src="/instagram.png"
                alt="instagram"
                className="w-6 h-6 object-cover"
              ></img>
            </a>
            <a href="https://linkedin.com/in/hasiru-amarasooriya-aaa565221" className="hover:text-blue-700">
              <img
                src="/linkedin.png"
                alt="linkedin"
                className="w-6 h-6 object-cover"
              ></img>
            </a>

            <a href="https://github.com/HasiruAmarasooriya" className="hover:text-blue-700">
              <img
                src="/github.png"
                alt="linkedin"
                className="w-6 h-6 object-cover"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
