import { Github, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Profile Image */}
          <Link href="/" className="flex items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-yellow-200">
              <Image
                src="/placeholder.svg?height=48&width=48"
                alt="Profile"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link href="#projects" className="text-gray-800 hover:text-purple-600 transition-colors font-medium">
              Projects
            </Link>
            <Link href="#about" className="text-gray-800 hover:text-purple-600 transition-colors font-medium">
              About
            </Link>
            <Link href="#experience" className="text-gray-800 hover:text-purple-600 transition-colors font-medium">
              Experience
            </Link>

            {/* Social Icons */}
            <Link
              href="https://github.com/TylerLeHere"
              target="_blank"
              className="text-gray-800 hover:text-purple-600 transition-colors"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/tyler-le-36331b1a7/"
              target="_blank"
              className="text-gray-800 hover:text-purple-600 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
