import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  isActive?: boolean
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  isActive = true,
}: ProjectCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={400}
            height={250}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex space-x-3">
            {githubUrl && githubUrl !== "#" && (
              <Button variant="outline" size="sm" asChild>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
            )}
            {liveUrl && liveUrl !== "#" && (
              <Button variant="outline" size="sm" asChild>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
