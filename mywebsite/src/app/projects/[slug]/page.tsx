import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Github, ExternalLink, Clock, Users, Briefcase, Calendar, TrendingUp, CheckCircle, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { projectsData, getRelatedProjects } from "@/app/data/projects"
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
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
      type: 'website'
    }
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projectsData.find(p => p.id === slug);

  if (!project) {
    notFound()
  }

  const relatedProjects = getRelatedProjects(project.id);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <div className={`${project.color} pt-32 pb-20 px-8`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-6">{project.title}</h1>
              <p className="text-xl lg:text-2xl text-gray-700 mb-8">{project.description}</p>
              
              {/* Project Meta Info */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>{project.metadata.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>{project.metadata.team}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Briefcase className="h-4 w-4" />
                  <span>{project.metadata.role}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>{project.metadata.year}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
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
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-gray-600 mb-12">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span>{">"}</span>
            <Link href="/#projects" className="hover:text-gray-900 transition-colors">Projects</Link>
            <span>{">"}</span>
            <span className="text-gray-900">{project.title}</span>
          </nav>

          {/* Key Metrics */}
          {project.content.metrics && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {project.content.metrics.map((metric, index) => (
                <Card key={index} className="text-center p-6 border-2 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-center mb-3">
                    <TrendingUp className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </Card>
              ))}
            </div>
          )}

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed">{project.content.overview}</p>
                </div>
              </section>

              {/* Problem & Solution */}
              <section className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <div className="w-2 h-8 bg-red-500 rounded"></div>
                    Problem
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{project.content.problem}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <div className="w-2 h-8 bg-green-500 rounded"></div>
                    Solution
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{project.content.solution}</p>
                </div>
              </section>

              {/* Features */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.content.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Technical Highlights */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Technical Highlights</h3>
                <div className="space-y-3">
                  {project.content.technicalHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <Zap className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Additional Images */}
              {project.content.images && (
                <section>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Project Gallery</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {project.content.images.map((img, index) => (
                      <div key={index} className="space-y-3">
                        <div className="aspect-[4/3] rounded-lg overflow-hidden">
                          <Image
                            src={img.src}
                            alt={img.alt}
                            width={400}
                            height={300}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        {img.caption && (
                          <p className="text-sm text-gray-600 text-center">{img.caption}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Outcome */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Outcome & Impact</h3>
                <div className="p-6 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                  <p className="text-gray-700 leading-relaxed">{project.content.outcome}</p>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Technologies */}
              <Card className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>

              {/* Challenges */}
              <Card className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Challenges Overcome</h4>
                <div className="space-y-3">
                  {project.content.challenges.map((challenge, index) => (
                    <div key={index} className="text-sm text-gray-600 leading-relaxed">
                      • {challenge}
                    </div>
                  ))}
                </div>
              </Card>

              {/* Project Links */}
              <Card className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Project Links</h4>
                <div className="space-y-3">
                  {project.github && (
                    <Link href={project.github} target="_blank" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                      <Github className="h-4 w-4" />
                      <span>Source Code</span>
                    </Link>
                  )}
                  {project.live && (
                    <Link href={project.live} target="_blank" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </Link>
                  )}
                </div>
              </Card>
            </div>
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <section className="mt-20 pt-12 border-t border-gray-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Other Projects</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {relatedProjects.map((relatedProject) => (
                  <Link key={relatedProject.id} href={`/projects/${relatedProject.id}`} className="group block">
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className={`${relatedProject.color} h-48 flex items-center justify-center`}>
                        <Image
                          src={relatedProject.image}
                          alt={relatedProject.title}
                          width={300}
                          height={200}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">{relatedProject.title}</h4>
                        <p className="text-gray-600">{relatedProject.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link href="/#projects">
              <Button variant="outline" size="lg">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Projects
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