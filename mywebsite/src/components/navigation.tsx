import { Github, Linkedin } from "lucide-react";

export function Navigation() {
  return (
    // Add dark mode classes for the background and border
    <nav className="fixed top-0 w-full 
                   bg-white/80 dark:bg-gray-900/80 
                   backdrop-blur-md z-50 
                   border-b border-purple-100 dark:border-white/10 
                   px-4 py-2 flex justify-between items-center">
      
      {/* Add dark mode class for the text color */}
      <div className="text-xl font-bold text-gray-900 dark:text-gray-100">
        MyPortfolio
      </div>

      <div className="flex gap-4">
        <a 
          href="https://github.com/TylerLeHere" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          {/* Icons inherit color, but we can be explicit */}
          <Github className="w-6 h-6 text-gray-800 dark:text-gray-200 hover:text-purple-600 transition" />
        </a>
        <a 
          href="https://www.linkedin.com/in/tyler-le-36331b1a7/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="w-6 h-6 text-gray-800 dark:text-gray-200 hover:text-purple-600 transition" />
        </a>
      </div>

    </nav>
  );
}