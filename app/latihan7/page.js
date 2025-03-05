"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Code, Terminal, Database, Menu } from "lucide-react";

export default function MyProjects() {
  const [activeTitle, setActiveTitle] = useState("Hello I'm Solihin");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });

    const sections = document.querySelectorAll(".section-title");
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveTitle(visibleSection.target.getAttribute("data-title"));
        }
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const projects = [
    {
      title: "E-Commerce Website",
      description: "A fully functional e-commerce platform built with Next.js and Tailwind CSS.",
      image: "/projek1.png",
      tags: ["Next.js", "Tailwind CSS", "MongoDB"],
      link: "https://example.com",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects and skills.",
      image: "/projek2.png",
      tags: ["React", "Framer Motion", "Vercel"],
      link: "https://example.com",
    },
    {
      title: "Task Management App",
      description: "A Kanban-style task management application for better productivity.",
      image: "/task-app.jpg",
      tags: ["React", "Firebase", "Material UI"],
      link: "https://example.com",
    },
  ];

  return (
    <section className="bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="bg-gray-800 bg-opacity-90 px-6 py-3 fixed top-4 inset-x-0 mx-auto w-fit z-50 shadow-md rounded-full flex justify-between items-center">

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          <Menu size={24} className="text-white" />
        </button>
        <ul className={`md:flex gap-6 ${menuOpen ? "block" : "hidden"} md:block`}>
          <li><a href="#about" className="text-gray-300 hover:text-white">About</a></li>
          <li><a href="#skills" className="text-gray-300 hover:text-white">Skills</a></li>
          <li><a href="#projects" className="text-gray-300 hover:text-white">Projects</a></li>
        </ul>
      </nav>


      

      <div className="container mx-auto px-4 sm:px-6 pt-20">
       {/* Profil Header */}
        <div id="about" className="text-center mb-16 py-10" data-aos="fade-down">
          <div className="flex justify-center">
            <img 
              src="/profile.jpg" 
              alt="Profile" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-gray-700 object-cover"
            />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mt-4">
            Hello I'm <span className="text-blue-400">Suryana</span>.
          </h1>
          <p className="text-gray-400 text-lg mt-2">
            Saya seorang pengembang front-end dengan pengalaman dalam HTML, CSS, JavaScript, dan framework seperti React dan Next.js. Saya senang membangun antarmuka yang interaktif dan responsif.
          </p>
        </div>


        {/* Projects */}
        <div className="flex flex-col gap-6 items-center">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg w-full max-w-2xl flex flex-col md:flex-row items-center gap-4" data-aos="fade-up">
              {/* Image */}
              <div className="rounded-lg overflow-hidden w-full md:w-1/3" data-aos="zoom-in">
                <img src={project.image} alt={project.title} className="w-full object-cover" />
              </div>

              {/* Text Content */}
              <div className="w-full md:w-2/3">
                <h3 className="text-lg md:text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm md:text-base">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="bg-gray-700 px-3 py-1 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block mt-4 text-blue-400 hover:underline">
                  Visit Project
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <h2 id="skills" className="text-2xl md:text-3xl font-bold text-center mt-12 mb-26" data-aos="fade-up" data-title="Skills">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-26">
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center" data-aos="fade-up-right">
            <Code size={40} className="mx-auto text-blue-400" />
            <h2 className="text-xl font-semibold mt-4">Front-End</h2>
            <p className="text-gray-300 mt-2">React, Next.js, Tailwind CSS</p>
          </div>

          <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center" data-aos="fade-up">
            <Terminal size={40} className="mx-auto text-green-400" />
            <h2 className="text-xl font-semibold mt-4">Back-End</h2>
            <p className="text-gray-300 mt-2">Node.js, Express, API</p>
          </div>

          <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center" data-aos="fade-up-left">
            <Database size={40} className="mx-auto text-yellow-400" />
            <h2 className="text-xl font-semibold mt-4">Database</h2>
            <p className="text-gray-300 mt-2">MySQL, MongoDB, Firebase</p>
          </div>
        </div>
      </div>
    </section>
  );
}
  