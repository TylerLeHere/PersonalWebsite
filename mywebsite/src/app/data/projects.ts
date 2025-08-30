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
  // This field will hold your detailed case study text
  content?: string;
}

export const projectsData: Project[] = [
  {
    id: "nautichat",
    title: "Nautichat",
    description: "A powerful NLP-AI system built for Ocean Network Canada",
    image: "/images/nautichat.png", // Use a real image path
    color: "bg-blue-100",
    technologies: ["Python", "NLP", "AI/ML", "React", "Node.js", "TensorFlow"],
    github: "https://github.com/yourusername/nautichat",
    live: "https://nautichat-demo.com",
    featured: true,
    content: `
## Overview
Nautichat is an advanced Natural Language Processing and AI system developed for Ocean Network Canada to revolutionize marine data analysis and communication. This project combines cutting-edge machine learning techniques with intuitive user interfaces to make complex oceanographic data accessible to researchers and the public.

The system processes vast amounts of marine sensor data, weather patterns, and research documentation to provide intelligent insights and automated reporting capabilities.

### Contribution
Full-stack development and AI/ML implementation.

### The Team
3 developers, 2 marine scientists.

### Outcome
Nautichat successfully streamlined Ocean Network Canada's data analysis workflow, reducing query response time by 75%.
`
  },
  {
    id: "asl-go",
    title: "ASL Go",
    description: "iOS app to learn ASL with Machine Learning and friendly UI",
    image: "/images/asl-go.png", // Use a real image path
    color: "bg-green-100",
    technologies: ["Swift", "CoreML", "UIKit", "Machine Learning"],
    github: "https://github.com/yourusername/asl-go",
    live: "https://apps.apple.com/app/asl-go",
    featured: true,
    content: `
## Overview
In this project case study, I will be sharing my experience designing and developing a mobile app for users to learn American Sign Language. Fostered by MIT's Blueprint hackathon, the goal was to help anyone learn and understand ASL by using AI and other features.

Throughout the design process, I focused on creating an intuitive yet simple user interface that would enhance the overall user experience and encourage the user to continue learning.

### Contribution
Design with Figma.

### The Team
4 co-creators.

### Outcome
The final outcome of ASL Go was a user-friendly and functional downloadable iOS app that fared well in the hackathon. Users were able to successfully login and signup for the app, and have access to ASL flashcards to learn the alphabet.
`
  },
];

// Get only featured projects for homepage
export const getFeaturedProjects = () => {
  return projectsData.filter((project) => project.featured);
};

// Get project by ID for detail pages
export const getProjectById = (id: string) => {
  return projectsData.find((project) => project.id === id);
};