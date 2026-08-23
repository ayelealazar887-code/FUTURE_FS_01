import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaArrowDown,
  FaDownload,
} from "react-icons/fa";
import { motion } from "framer-motion";
import hero from "../assets/hero.png";

function Hero() {
  const socialIcons = [
    {
      icon: FaLinkedin,
      alt: "LinkedIn",
      link: "#",
    },
    {
      icon: FaTwitter,
      alt: "Twitter",
      link: "#",
    },
    {
      icon: FaGithub,
      alt: "GitHub",
      link: "#",
    },
    {
      icon: FaFacebook,
      alt: "Facebook",
      link: "#",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-7xl w-full mx-auto">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* ================= LEFT SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >

            {/* Available for work */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>

              <span className="text-sm font-medium">
                Available for work
              </span>
            </div>

            {/* Greeting */}
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Hi, I'm
            </p>

            {/* Name */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">
              Alazar
              <span className="text-blue-600 dark:text-blue-400">
                .
              </span>
            </h1>

            {/* Profession */}
            <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
              Full-Stack Developer
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              I build modern, responsive, and scalable web applications
              using React, JavaScript, Node.js, Go, PostgreSQL, and
              MongoDB.
            </p>

            {/* ================= STATS ================= */}
            <div className="flex justify-center md:justify-start gap-8 mt-8">

              <div>
                <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  2+
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Years Experience
                </p>
              </div>

              <div className="w-px bg-gray-300 dark:bg-gray-700"></div>

              <div>
                <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  15+
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Projects Completed
                </p>
              </div>

            </div>

            {/* ================= BUTTONS ================= */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">

              {/* Hire Me */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
              >
                Hire Me
              </motion.a>

              {/* Download CV */}
              <motion.a
                href="/Alazar-CV.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <FaDownload className="w-4 h-4" />
                Download CV
              </motion.a>

            </div>

            {/* ================= SOCIAL ICONS ================= */}
            <div className="flex justify-center md:justify-start gap-4 mt-8">

              {socialIcons.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.alt}
                    href={social.link}
                    aria-label={social.alt}
                    whileHover={{
                      scale: 1.2,
                      y: -3,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}

            </div>

          </motion.div>

          {/* ================= RIGHT SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >

            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 bg-blue-600/20 dark:bg-blue-500/20 rounded-full blur-3xl"></div>

              {/* Profile Image */}
              <motion.img
                src={hero}
                alt="Alazar - Full-Stack Developer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-blue-600 shadow-2xl"
              />

            </div>

          </motion.div>

        </div>

        {/* ================= SCROLL INDICATOR ================= */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="flex justify-center mt-16"
        >
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="text-gray-500 dark:text-gray-400"
          >
            <FaArrowDown className="w-5 h-5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;