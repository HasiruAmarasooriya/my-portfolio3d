import Trending3D from '@/components/Trending3D'
import { ProjectCard } from '@/components/ProjectCard'
import { Project } from '../../types/project'

const projects: Project[] = [
  {
    id: 1,
    name: '3D Portfolio Site',
    description: 'A stunning 3D portfolio experience using Three.js, React Three Fiber, and Tailwind CSS.',
    images: [
      '/projects/project-1/image1.jpg',
      '/projects/project-1/image2.jpg',
      '/projects/project-1/image3.jpg'
    ],
    video: '/projects/project-1/demo.mp4',
    github: 'https://github.com/yourusername/3d-portfolio',
    vercel: 'https://3d-portfolio.vercel.app',
  },
  
]

export default function ProjectsPage() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <Trending3D />
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  )
}
