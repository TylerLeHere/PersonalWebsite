// mywebsite/src/app/projects/[slug]/page.tsx

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { projectsData } from "@/app/data/projects"
import type { Metadata } from 'next'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

// Generate metadata for better SEO
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projectsData.find(p => p.id === slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.'
    }
  }
  
  return {
    title: `${project.title} - Tyler Le Portfolio`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projectsData.find(p => p.id === slug);

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-5xl mx-auto px-8 py-24 pt-32">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-gray-500 mb-12 text-lg">
          <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/#projects" className="hover:text-gray-900 transition-colors">Projects</Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold">{project.title}</span>
        </nav>

        {/* Header */}
        <div className="border-b pb-8 mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600">{project.metadata.role}</p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none mx-auto text-gray-800 leading-relaxed">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Overview</h2>
            <p>{project.content.overview}</p>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Challenge</h3>
            <p>{project.content.problem}</p>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">My Solution</h3>
            <p>{project.content.solution}</p>
          </section>
        </div>

        {/* Project Links */}
        <div className="text-center mt-16">
          {project.github && (
            <Link href={project.github} target="_blank" className="inline-block mx-2">
              <Button variant="outline" size="lg">
                <Github className="mr-2 h-5 w-5" />
                View Code
              </Button>
            </Link>
          )}
          {project.live && (
            <Link href={project.live} target="_blank" className="inline-block mx-2">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <ExternalLink className="mr-2 h-5 w-5" />
                Live Demo
              </Button>
            </Link>
          )}
        </div>

        {/* Back Navigation */}
        <div className="mt-20 pt-8 border-t">
          <Link href="/#projects">
            <Button variant="ghost" size="lg" className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Projects
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}

export async function generateStaticParams() {
  return projectsData.map(project => ({
    slug: project.id
  }));
}