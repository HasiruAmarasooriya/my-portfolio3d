'use client';

import React from 'react';
import Spline from '@splinetool/react-spline';
import Image from 'next/image';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Code, Cpu, Globe, Smartphone } from 'lucide-react';

const About: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left - rect.width / 2;
    const py = e.clientY - rect.top - rect.height / 2;
    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-20 min-h-screen bg-background text-foreground"
    >
      {/* LEFT — 3D Spline (Increased Size) */}
      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        className="w-full lg:w-1/2 flex justify-center items-center"
      >
        <div className="w-[480px] h-[480px] sm:w-[700px] sm:h-[700px] md:w-[800px] md:h-[800px] xl:w-[900px] xl:h-[900px] overflow-hidden">
          <Spline
            scene="https://prod.spline.design/gcV0eOmjcwXlxhol/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* RIGHT — Info & Profile */}
      <div
        data-aos="fade-left"
        data-aos-duration="1500"
        className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mt-10 lg:mt-0"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 tracking-widest text-primary">
          ABOUT ME
        </h2>

        {/* Profile Image with 3D Glow + Floating Animation */}
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, perspective: 900 }}
          className="relative mb-10 cursor-pointer w-60 h-60 sm:w-72 sm:h-72 rounded-full"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }}
        >
          {/* Outer Glow */}
          <div className="absolute inset-0 rounded-full pointer-events-none z-[-2]">
            <div className="w-full h-full rounded-full bg-gradient-radial from-purple-400 via-pink-500 to-yellow-400 opacity-80 animate-spin-slow blur-3xl" />
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-pink-600 via-red-600 to-yellow-500 opacity-60 blur-xl animate-spin-slow-reverse" />
          </div>

          {/* Inner Glow */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-primary via-accent to-white blur-3xl opacity-50 z-[-1]" />

          {/* Profile Image */}
          <Image
            src="/2456.jpg"
            alt="Hasiru Amarasooriya"
            width={280}
            height={280}
            className="w-full h-full rounded-full object-cover shadow-2xl border-4 border-border"
            priority
          />
        </motion.div>

        {/* PROFILE BIO */}
        <p className="text-muted-foreground text-base sm:text-lg max-w-xl leading-relaxed">
          👨 <span className="text-foreground font-semibold">Hasiru Amarasooriya</span> — motivated software engineering student passionate about developing innovative solutions with strong programming foundations and hands-on project experience.
        </p>
        <p className="mt-4 text-muted-foreground text-base sm:text-lg max-w-xl leading-relaxed">
          I thrive in collaborative environments, learning emerging technologies such as React, Next.js, Node.js, MongoDB, GraphQL, TypeScript, and Cloud services.
        </p>

        {/* INTEREST AREAS */}
        <div className="mt-8 w-full max-w-xl">
          <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
            ↗️ Interested Areas
          </h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-muted-foreground font-medium">
            <li className="flex items-center gap-2"><Code size={18} /> Full Stack Developer</li>
            <li className="flex items-center gap-2"><Code size={18} /> Frontend Developer</li>
            <li className="flex items-center gap-2"><Code size={18} /> Backend Developer</li>
            <li className="flex items-center gap-2"><Cpu size={18} /> UI/UX Designer</li>
            <li className="flex items-center gap-2"><Smartphone size={18} /> Mobile App Developer</li>
            <li className="flex items-center gap-2"><Globe size={18} /> Web Technologies</li>
          </ul>
        </div>

        {/* HOBBIES */}
        <div className="mt-8 w-full max-w-xl">
          <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
            🏅 Hobbies
          </h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-muted-foreground font-medium">
            <li>Cricket</li>
            <li>Volleyball</li>
            <li>Dancing</li>
            <li>Carrom</li>
            <li>Playing Games</li>
            <li>Football</li>
            <li>Athletics</li>
            <li>Travelling</li>
            <li>Coding Challenges</li>
            <li>Photography</li>
          </ul>
        </div>

        {/* TECHNICAL SKILLS 3D Cards */}
        <div className="mt-8 w-full max-w-xl">
          <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
            💻 Technical Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { name: 'React', icon: '/icons/react.svg' },
              { name: 'Next.js', icon: '/icons/nextjs.svg' },
              { name: 'TailwindCSS', icon: '/icons/tailwind.svg' },
              { name: 'Node.js', icon: '/icons/nodejs.svg' },
              { name: 'MongoDB', icon: '/icons/mongodb.svg' },
              { name: 'TypeScript', icon: '/icons/typescript.svg' },
            ].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.15, rotateY: 12, rotateX: 6 }}
                className="bg-white/10 text-white text-sm font-medium px-4 py-3 rounded-xl shadow-md text-center cursor-pointer backdrop-blur-md border border-white/20 flex flex-col items-center gap-2 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50"
              >
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={40}
                  height={40}
                  className="object-contain drop-shadow-lg"
                />
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Download CV */}
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
