'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Spline from '@splinetool/react-spline';

const skillsData = [
  {
    category: 'Frameworks',
    items: [
      { name: 'React.js (JavaScript) (Frontend)', icon: '/icons/react.svg' },
      { name: 'Angular (TypeScript) (Frontend)', icon: '/icons/angular.svg' },
      { name: 'Vue.js (JavaScript) (Frontend)', icon: '/icons/vue.svg' },
      { name: 'ASP.NET Core (C#) (Backend)', icon: '/icons/dotnet.svg' },
      { name: 'Spring Boot (Java) (Backend)', icon: '/icons/spring.svg' },
      { name: 'Node.js (Backend)', icon: '/icons/node.svg' },
      { name: 'Bootstrap (Frontend)', icon: '/icons/bootstrap.svg' },
      { name: 'Tailwind CSS (Frontend)', icon: '/icons/tailwind.svg' },
      { name: 'Three.js (3D Web)', icon: '/icons/threejs.svg' },
      
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'HTML', icon: '/icons/html.svg' },
      { name: 'CSS', icon: '/icons/css.svg' },
      { name: 'JavaScript', icon: '/icons/javascript.svg' },
      { name: 'TypeScript', icon: '/icons/typescript.svg' },
      { name: 'Tailwind CSS', icon: '/icons/tailwind.svg' },
      { name: 'Bootstrap', icon: '/icons/bootstrap.svg' },
      { name: 'ReactJS', icon: '/icons/react.svg' },
      { name: 'NextJS', icon: '/icons/nextjs.svg' },
      { name: 'Three.js', icon: '/icons/threejs.svg' },
      

    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node JS', icon: '/icons/node.svg' },
      { name: 'Spring', icon: '/icons/spring.svg' },
      { name: 'PHP', icon: '/icons/php.svg' },
      { name: 'APIs', icon: '/icons/api.svg' },
      { name: 'ASP.Net', icon: '/icons/aspnet.svg' },
      { name: '.Net Core', icon: '/icons/dotnet.svg' },
      { name: 'Java', icon: '/icons/java.svg' },
      { name: 'C#', icon: '/icons/csharp.svg' },
      { name: 'Python', icon: '/icons/python.svg' },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'MongoDB', icon: '/icons/mongodb.svg' },
      { name: 'MySQL', icon: '/icons/mysql.svg' },
      { name: 'SSMS', icon: '/icons/ssms.svg' },
      
    ],
  },
  {
    category: 'Mobile Application',
    items: [
      { name: 'Flutter', icon: '/icons/flutter.svg' },
    ],
  },
  {
    category: 'Version Control',
    items: [
      { name: 'Git', icon: '/icons/git.svg' },
      { name: 'GitHub', icon: '/icons/github.svg' },
    ],
  },
  {
    category: 'IDEs',
    items: [
      { name: 'Visual Studio Code (VS Code)', icon: '/icons/vscode.svg' },
      { name: 'IntelliJ', icon: '/icons/intellij.svg' },
      { name: 'Android Studio', icon: '/icons/android-studio.svg' },
      { name: 'Eclipse', icon: '/icons/eclipse.svg' },
      { name: 'Visual Studio', icon: '/icons/visual-studio.svg' },
     
    ],
  },

  {
    category: 'Cloud Platforms',
    items: [
        { name: 'Vercel (Frontend)', icon: '/icons/vercel.svg' },
        { name: 'Netlify (Frontend)', icon: '/icons/netlify.svg' },
        { name: 'cloudflare pages (Frontend)', icon: '/icons/cloudflare.svg' },
        { name: 'Amazon Web Services (AWS) (Backend)', icon: '/icons/aws.svg' },
        { name: 'Microsoft Azure (Backend)', icon: '/icons/azure.svg' },
        { name: 'Google Cloud Platform (GCP) (Backend)', icon: '/icons/gcp.svg' },
        
        
     
    ],
  },
  {
    category: 'Software',
    items: [
      { name: 'Figma', icon: '/icons/figma.svg' },
      { name: 'Canva', icon: '/icons/canva.svg' },
      { name: 'Photoshop', icon: '/icons/photoshop.svg' },
      { name: 'Postman', icon: '/icons/postman.svg' },
      { name: 'Draw IO', icon: '/icons/drawio.svg' },
      { name: 'Blender', icon: '/icons/blender.svg' },
      { name: 'Gemini', icon: '/icons/gemini.svg' },
      { name: 'ChatGPT', icon: '/icons/chatgpt.svg' },
      { name: 'Docker', icon: '/icons/docker.svg' },

    ],
  },
  {
    category: 'Soft Skills',
    items: [
      { name: 'Time Management', icon: '/icons/time.svg' },
      { name: 'Problem Solving', icon: '/icons/problem-solving.svg' },
      { name: 'Faster Learner', icon: '/icons/learning.svg' },
      { name: 'Teamwork', icon: '/icons/teamwork.svg' },
      { name: 'Creativity', icon: '/icons/creativity.svg' },
      { name: 'Flexibility', icon: '/icons/flexibility.svg' },
    ],
  },
];

const SkillPage: React.FC = () => {
  return (
    <section className="min-h-screen bg-background text-foreground px-6 lg:px-20 py-20 relative">
      <h1 className="text-5xl font-extrabold text-primary text-center mb-12">
        👨‍💻 Technical Skills
      </h1>

      {/* 3D Spline Model */}
      <div className="w-full h-[500px] mb-12 flex justify-center">
        <Spline scene="https://prod.spline.design/gcV0eOmjcwXlxhol/scene.splinecode" className="w-full h-full rounded-xl shadow-xl" />
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((skillCategory, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, rotateY: 5, rotateX: 3 }}
            className="bg-gradient-to-br from-gray-900 to-gray-700 dark:from-gray-800 dark:to-gray-600 p-6 rounded-2xl shadow-2xl backdrop-blur-md border border-white/20 flex flex-col items-center text-center transition-all duration-300 cursor-pointer hover:shadow-primary/50"
          >
            <h3 className="text-xl font-semibold mb-4 text-primary">{skillCategory.category}</h3>
            <div className="grid grid-cols-3 gap-4">
              {skillCategory.items.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.15, rotateY: 10 }}
                  className="flex flex-col items-center gap-2 bg-white/10 p-3 rounded-xl shadow-md backdrop-blur-md border border-white/20 cursor-pointer transition-all duration-300 hover:shadow-blue-500/50"
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                  <span className="text-white text-sm font-medium">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating 3D Glow Circles */}
      <div className="absolute top-10 right-10 w-20 h-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="w-20 h-20 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-60"
        />
      </div>
      <div className="absolute bottom-20 left-10 w-16 h-16">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 bg-gradient-to-tr from-yellow-400 via-orange-400 to-red-500 rounded-full blur-xl opacity-50"
        />
      </div>
    </section>
  );
};

export default SkillPage;
