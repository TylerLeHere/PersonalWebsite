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
        <div className="grid md:grid-cols-2 gap-15">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`} className="group block">
              <Card className="group-hover:shadow-lg transition-all duration-300 border-0 overflow-hidden bg-white">
                <CardContent className="p-0">
                  <div className={`relative h-80 ${project.color} flex items-center justify-center overflow-hidden`}>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={320}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-semibold text-gray-900">{project.title}</h3>
                      <ArrowRight className="h-6 w-6 text-gray-600 group-hover:text-gray-900 transition-colors" />
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">{project.description}</p>
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