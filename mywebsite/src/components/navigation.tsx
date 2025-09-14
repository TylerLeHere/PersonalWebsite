import { Github, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full nav-animated-bg backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-white shadow-sm">
              <Image
                src="/images/mylogo.png"
                alt="Tyler Le Logo"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link href="#projects" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              Projects
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              About
            </Link>
            <Link href="#experience" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              Experience
            </Link>

            {/* Social Icons */}
            <Link
              href="https://github.com/TylerLeHere"
              target="_blank"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/tyler-le-36331b1a7/"
              target="_blank"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
