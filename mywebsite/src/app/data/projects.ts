// This file contains all your project information
export interface Project {
  id: string
  title: string
  description: string
  image: string
  color: string
  technologies: string[]
  github?: string
  live?: string
  featured: boolean
}

export const projectsData: Project[] = [
  {
    id: "nautichat",
    title: "Nautichat",
    description: "A powerful NLP-AI system built for Ocean Network Canada",
    image: "/images/NautiChatLogo.png",
    color: "bg-blue-100",
    technologies: ["Python", "NLP", "AI/ML", "React", "Node.js"],
    github: "https://github.com/yourusername/nautichat",
    live: "https://nautichat-demo.com",
    featured: true,
  },
  {
    id: "asl-go",
    title: "ASL Go",
    description: "iOS app to learn ASL with Machine Learning and friendly UI",
    image: "/images/NautiChatLogo.png",
    color: "bg-green-100",
    technologies: ["Swift", "CoreML", "UIKit", "Machine Learning"],
    github: "https://github.com/yourusername/asl-go",
    live: "https://apps.apple.com/app/asl-go",
    featured: true,
  },
]

// Get only featured projects for homepage
export const getFeaturedProjects = () => {
  return projectsData.filter((project) => project.featured)
}

// Get project by ID for detail pages
export const getProjectById = (id: string) => {
  return projectsData.find((project) => project.id === id)
}
