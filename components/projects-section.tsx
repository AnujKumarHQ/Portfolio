"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Code, Eye } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    title: "Parkison Detection & Advisor",
    description:
      " predicting Parkinson's disease using vocal features from the UCI dataset.it features a Tkinter interface with manual input and batch prediction modes, leveraging a Random Forest model.",
    tags: ["Python", "Visualization", "ML", "Analysis"],
    github: "https://github.com/AnujKumarHQ/Parkinson-Detection-Advisor",
    demo: "https://sentiment-demo.example.com",
    color: "from-red-900/40 to-purple-900/20",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack web application with user authentication, product catalog, and payment processing.",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/AnujKumarHQ/Brainwave-Matrix-Solutions-Hospital-Management-System",
    demo: "https://ecommerce-demo.example.com",
    color: "from-red-900/40 to-gray-800",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Object Detection Model",
    description:
      "This project integrates a C++-based user interface with backend logic implemented in Python. The UI was built using C++ to ensure performance and responsiveness.",
    tags: ["Faster R-CNN", "ML", "Python", "C++"],
    github: "https://github.com/AnujKumarHQ/Object-Detection",
    demo: "https://dataviz-demo.example.com",
    color: "from-red-800/40 to-black",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex items-center justify-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="h-[1px] bg-red-700/50 w-16 md:w-32"
            animate={{ width: ["0%", "100%"] }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.h2
            className="text-3xl md:text-5xl font-bold mx-4 md:mx-8 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-red-600">My</span> Projects
            <motion.span
              className="absolute -bottom-2 left-0 h-[2px] bg-red-600"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.h2>
          <motion.div
            className="h-[1px] bg-red-700/50 w-16 md:w-32"
            animate={{ width: ["0%", "100%"] }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(139, 0, 0, 0.1), 0 10px 10px -5px rgba(139, 0, 0, 0.04)",
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden border border-gray-800 shadow-lg hover:shadow-red-900/30 transition-all group cursor-pointer relative"
            >
              {/* Project image with overlay */}
              <div className="h-48 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-black/80 to-transparent z-10"
                  initial={{ opacity: 0.6 }}
                  whileHover={{ opacity: 0.4 }}
                />
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Hover overlay with actions */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-red-900/80 to-black/70 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-900/80 p-3 rounded-full text-white hover:bg-red-700 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Code className="w-5 h-5" />
                      <span className="sr-only">View Code</span>
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-900/80 p-3 rounded-full text-white hover:bg-red-700 transition-colors"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Eye className="w-5 h-5" />
                      <span className="sr-only">Live Demo</span>
                    </motion.a>
                  </div>
                </motion.div>

                {/* Blood drip effect */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-900 to-transparent"></div>
              </div>

              <div className="p-6 relative">
                {/* Animated corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-700 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.h3
                  className="text-xl font-bold mb-2 text-white group-hover:text-red-500 transition-colors"
                  initial={{ opacity: 0.9 }}
                  whileHover={{ opacity: 1 }}
                >
                  {project.title}
                </motion.h3>

                <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                      whileHover={{
                        backgroundColor: "rgba(185, 28, 28, 0.2)",
                        color: "#f8f8f8",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-400 hover:text-red-500 transition-colors"
                    whileHover={{ scale: 1.05, x: 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-400 hover:text-red-500 transition-colors"
                    whileHover={{ scale: 1.05, x: 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </motion.a>
                </div>

                {/* Animated corner accent */}
                <motion.div
                  className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red-700 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Pulsing effect when hovered */}
              {hoveredIndex === index && (
                <motion.div
                  className="absolute inset-0 border-2 border-red-600 rounded-lg pointer-events-none"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: [0, 0.5, 0],
                    scale: [0.8, 1.1, 1.2],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
