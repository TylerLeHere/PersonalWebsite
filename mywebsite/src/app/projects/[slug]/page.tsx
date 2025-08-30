import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image" // Keep this import for the Navigation component
import { notFound } from "next/navigation"
import { projectsData } from "@/app/data/projects"

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projectsData.find(p => p.id === slug);

  if (!project) {
    notFound()
  }

  const projectDetails = {
    overview: `This is a detailed overview for ${project.title}. You can add more content here.`,
    features: ["Feature 1", "Feature 2", "Feature 3"],
    challenges: "The main challenge was...",
    outcome: "The outcome was successful..."
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <div className={`${project.color} pt-32 pb-20 px-8`}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-7xl font-bold text-gray-900 mb-8">{project.title}</h1>
          <p className="text-2xl text-gray-700">{project.description}</p>
        </div>
      </div>

      {/* Content */}
      <div className="px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-gray-600 mb-8">
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
            <span>{">"}</span>
            <Link href="/#projects" className="hover:text-gray-900">
              Projects
            </Link>
            <span>{">"}</span>
            <span className="text-gray-900">{project.title}</span>
          </nav>

          {/* FIX 2: The large <Image> component has been deleted from here */}

          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Overview</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>{projectDetails.overview}</p>
            </div>
          </section>

          {/* Technologies */}
          <section className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Links */}
          <div className="flex flex-wrap gap-4 mb-12">
            {project.github && (
              <Link href={project.github} target="_blank">
                <Button variant="outline" size="lg">
                  <Github className="mr-2 h-5 w-5" />
                  View Code
                </Button>
              </Link>
            )}
            {project.live && (
              <Link href={project.live} target="_blank">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Live Demo
                </Button>
              </Link>
            )}
          </div>

          {/* Back Button */}
          <div className="pt-8 border-t border-gray-200">
            <Link href="/">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
    return projectsData.map(project => ({
        slug: project.id
    }));
}