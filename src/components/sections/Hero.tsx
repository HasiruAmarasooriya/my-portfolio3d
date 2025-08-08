"use client";

import React from "react";
import Link from "next/link";
import Spline from "@splinetool/react-spline";
import { motion, type Variants, type Easing } from "framer-motion";
import {
  FaCertificate,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Separator } from "@/components/ui/separator";
import { PiDiamondsFourDuotone } from "react-icons/pi"; // Diamond Icon

const customEase: Easing = [0.42, 0, 0.58, 1];
const splineEase: Easing = [0.16, 1, 0.3, 1];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: customEase } },
};
const splineVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5, ease: splineEase } },
};

const Hero = () => {
  const dockItems = [
    { title: "Certificates", icon: <FaCertificate size={24} />, href: "/certificates" },
    { title: "LinkedIn", icon: <FaLinkedin size={20} />, href: "https://linkedin.com/in/hasiru-amarasooriya-aaa565221", isExternal: true },
    { title: "Github", icon: <FaGithub size={20} />, href: "https://github.com/HasiruAmarasooriya", isExternal: true },
    { title: "Facebook", icon: <FaFacebook size={20} />, href: "https://facebook.com/hasiru.amarasena", isExternal: true },
    { title: "Instagram", icon: <FaInstagram size={20} />, href: "https://instagram.com/hasiru_amarasooriya", isExternal: true },
    { title: "Contact Me", icon: <FaPhone size={20} />, href: "/contact" },
    { title: "Youtube", icon: <FaYoutube size={20} />, href: "https://www.youtube.com/channel/UCwIP388C60i9a5zET3jarYQ", isExternal: true },
  ];

  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full min-h-screen overflow-hidden px-4 sm:px-8 bg-background text-foreground">
      {/* LEFT */}
      <motion.div
        className="w-full max-w-xl z-10 mt-24 lg:mt-0 text-center lg:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div className="inline-block p-1 rounded-full mb-6 shadow-lg shadow-[rgba(255,215,0,0.4)]" variants={itemVariants}>
          <div className="bg-background border border-primary px-4 py-1.5 rounded-full flex items-center justify-center gap-2 text-primary text-xs sm:text-sm font-medium">
            <PiDiamondsFourDuotone className="w-4 h-4 text-yellow-500 dark:text-yellow-400" />
            <span>INTRODUCING</span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight my-4" variants={itemVariants}>
          HASIRU<br />AMARASOORIYA
        </motion.h1>

        {/* Subtitle */}
        <motion.p className="text-base sm:text-lg text-muted-foreground max-w-md mx-auto lg:mx-0" variants={itemVariants}>
          Full Stack Developer | UI/UX Designer | Mobile App Developer
        </motion.p>

        <motion.div variants={itemVariants} className="my-8">
          <Separator />
        </motion.div>

        {/* Buttons */}
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" variants={itemVariants}>
          <Link href="/projects" className="bg-primary text-background font-semibold px-8 py-3 rounded-lg shadow-lg shadow-[rgba(255,215,0,0.3)] hover:scale-105 transition-transform duration-300">
            View My Work
          </Link>
          <Link href="/contact" className="bg-transparent border border-foreground text-foreground font-semibold px-8 py-3 rounded-lg hover:bg-foreground hover:text-background transition-all duration-300">
            Get in Touch
          </Link>
        </motion.div>

        {/* Floating Dock */}
        <motion.div className="mt-10 flex justify-center lg:justify-start" variants={itemVariants}>
          <FloatingDock
            items={dockItems}
          />
        </motion.div>
      </motion.div>

      {/* RIGHT - Spline */}
      <div className="relative w-full lg:w-1/2 h-[900px] md:h-[1000px] lg:h-screen z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[rgba(255,215,0,0.1)] via-[rgba(212,175,55,0.1)] to-transparent blur-3xl opacity-50 z-0 pointer-events-none" />
        <motion.div
          className="relative w-full h-full z-10 scale-[1.25]"
          variants={splineVariants}
          initial="hidden"
          animate="visible"
        >
          <Spline className="!w-full !h-full" scene="https://prod.spline.design/BpFqxuXwsfWRX-9z/scene.splinecode" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
