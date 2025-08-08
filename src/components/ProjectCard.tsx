"use client"

import { useState, useEffect } from 'react'
import { Project } from '@/types/project'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Play } from 'lucide-react'

type Props = {
  project: Project
}

export const ProjectCard = ({ project }: Props) => {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [project.images.length])

  return (
    <Card className="w-full max-w-3xl mb-8 shadow-lg">
      <CardHeader>
        <h3 className="text-xl font-bold">{project.name}</h3>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="relative w-full h-64 overflow-hidden rounded-lg">
          <img
            src={project.images[currentImage]}
            alt={`Screenshot of ${project.name}`}
            className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
          />
        </div>

        <p className="text-sm text-gray-700">{project.description}</p>

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
  )
}
