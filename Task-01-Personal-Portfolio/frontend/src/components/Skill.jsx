import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiGo,
  SiPostgresql,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      description: "Building modern and responsive user interfaces.",
      skills: [
        {
          name: "HTML5",
          icon: FaHtml5,
          level: "Advanced",
        },
        {
          name: "CSS3",
          icon: FaCss3Alt,
          level: "Advanced",
        },
        {
          name: "JavaScript",
          icon: FaJs,
          level: "Advanced",
        },
        {
          name: "React",
          icon: FaReact,
          level: "Advanced",
        },
        {
          name: "Tailwind CSS",
          icon: SiTailwindcss,
          level: "Advanced",
        },
      ],
    },

    {
      title: "Backend",
      description: "Developing APIs, servers, and backend applications.",
      skills: [
        {
          name: "Node.js",
          icon: FaNodeJs,
          level: "Advanced",
        },
        {
          name: "Express.js",
          icon: SiExpress,
          level: "Intermediate",
        },
        {
          name: "Go",
          icon: SiGo,
          level: "Intermediate",
        },
      ],
    },

    {
      title: "Database",
      description: "Working with relational and NoSQL databases.",
      skills: [
        {
          name: "PostgreSQL",
          icon: SiPostgresql,
          level: "Intermediate",
        },
        {
          name: "MongoDB",
          icon: SiMongodb,
          level: "Intermediate",
        },
        {
          name: "MySQL",
          icon: SiMysql,
          level: "Intermediate",
        },
      ],
    },

    {
      title: "Tools & DevOps",
      description: "Development tools and version control.",
      skills: [
        {
          name: "Git",
          icon: FaGitAlt,
          level: "Advanced",
        },
        {
          name: "GitHub",
          icon: FaGithub,
          level: "Advanced",
        },
        {
          name: "Docker",
          icon: FaDocker,
          level: "Intermediate",
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-white dark:bg-gray-950"
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
            My Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Skills & Technologies
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-gray-600 dark:text-gray-400">
            Technologies and tools I use to build modern, scalable,
            responsive, and high-performance applications.
          </p>

          <div className="w-20 h-1 bg-blue-600 mx-auto mt-5 rounded-full"></div>
        </motion.div>

       

        <div className="grid md:grid-cols-2 gap-8">

          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.1,
              }}
              viewport={{ once: true }}
              className="p-7 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg"
            >

             

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {category.title}
              </h3>

              <p className="mt-2 mb-6 text-gray-600 dark:text-gray-400">
                {category.description}
              </p>

             

              <div className="grid sm:grid-cols-2 gap-4">

                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{
                        scale: 1.03,
                        y: -3,
                      }}
                      className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 transition-colors"
                    >

                    

                      <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>

                     

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {skill.name}
                        </h4>

                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {skill.level}
                        </p>
                      </div>

                    </motion.div>
                  );
                })}

              </div>
            </motion.div>
          ))}

        </div>


        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 p-8 md:p-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center shadow-2xl"
        >

          <h3 className="text-3xl font-bold mb-4">
            Full-Stack Development
          </h3>

          <p className="max-w-3xl mx-auto text-blue-100 leading-relaxed">
            I can work across the entire application stack — from
            designing responsive interfaces and building REST APIs to
            managing databases and deploying applications.
          </p>

          <a
            href="#projects"
            className="inline-block mt-6 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            View My Projects
          </a>

        </motion.div>

      </div>
    </section>
  );
}

export default Skills;