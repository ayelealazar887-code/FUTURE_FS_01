import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiGo } from "react-icons/si";

function Projects() {
  const projects = [
    {
      title: "Personal Portfolio",
      description:
        "A modern and responsive personal portfolio website showcasing my skills, experience, projects, and professional profile.",
      technologies: [
        { name: "React", icon: FaReact },
        { name: "Tailwind CSS", icon: FaReact },
        { name: "JavaScript", icon: FaReact },
      ],
      github: "#",
      live: "#",
      category: "Frontend",
    },

    {
      title: "Client Lead Management System",
      description:
        "A mini CRM system designed to help businesses manage clients, leads, follow-ups, and customer information efficiently.",
      technologies: [
        { name: "React", icon: FaReact },
        { name: "Node.js", icon: FaNodeJs },
        { name: "MongoDB", icon: SiMongodb },
      ],
      github: "#",
      live: "#",
      category: "Full-Stack",
    },

    {
      title: "RSS Aggregator",
      description:
        "A backend application that collects RSS feeds, processes posts concurrently, and provides an API for managing feeds and users.",
      technologies: [
        { name: "Go", icon: SiGo },
        { name: "PostgreSQL", icon: SiPostgresql },
      ],
      github: "#",
      live: "#",
      category: "Backend",
    },

    {
      title: "Business Website",
      description:
        "A professional website designed for a real local business to improve its online presence and make it easier for customers to discover its services.",
      technologies: [
        { name: "React", icon: FaReact },
        { name: "Tailwind CSS", icon: FaReact },
        { name: "JavaScript", icon: FaReact },
      ],
      github: "#",
      live: "#",
      category: "Frontend",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
            My Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Featured Projects
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-gray-600 dark:text-gray-400">
            Here are some of the projects I have built using modern
            frontend, backend, and database technologies.
          </p>

          <div className="w-20 h-1 bg-blue-600 mx-auto mt-5 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700"
            >

              <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center">
                <span className="text-5xl font-bold text-white/20">
                  {index + 1}
                </span>
              </div>


              <div className="p-7">

                <div className="flex items-center justify-between mb-3">

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>

                  <span className="text-xs px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    {project.category}
                  </span>

                </div>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </p>


                <div className="flex flex-wrap gap-2 mt-6">

                  {project.technologies.map((technology) => {
                    const Icon = technology.icon;

                    return (
                      <span
                        key={technology.name}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-300"
                      >
                        <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        {technology.name}
                      </span>
                    );
                  })}

                </div>

                <div className="flex gap-4 mt-7">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-700 transition-colors"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                </div>

              </div>
            </motion.div>
          ))}

        </div>


        <div className="text-center mt-12">

          <a
            href="#contact"
            className="inline-block px-7 py-3 rounded-lg border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-colors"
          >
            Have a project in mind? Let's work together
          </a>

        </div>

      </div>
    </section>
  );
}

export default Projects;