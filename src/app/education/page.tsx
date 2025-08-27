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
      date: '2009-2019',
      icon: '/icons/sports.svg',
    },
    {
      title: 'Certifications',
      subtitle: 'HTML, Java, JS, CSS | Sololearn, Great Learning, eAcademy.lk',
      date: '2021-2023',
      icon: '/icons/certificate.svg',
    },
  ];

  const work = [
    {
      title: 'Fintechnology Asia Pacific (Pvt) Ltd',
      subtitle: 'Software Engineer Intern',
      date: '2023.03.10 - 2023.09.10 (6 months)',
      icon: '/icons/work.svg',
    },
    {
      title: 'Donext',
      subtitle: 'Software Engineer',
      date: '2024.01.02 - 2024.12.02 (1 year)',
      icon: '/icons/work.svg',
    },
    {
      title: 'ColtexBiz (Pvt) Ltd',
      subtitle: 'Software Engineer',
      date: '2024.08 - 2025.01 (6 months)',
      icon: '/icons/work.svg',
    },
  ];

  return (
    <section className="min-h-screen bg-background text-foreground px-6 lg:px-20 py-20">
      <h2 className="text-4xl font-extrabold text-primary text-center mb-2">
        My Journey
      </h2>
      <p className="text-center text-muted-foreground mb-12">
        Education & Work Experience
      </p>

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row justify-center">
        {/* Vertical center line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-transparent z-0" />

        {/* Education - Left Side */}
        <div className="md:w-1/2 flex flex-col items-end gap-16 pr-8">
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
                whileHover={{ scale: 1.05, rotateY: 5, rotateX: 3 }}
                className="bg-white/10 dark:bg-gray-800 p-6 rounded-3xl shadow-lg border border-white/20 backdrop-blur-md relative"
              >
                <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-tr from-purple-400 via-pink-500 to-yellow-400 flex items-center justify-center shadow-lg animate-spin-slow">
                  <Image src={item.icon} alt={item.title} width={28} height={28} />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-1">{item.title}</h3>
                <p className="text-muted-foreground mb-2">{item.subtitle}</p>
                <span className="flex items-center gap-2 text-sm text-primary">
                  <i className="uil uil-calendar-alt"></i> {item.date}
                </span>
              </motion.div>

              {/* Connector circle */}
              <div className="absolute -right-5 top-1/2 transform -translate-y-1/2 bg-accent w-5 h-5 rounded-full shadow-lg animate-pulse"></div>
            </motion.div>
          ))}
        </div>

        {/* Work - Right Side */}
        <div className="md:w-1/2 flex flex-col items-start gap-16 pl-8 mt-12 md:mt-0">
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
                whileHover={{ scale: 1.05, rotateY: -5, rotateX: 3 }}
                className="bg-white/10 dark:bg-gray-800 p-6 rounded-3xl shadow-lg border border-white/20 backdrop-blur-md relative"
              >
                <div className="absolute top-1/2 -left-10 transform -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-tr from-green-400 via-blue-500 to-indigo-400 flex items-center justify-center shadow-lg animate-spin-slow-reverse">
                  <Image src={item.icon} alt={item.title} width={28} height={28} />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-1">{item.title}</h3>
                <p className="text-muted-foreground mb-2">{item.subtitle}</p>
                <span className="flex items-center gap-2 text-sm text-primary">
                  <i className="uil uil-calendar-alt"></i> {item.date}
                </span>
              </motion.div>

              {/* Connector circle */}
              <div className="absolute -left-5 top-1/2 transform -translate-y-1/2 bg-accent w-5 h-5 rounded-full shadow-lg animate-pulse"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationWorkSplit;
