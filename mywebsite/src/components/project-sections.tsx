"use client"
// mywebsite/src/components/project-sections.tsx

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { getFeaturedProjects } from "@/app/data/projects";

// Define the component
export function ProjectSections() {
  // Get only the featured projects
  const projects = getFeaturedProjects();
  const router = useRouter();

  const handleProjectClick = (projectId: string) => {
    // Simple macOS-like slide transition
    document.body.style.transform = 'translateX(-10px)';
    document.body.style.opacity = '0.95';
    document.body.style.transition = 'transform 0.15s ease-out, opacity 0.15s ease-out';
    
    setTimeout(() => {
      router.push(`/projects/${projectId}`);
    }, 150);
  };

  //Return the structure to display the projects
  return (
    <section id="projects" className="py-24 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
        </div>

        {/* Projects Grid - Equal sized cards, bigger */}
        <div className="grid grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group block project-card cursor-pointer h-full"
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="bg-white rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 h-full flex flex-col">
                {/* Project Image - Bigger and consistent */}
                <div className="relative h-80 w-full overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 flex-shrink-0">
                  {project.image && project.image !== "/placeholder.svg" ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={256}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-2 bg-gray-300 rounded-lg flex items-center justify-center">
                          <ArrowRight className="h-6 w-6 text-gray-500" />
                        </div>
                        <p className="text-gray-500 text-sm font-medium">{project.title}</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Project Content - Equal height content */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {project.title}
                    </h3>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transform group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed flex-grow">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}