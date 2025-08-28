import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

// Define project data directly in this file to avoid import issues
const projectsData = {
  nautichat: {
    id: "nautichat",
    title: "Nautichat",
    description: "A powerful NLP-AI system built for Ocean Network Canada",
    image: "/api/placeholder?width=600&height=400&text=Nautichat+System",
    color: "bg-blue-100",
    technologies: ["Python", "NLP", "AI/ML", "React", "Node.js", "TensorFlow"],
    github: "https://github.com/yourusername/nautichat",
    live: "https://nautichat-demo.com",
    overview: `Nautichat is an advanced Natural Language Processing and AI system developed for Ocean Network Canada to revolutionize marine data analysis and communication. This project combines cutting-edge machine learning techniques with intuitive user interfaces to make complex oceanographic data accessible to researchers and the public.

The system processes vast amounts of marine sensor data, weather patterns, and research documentation to provide intelligent insights and automated reporting capabilities.`,
    features: [
      "Advanced NLP query processing for marine data",
      "Real-time ocean sensor data integration",
      "Automated report generation and insights",
      "Interactive data visualization dashboard",
      "Multi-language support for international researchers",
    ],
    challenges:
      "The main challenge was processing vast amounts of unstructured marine data and making it queryable through natural language.",
    outcome:
      "Successfully streamlined Ocean Network Canada's data analysis workflow, reducing query response time by 75%.",
  },
  "asl-go": {
    id: "asl-go",
    title: "ASL Go",
    description: "iOS app to learn ASL with Machine Learning and friendly UI",
    image: "/api/placeholder?width=600&height=400&text=ASL+Go+Project",
    color: "bg-green-100",
    technologies: ["Swift", "CoreML", "UIKit", "Machine Learning"],
    github: "https://github.com/yourusername/asl-go",
    live: "https://apps.apple.com/app/asl-go",
    overview: `ASL Go is a mobile application designed to help users learn American Sign Language through AI-powered gesture recognition. Built during a hackathon to promote inclusivity and communication with the deaf community.

The app features an intuitive interface that encourages continued learning through gamification and real-time feedback.`,
    features: [
      "Real-time hand gesture recognition using CoreML",
      "Interactive ASL alphabet flashcards",
      "Progress tracking and user profiles",
      "Gamified learning experience",
      "Offline functionality for learning on-the-go",
    ],
    challenges:
      "Implementing accurate real-time gesture recognition while maintaining smooth performance on mobile devices.",
    outcome:
      "Created a functional iOS app that successfully teaches ASL alphabet through machine learning with positive user feedback.",
  },
}

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projectsData[slug as keyof typeof projectsData]

  if (!project) {
    notFound()
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

          {/* Project Image */}
          <div className="mb-12">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={800}
              height={500}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Overview</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              {project.overview.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
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

          {/* Features */}
          <section className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Key Features</h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Challenges & Outcome */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Challenges</h2>
              <p className="text-gray-700 leading-relaxed">{project.challenges}</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Outcome</h2>
              <p className="text-gray-700 leading-relaxed">{project.outcome}</p>
            </section>
          </div>

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

// This function tells Next.js which dynamic routes to pre-generate
export async function generateStaticParams() {
  return [{ slug: "nautichat" }, { slug: "asl-go" }]
}
