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
    process?: {
      title: string
      sections: {
        title: string
        content: string
      }[]
    }
    outcome: string
    keyLearning?: {
      title: string
      points: string[]
    }
    images?: {
      src: string
      alt: string
      caption?: string
    }[]
    video?: {
      youtubeId: string
      title: string
      caption?: string
    }
  }
}

export const projectsData: Project[] = [
  {
    id: "nautichat",
    title: "Nautichat",
    description: "AI-powered assistant for Ocean Networks Canada that makes the vast Oceans 3.0 data archive accessible to researchers, students, Indigenous communities, and policymakers through a simple, conversational interface.",
    image: "/images/NautiChatLogo.png",
    color: "bg-blue-100",
    technologies: ["Python", "NLP", "AI/ML", "React", "Node.js", "TensorFlow", "PostgreSQL", "Docker"],
    github: "https://github.com/tylerle/nautichat",
    live: "https://nautichat-demo.com",
    featured: true,
    content: {
      overview: "The Nautichat capstone project was about building an AI-powered assistant for Ocean Networks Canada (ONC). The idea was to make ONC's Oceans 3.0 data archive easier to use by letting people interact with it in plain language. This way, researchers, students, Indigenous communities, and policymakers could find and explore ocean data without needing technical knowledge. My main role was to design and develop an interface that felt simple but still powerful. I wanted the system to feel approachable for first-time users, while still giving researchers the tools they needed to dig deeper into the data.",
      process: {
        title: "Process",
        sections: [
          {
            title: "",
            content: "The system was built on a modern, full-stack architecture. Next.js was chosen for the frontend to create a clean and responsive interface for users. The backend was built with FastAPI, providing a fast and solid foundation for the application's logic. The core of the project's intelligence was an AI system implementing a Retrieval-Augmented Generation (RAG) pipeline, connected to a Qdrant vector database. This setup ensured that the assistant provided answers grounded in specific, relevant information from ONC's data archive. A full CI/CD pipeline using Docker and GitHub Actions was also established to automate the process of building and deploying updates, ensuring a smooth development cycle."
          }
        ]
      },
      outcome: "The result is Nautichat, a fully functional web application that makes complex oceanographic data easy to explore. Users can ask questions in plain English and get back clear answers, complete with data visualizations and source citations. The assistant can handle ambiguous queries by asking clarifying questions and can generate the API calls needed for users to download the datasets they're interested in. A secure admin portal was also delivered, fulfilling a key client requirement for managing the system's knowledge base.",
      keyLearning: {
        title: "Key Learnings",
        points: [
          "Full-Stack AI Development: The project required building an end-to-end AI system, connecting a Next.js frontend, a FastAPI backend, and the PostgreSQL and Qdrant databases that powered the AI model.",
          "DevOps and Deployment: Practical experience in DevOps was applied by setting up an automated CI/CD pipeline with Docker and GitHub Actions to streamline the development and deployment process.",
          "AI System Design: The project involved designing the complex architecture for a hybrid RAG system, including the logic for managing conversation history, retrieving context, and deciding when to use external tools."
        ]
      },
      images: [
        {
          src: "/images/SystemDesign.png",
          alt: "Nautichat Dashboard Interface",
        },
        {
          src: "/images/LLM Workflow.png",
          alt: "Chat Interface",
        },
        {
          src: "/images/Backend: Continuous Deployment.png",
          alt: "Backend Continuous Deployment Interface",
        }
      ],
      video: {
        youtubeId: "yQhXODCGryM",
        title: "Demo",
      }
    }
  },
  {
    id: "asl-go",
    title: "ASL Go",
    description: "iOS app to learn ASL with Machine Learning and friendly UI",
    image: "",
    color: "bg-green-100",
    technologies: ["Swift", "CoreML", "UIKit", "Machine Learning", "AVFoundation", "Combine"],
    github: "https://github.com/tylerle/asl-go",
    live: "https://apps.apple.com/app/asl-go",
    featured: true,
    content: {
      overview: "In this project case study, I will be sharing my experience designing and developing a mobile app for users to learn American Sign Language. Fostered by MIT's Blueprint hackathon, the goal was to help anyone learn and understand ASL by using AI and other features, thus enabling people to communicate with the deaf community and cultivate more inclusivity.",
      process: {
        title: "Process",
        sections: [
          {
            title: "",
            content: "The design process for the ASL app involved several key stages, starting with creating the initial user interface and sign up/login pages, utilizing Firebase for secure authentication and data storage. I focused on designing an accessible and aesthetically pleasing home page where all features resided. This was one of my first deep dives into UI/UX design, requiring research into optimal color palettes, icons, and illustrations for the app's purpose and audience. Throughout the hackathon, I worked closely with my team to ensure productive contribution through designated features and incorporated their visions into the design. The final app design differed from my initial Figma mockups, teaching me the importance of considering edge cases and potential user screens early in the design stage."
          }
        ]
      },
      outcome: "The final outcome of ASL Go was a user-friendly and functional downloadable iOS app that fared well in the hackathon. Users were able to successfully login and signup for the app, and have access to ASL flashcards to learn the alphabet. The Machine Learning feature was functional for a range of words in which the user would hold up their hand and the app would tell them what word they were signing. In the future, the team would like to improve upon the statistics and profile page, to track the user's progress and connect it to their account.",
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