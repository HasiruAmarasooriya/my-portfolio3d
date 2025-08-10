"use client";

import { useState, useEffect } from "react";
import { Project } from "@/types/project";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  project: Project;
};

export const ProjectCard = ({ project }: Props) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <Card className="w-full max-w-3xl mb-8 shadow-lg">
      <CardHeader>
        <h3 className="text-xl font-bold">{project.name}</h3>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="relative w-full h-64 overflow-hidden rounded-lg group">
          {/* Image */}
          <img
            src={project.images[currentImage]}
            alt={`Screenshot of ${project.name}`}
            className="w-full h-full object-cover transition-all duration-700 ease-in-out"
          />

          {/* Left Button */}
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Button */}
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots Navigation */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
            {project.images.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full cursor-pointer transition ${
                  index === currentImage
                    ? "bg-white"
                    : "bg-gray-400 opacity-70 hover:opacity-100"
                }`}
              />
            ))}
          </div>
        </div>

        <p className="text-sm text-gray-700 dark:text-gray-300">
          {project.description}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-4 mt-4">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Button variant="outline">GitHub</Button>
          </a>
          <a href={project.vercel} target="_blank" rel="noopener noreferrer">
            <Button variant="outline">Vercel</Button>
          </a>
          {project.video && (
            <a href={project.video} target="_blank" rel="noopener noreferrer">
              <Button variant="default" className="flex gap-2 items-center">
                <Play size={16} />
                View Demo
              </Button>
            </a>
          )}
        </div>
      </CardContent>

      <CardFooter />
    </Card>
  );
};
