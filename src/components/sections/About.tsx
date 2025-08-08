'use client';

import React from 'react';
import Spline from '@splinetool/react-spline';
import Image from 'next/image';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const About: React.FC = () => {
  // For 3D rotation on mouse move
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Rotation degrees mapping
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  // Mouse move handler for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left - rect.width / 2;
    const py = e.clientY - rect.top - rect.height / 2;
    x.set(px);
    y.set(py);
  };

  // Reset rotation on mouse leave
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-20 min-h-screen bg-background text-foreground"
    >
      {/* LEFT — 3D Spline */}
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        className="w-full lg:w-1/2 flex justify-center items-center"
      >
        <div className="w-[360px] h-[360px] sm:w-[600px] sm:h-[600px] md:w-[700px] md:h-[700px] xl:w-[800px] xl:h-[800px] overflow-hidden">
          <Spline
            scene="https://prod.spline.design/mPIoFGIbkV-32SMZ/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* RIGHT — Text & Image */}
      <div
        data-aos="fade-left"
        data-aos-duration="1500"
        className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mt-10 lg:mt-0"
      >
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 tracking-widest text-primary">
          ABOUT ME
        </h2>

        {/* PROFILE IMAGE + 3D Animation + Radiant Glow */}
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, perspective: 800 }}
          className="relative mb-10 cursor-pointer w-52 h-52 sm:w-60 sm:h-60 rounded-full"
        >
          {/* Radiant colorful glowing rings */}
          <div className="absolute inset-0 rounded-full pointer-events-none z-[-2]">
            <div className="w-full h-full rounded-full bg-gradient-radial from-purple-400 via-pink-500 to-yellow-400 opacity-75 animate-spin-slow blur-3xl" />
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-pink-600 via-red-600 to-yellow-500 opacity-50 blur-xl animate-spin-slow-reverse" />
          </div>

          {/* Glowing Gradient Circle behind image */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-primary via-accent to-white blur-3xl opacity-40 z-[-1]" />

          {/* Profile Image */}
          <Image
            src="/my-image.jpg" // Make sure this image exists in public/
            alt="Hasiru Amarasooriya"
            width={240}
            height={240}
            className="w-full h-full rounded-full object-cover shadow-2xl border-4 border-border"
            priority
          />
        </motion.div>

        {/* Bio Paragraphs */}
        <p className="text-muted-foreground text-base sm:text-lg max-w-xl leading-relaxed">
          I'm <span className="text-foreground font-semibold">Hasiru Amarasooriya</span>, a
          <strong> Full Stack Developer</strong> and <strong>UI/UX Designer</strong> specializing in crafting beautiful, scalable, and high-performance web and mobile applications.
        </p>

        <p className="mt-4 text-muted-foreground text-base sm:text-lg max-w-xl leading-relaxed">
          My expertise spans React, Next.js, Node.js, MongoDB, and modern design principles, enabling me to deliver end-to-end solutions that prioritize user experience and business goals.
        </p>

        <p className="mt-4 text-muted-foreground text-base sm:text-lg max-w-xl leading-relaxed">
          I thrive in collaborative environments and continuously seek to learn emerging technologies such as GraphQL, TypeScript, and Cloud services to stay ahead in this fast-evolving tech landscape.
        </p>

        {/* Skills List */}
        <ul className="mt-6 max-w-xl grid grid-cols-2 sm:grid-cols-3 gap-3 text-primary font-medium">
          <li>React & Next.js</li>
          <li>Node.js & Express</li>
          <li>MongoDB & Mongoose</li>
          <li>TypeScript & JavaScript</li>
          <li>UI/UX Design (Figma, Adobe XD)</li>
          <li>REST APIs & GraphQL</li>
          <li>Responsive & Mobile-first Design</li>
          <li>Version Control (Git, GitHub)</li>
          <li>Cloud (AWS, Vercel)</li>
        </ul>

        {/* Download CV Button */}
        <a
          href="/Hasiru-CV.pdf"
          download
          className="mt-10 inline-block bg-primary text-primary-foreground hover:bg-black hover:text-white px-8 py-3 rounded-full font-semibold text-base transition-all duration-300 shadow-lg"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default About;
