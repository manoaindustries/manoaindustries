'use client';

import React, { useState } from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black bg-opacity-95 z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-light tracking-widest">
            MĀNOA INDUSTRIES
          </div>
          <div className="flex gap-8 text-sm tracking-wider">
            <a href="#about" className="hover:text-gray-400 transition">ABOUT</a>
            <a href="#capabilities" className="hover:text-gray-400 transition">CAPABILITIES</a>
            <a href="#projects" className="hover:text-gray-400 transition">PROJECTS</a>
            <a href="#contact" className="hover:text-gray-400 transition">CONTACT</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-50"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}></div>
        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="text-6xl md:text-7xl font-light mb-6 tracking-wide">
            Engineering Innovation<br />Through Research and Design
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide">
            Multidisciplinary engineering at the intersection of R&D and creative engineering
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-light mb-16 tracking-wide border-b border-gray-700 pb-4">
            OUR STORY
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-light mb-4 text-gray-300">Who We Are</h3>
              <p className="text-lg leading-relaxed text-gray-400">
                MĀNOA INDUSTRIES is a multidisciplinary engineering company founded by Jonavan Kaaiwela Gonzalez that operates at the intersection of Research and Development and Creative Engineering. We explore and advance technology through experimentation, design, and technical precision, developing systems and products that embody innovation and performance.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-4 text-gray-300">Our Philosophy</h3>
              <p className="text-lg leading-relaxed text-gray-400">
                We view engineering as both a science and a creative discipline. Our work focuses on transforming ambitious ideas into functional realities through rigorous research, rapid prototyping, and inventive problem-solving. We bridge the gap between conceptual design and practical engineering, driving innovation that challenges convention.
              </p>
            </div>
          </div>

          <div className="bg-gray-900 p-12 border border-gray-800">
            <h3 className="text-3xl font-light mb-6 tracking-wide">Mission</h3>
            <p className="text-xl leading-relaxed text-gray-300">
              To lead through innovation by combining research, creativity, and engineering excellence to shape technologies that move the world forward.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-light mb-16 tracking-wide border-b border-gray-700 pb-4">
            CAPABILITIES
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Consulting",
                description: "Strategic technical guidance and expert advisory services for complex engineering challenges and innovation initiatives."
              },
              {
                title: "Project-Based Engineering",
                description: "End-to-end engineering solutions for defined projects, from concept development through implementation and delivery."
              },
              {
                title: "Research & Development",
                description: "Exploratory research and experimental development pushing the boundaries of what's technically possible."
              },
              {
                title: "Creative Engineering",
                description: "Innovative solutions that blend artistic vision with technical expertise to create unique, groundbreaking systems."
              },
              {
                title: "Product Development",
                description: "Complete product lifecycle management from ideation and prototyping to manufacturing readiness and market launch."
              }
            ].map((capability, index) => (
              <div key={index} className="border border-gray-800 p-8 hover:border-gray-600 transition group">
                <h3 className="text-2xl font-light mb-4 tracking-wide group-hover:text-gray-300 transition">
                  {capability.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-light mb-16 tracking-wide border-b border-gray-700 pb-4">
            PROJECTS & INNOVATION
          </h2>
          
          <div className="text-center py-16">
            <div className="inline-block border border-gray-700 px-12 py-8">
              <p className="text-2xl font-light text-gray-400 mb-4">
                Innovation In Progress
              </p>
              <p className="text-gray-500">
                Featured projects and case studies coming soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-light mb-16 tracking-wide border-b border-gray-700 pb-4">
            GET IN TOUCH
          </h2>
          
          <div className="space-y-8">
            <p className="text-2xl font-light text-gray-300">
              Ready to push the boundaries of what's possible?
            </p>
            <p className="text-xl text-gray-400">
              Contact us to discuss your next innovation challenge.
            </p>
            <div className="pt-8">
              <a 
                href="mailto:info@manoaindustries.com" 
                className="inline-block border-2 border-white px-12 py-4 text-lg tracking-widest hover:bg-white hover:text-black transition"
              >
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <div className="mb-4 md:mb-0">
            <p className="tracking-widest">© 2025 MĀNOA INDUSTRIES</p>
          </div>
          <div className="tracking-wider">
            <p>Founded by Jonavan Kaaiwela Gonzalez</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
