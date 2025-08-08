"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

// Define the structure for a certificate
interface Certificate {
  id: number;
  title: string;
  issuer: string;
  imageUrl: string;
  verificationLink?: string;
}

// Sample certificate data
const certificates: Certificate[] = [

{
    id: 1,
    title: "HackerRank - React (Basic) Certificate",
    issuer: "HackerRank",
    imageUrl: "/certificates/React(Basic).png",
    verificationLink: "https://www.hackerrank.com/certificates/iframe/ba29108e83a4",
  },

  {
    id: 2,
    title: "Angular Certificate",
    issuer: "sololearn",
    imageUrl: "/certificates/angular.jpg",
    verificationLink: "https://www.sololearn.com/en/certificates/CC-MFDGKVSF",
  },

  {
    id: 3,
    title: "Intermediate Java Certificate",
    issuer: "Sololearn",
    imageUrl: "/certificates/Java Intermediate.jpg",
    verificationLink: "https://www.sololearn.com/en/certificates/CC-2UN3OU4Y",
  },
  {
    id: 4,
    title: "Introduction to Java Certificate",
    issuer: "Sololearn",
    imageUrl: "/certificates/Introduction to Java.jpg",
    verificationLink: "https://www.sololearn.com/en/certificates/CC-8JMFUTKH",
  },
  {
    id: 5,
    title: "Java Certified",
    issuer: "Great Learning",
    imageUrl: "/certificates/java- Greate Lerning.png",
    verificationLink:"https://olympus.mygreatlearning.com/courses/12385/certificate",
  },
  {
    id: 6,
    title: "AWS Node Runners for BNB Chain",
    issuer: "Binance Academy",
    imageUrl: "/certificates/Binance Academy.png",
    verificationLink: "https://academy.binance.com/en/courses/certificate/95ea7b48e8e8fdce2975cee2e7bda6e2f40bc94b0b390cd7ac5912be332d5dc4",
  },

  {
    id: 7,
    title: "HTML Certificate",
    issuer: "Sololearn",
    imageUrl: "/certificates/HTML.jpg",
    verificationLink: "https://www.sololearn.com/certificates/CC-QLGONB7C",
  },
  {
    id: 8,
    title: "Introduction to Spring Boot",
    issuer: "Great Learning",
    imageUrl: "/certificates/spring boot.jpeg",
    verificationLink:"https://olympus.mygreatlearning.com/courses/57920/certificate",
  },
  {
    id: 9,
    title: "Flutter Development for beginner ",
    issuer: "Mindluster",
    imageUrl: "/certificates/Flutter Development.jpg",
    verificationLink: "https://www.mindluster.com/student/certificate/14470562360",
  },

  {
    id: 10,
    title: "Microsoft Excel 2010 - Revised 2017",
    issuer: "Alison - Empower Yourself",
    imageUrl: "/certificates/excel.png",
    verificationLink: "https://alison.com/user/pdf/1268/1",
  },
];

const CertificatesPage = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const openModal = (certificate: Certificate) => {
    setSelectedCert(certificate);
  };

  const closeModal = () => {
    setSelectedCert(null);
  }; // Motion values for 3D card tilt

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  return (
    <div className="p-8 sm:p-12 min-h-screen">
      {" "}
      <div className="text-center mb-16">
        {" "}
        <h1 className="text-5xl md:text-6xl font-extrabold text-primary mb-4 tracking-widest fadeInUp">
           CERTIFICATES {" "}
        </h1>
        {" "}
        <p className="text-muted-foreground text-lg slideInLeft">
          A showcase of my completed courses and professional
          certifications. {" "}
        </p>
        {" "}
      </div>
     {" "}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {" "}
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            className="relative group perspective-[1000px]"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              x.set(e.clientX - rect.left - rect.width / 2);
              y.set(e.clientY - rect.top - rect.height / 2);
            }}
            onMouseLeave={() => {
              x.set(0);
              y.set(0);
            }}
            style={{ rotateX, rotateY, z: 100 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {/* Light flare on hover */}
            {" "}
            <div className="absolute inset-0 z-0 bg-primary/20 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            {/* Card Content */}{" "}
            <div
              onClick={() => openModal(cert)}
              className="relative z-10 w-full h-full bg-card/60 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl border border-border cursor-pointer transition-all duration-300 transform-gpu"
            >
             {" "}
              <Image
                src={cert.imageUrl}
                alt={cert.title}
                width={800}
                height={600}
                className="w-full h-full object-cover aspect-video"
              />
              {" "}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                {" "}
                <h3 className="text-xl font-semibold">{cert.title}</h3>
               {" "}
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </motion.div>
        ))}
       {" "}
      </div>
       {/* Modal for large view */}{" "}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          {" "}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {" "}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors"
            >
               <X size={24} />{" "}
            </button>
            {" "}
            <Image
              src={selectedCert.imageUrl}
              alt={selectedCert.title}
              layout="responsive"
              width={1200}
              height={900}
              objectFit="contain"
              className="rounded-2xl"
            />
            {" "}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
              {" "}
              <h3 className="text-3xl font-bold text-white">
                {selectedCert.title}
              </h3>
              {" "}
              <p className="text-lg text-gray-300 mb-4">
                {selectedCert.issuer}
              </p>
              {" "}
              {selectedCert.verificationLink && (
                <Link
                  href={selectedCert.verificationLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                   Verify Credential{" "}
                  <FaExternalLinkAlt size={14} />{" "}
                </Link>
              )}
              {" "}
            </div>
            {" "}
          </motion.div>
          {" "}
        </div>
      )}
      {" "}
    </div>
  );
};

export default CertificatesPage;
