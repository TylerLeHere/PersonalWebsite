"use client"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Profile Picture - Like Natalie's */}
          <div className="flex justify-center md:justify-start">
            <div className="w-80 h-80 rounded-full overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center border-4 border-white shadow-lg">
              {/* Placeholder for your profile picture */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-400 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-600 text-sm font-medium">Add your photo here</p>
              </div>
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
