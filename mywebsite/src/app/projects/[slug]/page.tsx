// mywebsite/src/app/projects/[slug]/page.tsx

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
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

      <main className="max-w-5xl mx-auto px-8 py-24 pt-32 animate-slide-in">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-gray-500 mb-12 text-lg">
          <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/#projects" className="hover:text-gray-900 transition-colors">Projects</Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold">{project.title}</span>
        </nav>

        {/* Header
        <div className="border-b pb-8 mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600">{project.metadata.role}</p>
        </div> */}

        {/* Content */}
        <div className="max-w-4xl mx-auto text-gray-800 leading-relaxed">
          <section className="mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Overview</h1>
            <p className="text-lg leading-relaxed mb-8">{project.content.overview}</p>
          </section>

          {/* Video Section */}
          {project.content.video && (
            <section className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">{project.content.video.title}</h2>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100 mb-4">
                <iframe
                  src={`https://www.youtube.com/embed/${project.content.video.youtubeId}`}
                  title={project.content.video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              {project.content.video.caption && (
                <p className="text-gray-600 text-center italic">{project.content.video.caption}</p>
              )}
            </section>
          )}

          {/* Process Section */}
          {project.content.process && (
            <section className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">{project.content.process.title}</h2>
              {project.content.process.sections.map((section, index) => (
                <div key={index} className="mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{section.title}</h3>
                  <p className="text-lg leading-relaxed">{section.content}</p>
                </div>
              ))}
            </section>
          )}

          {/* Project Images if available */}
          {project.content.images && project.content.images.length > 0 && (
            <div className="mb-12 space-y-8">
              {project.content.images.map((image, index) => (
                <div key={index}>
                  <div className="relative w-full overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Outcome Section */}
          <section className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Outcome</h2>
            <p className="text-lg leading-relaxed mb-8">{project.content.outcome}</p>
          </section>

          {/* Key Learning Section */}
          {project.content.keyLearning && (
            <section className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">{project.content.keyLearning.title}</h2>
              <ul className="space-y-4">
                {project.content.keyLearning.points.map((point, index) => (
                  <li key={index} className="text-lg leading-relaxed flex">
                    <span className="text-black mr-3">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>
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