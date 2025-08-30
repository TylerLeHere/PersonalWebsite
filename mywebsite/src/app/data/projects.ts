// mywebsite/src/app/data/projects.ts

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
  content: {
    overview: string
    problem: string
    solution: string
    features: string[]
    challenges: string[]
    technicalHighlights: string[]
    outcome: string
    images?: {
      src: string
      alt: string
      caption?: string
    }[]
  }
  metadata: {
    duration: string
    team: string
    role: string
    category: string
    year: string
  }
}

export const projectsData: Project[] = [
  {
    id: "nautichat",
    title: "Nautichat",
    description: "A friendly AI chatbot I helped build for Ocean Network Canada.",
    image: "/images/nautichat.png",
    color: "bg-blue-100",
    technologies: ["Python", "NLP", "AI/ML", "React", "Node.js", "TensorFlow", "PostgreSQL", "Docker"],
    github: "https://github.com/yourusername/nautichat",
    live: "https://nautichat-demo.com",
    featured: true,
    metadata: {
      duration: "6 months",
      team: "5 members",
      role: "Full-stack Developer & ML Engineer",
      category: "Machine Learning",
      year: "2024"
    },
    content: {
      overview: "Nautichat is an AI-powered chatbot I helped develop for Ocean Network Canada. The goal was to make their vast ocean data more accessible to researchers and the public. It was a really rewarding project that blended machine learning with a user-friendly interface.",
      problem: "Ocean Network Canada had a ton of data, but it was hard for researchers to access it without technical expertise. They were spending a lot of time manually sifting through data, which was slowing down their research.",
      solution: "We built a chatbot that lets users ask questions about the ocean data in plain English. It was a fun challenge to create something that felt natural and intuitive, while still providing powerful insights. Now, anyone can explore the data without needing to be a database expert.",
      features: [
        "Ask questions in natural language",
        "Real-time data visualization",
        "Automated report generation",
        "Integration of text, numerical, and geospatial data",
        "AI-powered data summaries",
        "API for third-party use"
      ],
      challenges: [
        "Teaching the AI to understand specific marine science terms",
        "Handling live data streams from various sensors",
        "Making sure the AI's answers were accurate enough for scientific use",
        "Optimizing performance for large datasets",
        "Designing an interface that was easy for non-technical folks to use"
      ],
      technicalHighlights: [
        "Built a custom NLP model trained on oceanography documents",
        "Used a RAG architecture to ensure the AI gave accurate answers",
        "Created a scalable system with Docker",
        "Developed a real-time data pipeline with Apache Kafka and PostgreSQL",
        "Designed interactive dashboards with D3.js and React"
      ],
      outcome: "Nautichat has made a big difference for Ocean Network Canada. It's cut down the time it takes to get answers from their data by 75% and is now used for over 1,000 queries a day. It feels great to know that our work is helping to accelerate ocean research.",

      images: [
        {
          src: "/images/nautichat-dashboard.png",
          alt: "Nautichat Dashboard Interface",
          caption: "The main dashboard, where you can see real-time ocean data."
        },
        {
          src: "/images/nautichat-chat.png",
          alt: "Chat Interface",
          caption: "The chat interface, where you can ask the AI questions."
        }
      ]
    }
  },
  {
    id: "asl-go",
    title: "ASL Go",
    description: "An iOS app I designed and built to make learning ASL more accessible.",
    image: "/images/asl-go.png",
    color: "bg-green-100",
    technologies: ["Swift", "CoreML", "UIKit", "Machine Learning", "AVFoundation", "Combine"],
    github: "https://github.com/yourusername/asl-go",
    live: "https://apps.apple.com/app/asl-go",
    featured: true,
    metadata: {
      duration: "3 months",
      team: "4 members",
      role: "iOS Developer & UX Designer",
      category: "Mobile App",
      year: "2024"
    },
    content: {
      overview: "ASL Go is an iOS app I helped create during a hackathon to make learning American Sign Language easier and more fun. I'm really proud of how it turned out and the positive feedback we've received.",
      problem: "Learning ASL can be tough. It often requires in-person classes, which can be expensive and hard to find. We wanted to create a more accessible way for people to learn.",
      solution: "We built an app that uses your phone's camera to give you real-time feedback on your signing. I focused on making the design clean and friendly, with gamified lessons to keep you motivated. It was a great experience to work on a project that could have a real impact.",
      features: [
        "Real-time hand gesture recognition",
        "Interactive lessons for the ASL alphabet and common phrases",
        "Progress tracking and achievements",
        "Slow-motion video demonstrations",
        "Practice mode with instant feedback",
        "Offline learning"
      ],
      challenges: [
        "Getting the hand gesture recognition to work well in different lighting",
        "Making sure the machine learning model ran smoothly on a phone",
        "Designing an inclusive and welcoming interface",
        "Balancing gamification with effective learning",
        "Ensuring the app was accessible to everyone"
      ],
      technicalHighlights: [
        "Trained a custom CoreML model for ASL gesture recognition",
        "Used ARKit for better hand tracking",
        "Built a responsive UI with programmatic Auto Layout",
        "Integrated AVFoundation for video playback",
        "Used the Combine framework for reactive programming"
      ],
      outcome: "ASL Go launched on the App Store and got a great response, with a 4.7-star rating. It's even been featured in a few accessibility collections. It was amazing to see our hackathon project come to life and be so well-received.",
      images: [
        {
          src: "/images/asl-go-home.png",
          alt: "ASL Go Home Screen",
          caption: "The home screen, designed to be clean and inviting."
        },
        {
          src: "/images/asl-go-practice.png",
          alt: "Practice Mode",
          caption: "The practice mode, with real-time feedback on your signing."
        }
      ]
    }
  }
];

// This function filters through all your project and return the ones where feature is set to True
export const getFeaturedProjects = () => {
  return projectsData.filter((project) => project.featured);
};

// Get project by ID for detail pages
export const getProjectById = (id: string) => {
  return projectsData.find((project) => project.id === id);
};

// // Get related projects (exclude current project)
// export const getRelatedProjects = (currentId: string, limit: number = 2) => {
//   return projectsData
//     .filter((project) => project.id !== currentId)
//     .slice(0, limit);
// };