"use client"

import Link from "next/link"
import { ArrowUp } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center justify-between">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <Link 
              href="#" 
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowUp className="mr-2 h-4 w-4" />
              Back to Top
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Profile Picture */}
          <div className="flex justify-center md:justify-start">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src="/images/Aboutpics.png" 
                alt="Tyler Le - Software Developer"
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: "center top" }}
              />
            </div>
          </div>

          {/* Personal Story - Like Natalie's narrative style */}
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              From a young age, I was always drawn to solving puzzles and building things with my hands. 
              When I wrote my first "Hello World" program in high school, everything changed when I realized 
              coding would become my new <strong>creative outlet</strong> through which I could apply my 
              <strong>logical mindset</strong>. Since then, I have been curious about technology and love 
              combining the two.
            </p>
            <p>
              My sketch book is full of ideas and designs, and I enjoy bringing them to life through 
              programming and development. I approach my work with a creative spirit, always looking for 
              ways to solve real-life problems and bring about <strong>accessibility</strong> within 
              digital media.
            </p>
            <p>
              For these reasons, I love standing at the intersection of Software Engineering and UX design, 
              a combination that I am genuinely passionate about and hope to make <strong>positive impact</strong> 
              with in the world. I am excited to continue growing through my studies and work experiences, 
              and am thrilled to see where my journey takes me next!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
