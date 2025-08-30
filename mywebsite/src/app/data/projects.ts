// Enhanced projects data with rich content and metadata
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
  // Enhanced content structure
  content: {
    overview: string
    problem: string
    solution: string
    features: string[]
    challenges: string[]
    technicalHighlights: string[]
    outcome: string
    metrics?: {
      label: string
      value: string
    }[]
    images?: {
      src: string
      alt: string
      caption?: string
    }[]
  }
  // Project metadata
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
    description: "A powerful NLP-AI system built for Ocean Network Canada",
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
      overview: "Nautichat is an advanced Natural Language Processing and AI system developed for Ocean Network Canada to revolutionize marine data analysis and communication. This project combines cutting-edge machine learning techniques with intuitive user interfaces to make complex oceanographic data accessible to researchers and the public.",
      
      problem: "Ocean Network Canada researchers were spending countless hours manually analyzing vast amounts of marine sensor data, weather patterns, and research documentation. The existing systems required technical expertise to query data, making it inaccessible to many stakeholders who needed insights for decision-making.",
      
      solution: "We developed an intelligent conversational AI system that allows users to query marine data using natural language. The system processes complex datasets and provides intelligent insights through an intuitive chat interface, democratizing access to oceanographic information.",
      
      features: [
        "Natural language query processing for marine data",
        "Real-time data visualization and analysis",
        "Automated report generation from sensor data",
        "Multi-modal data integration (text, numerical, geospatial)",
        "Intelligent data summarization and insights",
        "RESTful API for third-party integrations"
      ],
      
      challenges: [
        "Processing and understanding domain-specific marine terminology",
        "Handling real-time streaming data from multiple sensor networks",
        "Ensuring accuracy of AI responses for scientific applications",
        "Optimizing query performance across large datasets",
        "Creating an intuitive interface for non-technical users"
      ],
      
      technicalHighlights: [
        "Custom NLP model trained on oceanographic literature and data schemas",
        "Implemented RAG (Retrieval-Augmented Generation) architecture for accurate responses",
        "Built scalable microservices architecture with Docker containerization",
        "Developed real-time data pipeline using Apache Kafka and PostgreSQL",
        "Created interactive dashboards with D3.js and React"
      ],
      
      outcome: "Nautichat successfully streamlined Ocean Network Canada's data analysis workflow, reducing query response time by 75% and increasing data accessibility across research teams. The system now processes over 1,000 queries daily and has become an essential tool for marine research.",
      
      metrics: [
        { label: "Query Response Time Reduction", value: "75%" },
        { label: "Daily Active Queries", value: "1,000+" },
        { label: "Data Sources Integrated", value: "15+" },
        { label: "User Satisfaction Score", value: "4.8/5" }
      ],
      
      images: [
        {
          src: "/images/nautichat-dashboard.png",
          alt: "Nautichat Dashboard Interface",
          caption: "Main dashboard showing real-time marine data visualization"
        },
        {
          src: "/images/nautichat-chat.png",
          alt: "Chat Interface",
          caption: "Natural language query interface with AI responses"
        }
      ]
    }
  },
  {
    id: "asl-go",
    title: "ASL Go",
    description: "iOS app to learn ASL with Machine Learning and friendly UI",
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
      overview: "ASL Go is an innovative iOS application designed to make American Sign Language learning accessible and engaging through machine learning and intuitive user experience design. Developed during MIT's Blueprint hackathon, the app aims to bridge communication gaps and promote inclusivity.",
      
      problem: "Learning American Sign Language traditionally requires in-person instruction or expensive courses, making it inaccessible to many people who want to communicate with the deaf and hard-of-hearing community. Existing learning apps often lack real-time feedback and engaging user experiences.",
      
      solution: "We created an AI-powered mobile app that uses computer vision to recognize hand gestures in real-time, providing instant feedback on ASL signs. The app gamifies the learning experience with interactive lessons, progress tracking, and a friendly user interface that encourages consistent practice.",
      
      features: [
        "Real-time hand gesture recognition using CoreML",
        "Interactive ASL alphabet and common phrases learning",
        "Progress tracking and achievement system",
        "Video demonstrations with slow-motion playback",
        "Practice mode with instant feedback",
        "Offline learning capabilities"
      ],
      
      challenges: [
        "Achieving accurate hand gesture recognition across different lighting conditions",
        "Optimizing machine learning models for mobile performance",
        "Designing an inclusive interface for diverse users",
        "Creating engaging gamification without oversimplifying the learning process",
        "Ensuring app accessibility for users with different abilities"
      ],
      
      technicalHighlights: [
        "Trained custom CoreML model for ASL gesture recognition",
        "Implemented ARKit for enhanced hand tracking accuracy",
        "Built responsive UI with programmatic Auto Layout",
        "Integrated AVFoundation for video recording and playback",
        "Used Combine framework for reactive programming patterns"
      ],
      
      outcome: "ASL Go successfully launched on the App Store and received positive feedback from the deaf community and language learners. The app achieved a 4.7-star rating and has been featured in accessibility app collections. Our hackathon presentation earned recognition for innovation in educational technology.",
      
      metrics: [
        { label: "App Store Rating", value: "4.7/5" },
        { label: "Gesture Recognition Accuracy", value: "92%" },
        { label: "Daily Active Users", value: "500+" },
        { label: "Learning Sessions Completed", value: "10,000+" }
      ],
      
      images: [
        {
          src: "/images/asl-go-home.png",
          alt: "ASL Go Home Screen",
          caption: "Clean and accessible home interface"
        },
        {
          src: "/images/asl-go-practice.png",
          alt: "Practice Mode",
          caption: "Real-time gesture recognition during practice"
        }
      ]
    }
  }
];

// Get only featured projects for homepage
export const getFeaturedProjects = () => {
  return projectsData.filter((project) => project.featured);
};

// Get project by ID for detail pages
export const getProjectById = (id: string) => {
  return projectsData.find((project) => project.id === id);
};

// Get related projects (exclude current project)
export const getRelatedProjects = (currentId: string, limit: number = 2) => {
  return projectsData
    .filter((project) => project.id !== currentId)
    .slice(0, limit);
};