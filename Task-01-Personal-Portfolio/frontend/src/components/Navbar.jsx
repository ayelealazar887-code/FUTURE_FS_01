import { useState } from "react";
import {
  FaHome,
  FaCode,
  FaEnvelope,
  FaProjectDiagram,
  FaUser,
  FaCertificate,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Navbar({ darkMode, toggleDarkMode }) {
  const [activeTab, setActiveTab] = useState("Home");

  const navItems = [
    { name: "Home", link: "#home", icon: FaHome },
    { name: "About", link: "#about", icon: FaUser },
    { name: "Skills", link: "#skills", icon: FaCode },
    { name: "Certificates", link: "#certificates", icon: FaCertificate },
    { name: "Projects", link: "#projects", icon: FaProjectDiagram },
    { name: "Contact", link: "#contact", icon: FaEnvelope },
  ];

  return (
    <div className="fixed z-50 bottom-0 left-0 right-0 flex justify-center">
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-[95%] max-w-4xl mb-4"
      >
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 px-3 py-2">

          <div className="absolute -top-5 right-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-900 dark:bg-gray-100 transition-colors backdrop-blur-sm"
            >
              {darkMode ? (
                <FaSun className="w-5 h-5 text-yellow-400" />
              ) : (
                <FaMoon className="w-5 h-5 text-gray-900" />
              )}
            </motion.button>
          </div>

          <div className="flex items-center justify-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => setActiveTab(item.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                    activeTab === item.name
                      ? "bg-white text-blue-600"
                      : "text-white hover:bg-white/20"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">
                    {item.name}
                  </span>
                </a>
              );
            })}
          </div>

        </div>
      </motion.nav>
    </div>
  );
}

export default Navbar;