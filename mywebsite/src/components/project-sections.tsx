// mywebsite/src/components/project-sections.tsx

import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getFeaturedProjects } from "@/app/data/projects";

// Define the component
export function ProjectSections() {
  // Get only the featured projects
  const projects = getFeaturedProjects();

  //Return the structure to display the projects
  return (
    <section id="projects" className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="border-t border-gray-200 pt-16 mb-20">
          <h2 className="text-5xl font-bold text-gray-900">Featured Projects</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`} className="group block">
              <Card className="group-hover:shadow-xl transition-all duration-300 border rounded-lg overflow-hidden bg-white h-full flex flex-col">
                <div className="relative h-80 w-full overflow-hidden">
                   <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={320}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-700 leading-relaxed text-lg mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => ( // Show first 4 technologies
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto flex items-center text-blue-600 font-semibold pt-4">
                    <span>View Project</span>
                    <ArrowRight className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}