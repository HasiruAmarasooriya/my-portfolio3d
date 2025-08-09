import Trending3D from '@/components/Trending3D'
import { ProjectCard } from '@/components/ProjectCard'
import { Project } from '../../types/project'

const projects: Project[] = [
  {
    id: 1,
    name: 'luxury hotel website',
    description: 'Developed a luxury hotel website featuring a dynamic restaurant menu with 3D food visualizations, an interactive ordering system, and sections for a lobby bar, event management, banquet halls, and accommodations. The platform offers a seamless, responsive user experience with intuitive navigation, enhancing customer engagement and streamlining service bookings while showcasing the hotel’s diverse offerings.  The project was built using React.js, Tailwind CSS, node.js,  and MongoDB.',
    images: [
      '/projects/project-1/image1.jpg',
      '/projects/project-1/image2.jpg',
      '/projects/project-1/image3.jpg',
      '/projects/project-1/image6.jpg',
      '/projects/project-1/image7.jpg'

    ],
    video: '/projects/project-1/demo.mp4',
    github: 'https://github.com/ES-3508/luxury-hotel',
    vercel: 'https://luxury-hotel-weld.vercel.app/',
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
