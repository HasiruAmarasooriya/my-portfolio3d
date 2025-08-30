'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const EducationWorkSplit: React.FC = () => {
  const education = [
    {
      title: 'BSc. (Hons) in IT',
      subtitle: 'SLIIT - Information Technology',
      date: 'Jan 2020 - Jan 2024',
      icon: '/icons/education.svg',
    },
    {
      title: 'G.C.E Advance Level',
      subtitle: "St. Thomas' Boys' College Matale",
      date: '2018',
      icon: '/icons/education.svg',
    },
    {
      title: 'G.C.E Ordinary Level',
      subtitle: "St. Thomas' Boys' College Matale",
      date: '2015',
      icon: '/icons/education.svg',
    },
    {
      title: 'Sports',
      subtitle: 'Cricket, Volleyball',
      date: '2009 - 2019',
      icon: '/icons/sports.svg',
    },
    {
      title: 'Certifications',
      subtitle:
        'HTML, Java, JS, CSS | Sololearn, Great Learning, eAcademy.lk',
      date: '2021 - 2023',
      icon: '/icons/certificate.svg',
    },
  ];

  const work = [
    {
      title: 'Kumudu Hospital (Pvt) Ltd',
      subtitle: 'Software Engineer',
      date: '2025.02 - 2026.02 (1 year)',
      icon: '/icons/work.svg',
    },
    {
      title: 'ColtexBiz (Pvt) Ltd',
      subtitle: 'Software Engineer',
      date: '2024.08 - 2025.01 (6 months)',
      icon: '/icons/work.svg',
    },
    {
      title: 'Donext',
      subtitle: 'Software Engineer',
      date: '2024.01.02 - 2024.12.02 (1 year)',
      icon: '/icons/work.svg',
    },
    {
      title: 'Fintechnology Asia Pacific (Pvt) Ltd',
      subtitle: 'Software Engineer Intern',
      date: '2023.03.10 - 2023.09.10 (6 months)',
      icon: '/icons/work.svg',
    },
  ];

  return (
    <section className="relative min-h-screen px-6 lg:px-20 py-20 overflow-hidden">
      
      <div className="relative z-10">
        <h2 className="text-5xl font-extrabold text-center mb-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-purple-600 bg-clip-text text-transparent">
          My Journey
        </h2>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-16">
          Education & Work Experience
        </p>

        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row justify-center">
          {/* 🌟 Vertical glowing line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-yellow-400 animate-pulse rounded-full"></div>

          {/* 🎓 Education */}
          <div className="md:w-1/2 flex flex-col items-end gap-20 pr-8">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative w-full max-w-sm"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 8, rotateX: 4 }}
                  className="bg-white/80 dark:bg-gray-900/80 p-6 rounded-3xl shadow-xl border border-blue-300 dark:border-yellow-500 backdrop-blur-lg relative hover:shadow-yellow-400/50 transition"
                >
                  {/* Floating icon */}
                  <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-tr from-purple-400 via-pink-500 to-yellow-400 flex items-center justify-center shadow-lg animate-spin-slow">
                    <Image src={item.icon} alt={item.title} width={30} height={30} />
                  </div>
                  <h3 className="text-lg font-semibold text-purple-700 dark:text-yellow-300 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    {item.subtitle}
                  </p>
                  <span className="flex items-center gap-2 text-sm text-yellow-600 dark:text-yellow-400">
                    📅 {item.date}
                  </span>
                </motion.div>

                {/* Connector dot */}
                <div className="absolute -right-5 top-1/2 transform -translate-y-1/2 bg-pink-500 w-5 h-5 rounded-full shadow-lg animate-ping"></div>
              </motion.div>
            ))}
          </div>

          {/* 💼 Work */}
          <div className="md:w-1/2 flex flex-col items-start gap-20 pl-8 mt-12 md:mt-0">
            {work.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative w-full max-w-sm"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: -8, rotateX: 4 }}
                  className="bg-white/70 dark:bg-gray-800/70 p-6 rounded-3xl shadow-xl border border-green-700 backdrop-blur-lg relative hover:shadow-green-400/50 transition"
                >
                  {/* Floating icon */}
                  <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-tr from-green-400 via-blue-500 to-indigo-400 flex items-center justify-center shadow-lg animate-spin-slow-reverse">
                    <Image src={item.icon} alt={item.title} width={30} height={30} />
                  </div>
                  <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    {item.subtitle}
                  </p>
                  <span className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                    📅 {item.date}
                  </span>
                </motion.div>

                {/* Connector dot */}
                <div className="absolute -left-5 top-1/2 transform -translate-y-1/2 bg-green-400 w-5 h-5 rounded-full shadow-lg animate-ping"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationWorkSplit;
