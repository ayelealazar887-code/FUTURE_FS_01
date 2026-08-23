import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

  };

  return (
    <section
      id="contact"
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
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Contact Me
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-gray-600 dark:text-gray-400">
            Have a project idea, job opportunity, or just want to say
            hello? Feel free to send me a message.
          </p>

          <div className="w-20 h-1 bg-blue-600 mx-auto mt-5 rounded-full"></div>
        </motion.div>


        <div className="grid lg:grid-cols-2 gap-12">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-5">
              Let's work together
            </h3>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              I'm always interested in discussing new projects,
              opportunities, and ideas. If you have something in mind,
              send me a message and I'll get back to you as soon as
              possible.
            </p>

          

            <div className="flex items-center gap-4 mb-6">

              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30">
                <FaEnvelope className="text-blue-600 dark:text-blue-400" />
              </div>

              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Email
                </p>

                <a
                  href="mailto:your-email@example.com"
                  className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
                >
                  ayelealazar887@gmail.com
                </a>
              </div>

            </div>

         
            <div className="flex items-center gap-4 mb-6">

              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30">
                <FaPhone className="text-blue-600 dark:text-blue-400" />
              </div>

              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Phone
                </p>

                <a
                  href="tel:+251000000000"
                  className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
                >
                  +251 938190919
                </a>
              </div>

            </div>


            <div className="flex items-center gap-4 mb-8">

              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30">
                <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400" />
              </div>

              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Location
                </p>

                <p className="text-gray-900 dark:text-white">
                  Ethiopia
                </p>
              </div>

            </div>


            <div className="flex gap-4">

              <a
                href="https://github.com/ayelealazar887-code/FUTURE_FS_01"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/alazar-ayele"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
              >
                <FaLinkedin />
              </a>

            </div>

          </motion.div>

          

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl"
          >

            <div className="mb-5">

              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Your Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            <div className="mb-5">

              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            <div className="mb-5">

              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What is this about?"
                required
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            <div className="mb-6">

              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />

            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
            >
              <FaPaperPlane />

              Send Message
            </motion.button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;