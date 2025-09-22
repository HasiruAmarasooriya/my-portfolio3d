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
    skills: [
      { name: "React", icon: "/icons/react.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "TailwindCSS", icon: "/icons/tailwind.svg" },
      { name: "Node.js", icon: "/icons/node.svg" },
      { name: "MongoDB", icon: "/icons/mongodb.svg" },
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      
    ],
  },
   {
    id: 2,
    name: 'Hospital website',
    description: 'Developed a responsive hospital website using Next.js and Tailwind CSS, focusing on performance, accessibility, and user-friendly design. The project was built using – Next.js, ReactJS, Tailwind CSS, Node JS, MongoDB, and TypeScript.',
    images: [
      '/projects/project-2/image1.jpg',
      '/projects/project-2/image2.jpg',
      '/projects/project-2/image3.jpg',
      '/projects/project-2/image4.jpg',
      '/projects/project-2/image5.jpg',
      '/projects/project-2/image6.jpg'

    ],
    video: '/projects/project-1/demo.mp4',
    github: 'https://github.com/HasiruAmarasooriya/Hospital-Next.js',
    vercel: 'https://hospital-next-js.vercel.app/',
    skills: [
      { name: "React", icon: "/icons/react.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "TailwindCSS", icon: "/icons/tailwind.svg" },
      { name: "Node.js", icon: "/icons/node.svg" },
      { name: "MongoDB", icon: "/icons/mongodb.svg" },
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      
    ],
  },


  
]

export default function ProjectsPage() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Projects</h1>
      <Trending3D />
      <div className="flex justify-center">
        <div className="flex flex-col gap-8 w-full max-w-4xl">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  )
}
