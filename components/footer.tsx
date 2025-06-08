"use client"

import { Github, Linkedin, Heart, Instagram } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-gray-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-900/30 to-transparent"></div>

        {/* Animated particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 20 - 10],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="text-2xl font-bold mb-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-red-600">A</span>nuj <span className="text-red-600">K</span>umar
            </motion.div>
            <p className="text-gray-500 text-sm flex items-center">
              &copy; {new Date().getFullYear()} All rights reserved. Made with
              <motion.span
                className="inline-block mx-1 text-red-600"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                <Heart className="w-4 h-4 fill-current" />
              </motion.span>
              and code
            </p>
          </motion.div>

          <motion.div
            className="flex space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.a
              href="https://github.com/AnujKumarHQ"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-red-900 to-red-600 rounded-full opacity-0 group-hover:opacity-70 blur-md transition-all duration-300"></div>
              <div className="relative bg-gray-900 p-2 rounded-full">
                <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <span className="sr-only">GitHub</span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/anuj-kumar-29ab30298/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-red-900 to-red-600 rounded-full opacity-0 group-hover:opacity-70 blur-md transition-all duration-300"></div>
              <div className="relative bg-gray-900 p-2 rounded-full">
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <span className="sr-only">LinkedIn</span>
            </motion.a>
            <motion.a
              href="https://www.instagram.com/anuj_kumar_2426/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-red-900 to-red-600 rounded-full opacity-0 group-hover:opacity-70 blur-md transition-all duration-300"></div>
              <div className="relative bg-gray-900 p-2 rounded-full">
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <span className="sr-only">LinkedIn</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
