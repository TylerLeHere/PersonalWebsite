import { Github, Linkedin } from "lucide-react";

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-purple-100 px-4 py-2 flex justify-between items-center">
      
      
      <div className="text-xl font-bold">
        MyPortfolio
      </div>

      
      <div className="flex gap-4">
        <a 
          href="https://github.com/TylerLeHere" 
          target="_blank" 
          rel="noreferrer"
          aria-label="GitHub Profile"
        >
          <Github className="w-6 h-6 hover:text-purple-600 transition" />
        </a>
        <a 
          href="https://www.linkedin.com/in/tyler-le-36331b1a7/" 
          target="_blank" 
          rel="noreferrer"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="w-6 h-6 hover:text-purple-600 transition" />
        </a>
      </div>

    </nav>
  );
}