import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

const projectsData = {
  nautichat: {
    title: "Nautichat",
    subtitle: "A powerful NLP-AI system built for Ocean Network Canada",
    image: "/api/placeholder?width=600&height=400&text=Nautichat+System",
    technologies: ["Python", "NLP", "AI/ML", "React", "Node.js", "TensorFlow"],
    github: "https://github.com/yourusername/nautichat",
    live: "https://nautichat-demo.com",
    overview: `Nautichat is an advanced Natural Language Processing and AI system developed for Ocean Network Canada to revolutionize marine data analysis and communication. This project combines cutting-edge machine learning techniques with intuitive user interfaces to make complex oceanographic data accessible to researchers and the public.

The system processes vast amounts of marine sensor data, weather patterns, and research documentation to provide intelligent insights and automated reporting capabilities.`,
    contribution: "Full-stack development and AI/ML implementation",
    team: "3 × developers, 2 × marine scientists",
    year: "2024",
    features: [
      "Advanced NLP query processing for marine data",
      "Real-time ocean sensor data integration",
      "Automated report generation and insights",
      "Interactive data visualization dashboard",
      "Multi-language support for international researchers",
    ],
    outcome: `Successfully streamlined Ocean Network Canada's data analysis workflow, reducing query response time by 75% and enabling researchers to access complex marine data through simple natural language queries.`,
  },
  "asl-go": {
    title: "ASL Go",
    subtitle: "iOS app to learn ASL with Machine Learning and friendly UI",
    image: "/api/placeholder?width=600&height=400&text=ASL+Go+Project",
    technologies: ["Swift", "CoreML", "UIKit", "Machine Learning"],
    github: "https://github.com/yourusername/asl-go",
    live: "https://apps.apple.com/app/asl-go",
    overview: `A mobile app designed to help users learn American Sign Language through AI-powered gesture recognition. Developed during MIT's Blueprint hackathon to promote inclusivity and communication with the deaf community.

The app features an intuitive interface that encourages continued learning through gamification and real-time feedback.`,
    contribution: "iOS development and UI/UX design",
    team: "4 × co-creators",
    year: "2021",
    features: [
      "Real-time hand gesture recognition using CoreML",
      "Interactive ASL alphabet flashcards",
      "Progress tracking and user profiles",
      "Gamified learning experience",
      "Offline functionality for learning on-the-go",
    ],
    outcome: `Created a functional iOS app that successfully teaches ASL alphabet through machine learning. Users can practice sign language and receive real-time feedback on their gestures.`,
  },
  "retro-pong": {
    title: "Retro Ping Pong Java Game",
    subtitle: "10 level single-player ping pong game with retro graphics",
    image: "/api/placeholder?width=600&height=400&text=Retro+Pong+Project",
    technologies: ["Java", "Swing", "Game Physics", "OOP"],
    github: "https://github.com/yourusername/retro-pong",
    live: "https://retro-pong-demo.com",
    overview: `A nostalgic take on the classic Pong game, featuring 10 progressively challenging levels with retro-inspired graphics and smooth physics implementation. Built entirely in Java using Swing for the user interface.

This project demonstrates advanced object-oriented programming principles, game physics calculations, and user interface design.`,
    contribution: "Full-stack game development",
    team: "Solo project",
    year: "2022",
    features: [
      "10 unique levels with increasing difficulty",
      "Retro pixel art graphics and sound effects",
      "Smooth ball physics and collision detection",
      "Score tracking and high score system",
      "Responsive paddle controls",
    ],
    outcome: `Successfully recreated the classic Pong experience with modern enhancements. The game features progressive difficulty and received positive feedback for its retro aesthetic and smooth gameplay.`,
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
      <div className="bg-green-100 pt-32 pb-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-7xl font-bold text-gray-900 mb-8">{project.title}</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-gray-600 mb-8">
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
            <span>{">"}</span>
            <Link href="/#projects" className="hover:text-gray-900">
              Work
            </Link>
            <span>{">"}</span>
            <span className="text-gray-900">{project.title}</span>
          </nav>

          {/* Project Image */}
          <div className="mb-12">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Overview</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              {project.overview.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* Project Details */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">My contribution</h3>
              <p className="text-gray-700 text-lg">{project.contribution}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">The team</h3>
              <p className="text-gray-700 text-lg">{project.team}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Year</h3>
              <p className="text-gray-700 text-lg">{project.year}</p>
            </div>
          </div>

          {/* Technologies */}
          <section className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-4">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Key Features */}
          <section className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Key Features</h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-600 mr-3">•</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Outcome */}
          <section className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Outcome</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{project.outcome}</p>
          </section>

          {/* Links */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href={project.github} target="_blank">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
                <Github className="mr-3 h-5 w-5" />
                View Code
              </Button>
            </Link>
            <Link href={project.live} target="_blank">
              <Button size="lg" className="text-lg px-8 py-4">
                <ExternalLink className="mr-3 h-5 w-5" />
                Live Demo
              </Button>
            </Link>
          </div>

          {/* Back Button */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link href="/">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
                <ArrowLeft className="mr-3 h-4 w-4" />
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
  return [{ slug: "nautichat" }, { slug: "asl-go" }, { slug: "retro-pong" }]
}
