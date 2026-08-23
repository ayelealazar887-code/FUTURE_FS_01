import React from "react";
import {
  FaServer,
  FaDatabase,
  FaLaptopCode,
  FaCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";
import about from "../assets/about.png";

function About() {
  const services = [
    {
      icon: FaLaptopCode,
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces using React, JavaScript, HTML, CSS, and Tailwind CSS.",
    },
    {
      icon: FaServer,
      title: "Backend Development",
      description:
        "Developing secure and scalable APIs and backend services using Node.js, Express, and Go.",
    },
    {
      icon: FaDatabase,
      title: "Database Development",
      description:
        "Designing and managing reliable databases using PostgreSQL, MongoDB, and SQL.",
    },
  ];

  const technologies = [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "Go",
    "PostgreSQL",
    "MongoDB",
    "Git",
    "GitHub",
  ];

  return (
    <section
      id="about"
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
            Get To Know Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </motion.div>


        <div className="grid lg:grid-cols-2 gap-16 items-center">


          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">

    

              <div className="absolute inset-0 bg-blue-600/20 dark:bg-blue-500/20 rounded-3xl blur-3xl"></div>

              <div className="absolute -top-5 -left-5 w-24 h-24 border-t-4 border-l-4 border-blue-600 rounded-tl-3xl"></div>

              <div className="absolute -bottom-5 -right-5 w-24 h-24 border-b-4 border-r-4 border-blue-600 rounded-br-3xl"></div>


              <motion.img
                src={about}
                alt="Alazar - Full-Stack Developer"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative w-72 h-80 md:w-80 md:h-96 object-cover rounded-3xl border-4 border-white dark:border-gray-800 shadow-2xl"
              />


              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl px-5 py-4 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center gap-3">

                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">
                      2+
                    </span>
                  </div>

                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">
                      Years
                    </p>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Experience
                    </p>
                  </div>

                </div>
              </motion.div>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              I'm a passionate{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Full-Stack Developer
              </span>
            </h3>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
              I am a Full-Stack Developer passionate about building
              modern, scalable, and user-friendly web applications. I
              enjoy transforming ideas into real-world digital products
              that provide meaningful experiences for users.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
              My experience covers both frontend and backend development,
              allowing me to build complete applications from the user
              interface to APIs, server-side logic, and databases.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I continuously learn new technologies and improve my
              development skills while focusing on clean code,
              performance, security, and responsive design.
            </p>


            <div className="grid sm:grid-cols-2 gap-4 mt-8">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600 flex-shrink-0" />

                <span className="text-gray-700 dark:text-gray-300">
                  Clean & Maintainable Code
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600 flex-shrink-0" />

                <span className="text-gray-700 dark:text-gray-300">
                  Responsive Design
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600 flex-shrink-0" />

                <span className="text-gray-700 dark:text-gray-300">
                  Scalable Applications
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600 flex-shrink-0" />

                <span className="text-gray-700 dark:text-gray-300">
                  Problem Solving
                </span>
              </div>

            </div>

          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-24"
        >

          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-10">
            What I Do
          </h3>

          <div className="grid md:grid-cols-3 gap-6">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
                >

                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30 mb-5">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>

                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h4>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {service.description}
                  </p>

                </motion.div>
              );
            })}

          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Technologies I Work With
          </h3>

          <div className="flex flex-wrap justify-center gap-3">

            {technologies.map((technology) => (
              <span
                key={technology}
                className="px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {technology}
              </span>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;