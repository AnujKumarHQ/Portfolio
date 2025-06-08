"use client"

import { Github, Linkedin, Instagram, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

// Expanded skills list organized by category
const skillCategories = [
  {
    name: "Data Science",
    skills: ["Machine Learning", "Python", "R", "TensorFlow", "PyTorch", "Data Visualization", "Statistical Analysis"],
  },
  {
    name: "Web Development",
    skills: ["React & Next.js", "TypeScript", "Node.js", "GraphQL", "Tailwind CSS", "Three.js", "MongoDB"],
  },
  {
    name: "Tools & Others",
    skills: ["Git & GitHub", "Docker", "AWS", "CI/CD", "Figma", "Agile Methodologies"],
  },
]

export default function AboutSection() {
  const [activeCategory, setActiveCategory] = useState(0)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const skillItem = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  // Blood drip animation for decorative elements
  const bloodDrip = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: { duration: 2, ease: "easeOut", delay: 0.5 },
    },
  }

  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-1/3 h-1 bg-gradient-to-r from-red-700 to-transparent"></div>

        {/* Animated blood cells */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-red-600/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, 10, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            className="flex items-center justify-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
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
            >
              <span className="text-red-600">About</span> Me
              <motion.span
                className="absolute -bottom-2 left-0 h-[2px] bg-red-600"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </motion.h2>
            <motion.div
              className="h-[1px] bg-red-700/50 w-16 md:w-32"
              animate={{ width: ["0%", "100%"] }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          <div className="grid md:grid-cols-[1.5fr_1fr] gap-12">
            <motion.div
              className="space-y-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                variants={fadeIn}
                className="relative p-6 bg-gradient-to-br from-gray-900 to-black rounded-lg border border-gray-800 shadow-xl"
              >
                <motion.div
                  className="absolute -top-3 -left-3 w-6 h-6 bg-red-600 rounded-full"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                />

                <p className="text-gray-300 leading-relaxed text-lg">
                  I am a passionate <span className="text-red-500 font-semibold">Data Scientist</span> and{" "}
                  <span className="text-red-500 font-semibold">Full Stack Web Developer</span> with a keen interest in
                  creating elegant solutions to complex problems. My work combines analytical thinking with creative
                  design to deliver impactful results.
                </p>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="relative p-6 bg-gradient-to-br from-gray-900 to-black rounded-lg border border-gray-800 shadow-xl"
              >
                <motion.div
                  className="absolute -top-3 -right-3 w-6 h-6 bg-red-600 rounded-full"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                />

                <p className="text-gray-300 leading-relaxed text-lg">
                  With expertise in machine learning, data visualization, and web development, I bring a unique
                  perspective to every project. I thrive in challenging environments and am constantly exploring new
                  technologies to expand my skillset.
                </p>
              </motion.div>

              <motion.div variants={fadeIn} className="pt-6">
                <h3 className="text-xl font-semibold mb-6 text-red-500 flex items-center">
                  <motion.span
                    className="inline-block mr-2"
                    animate={{ rotate: [0, 15, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                  >
                    🔗
                  </motion.span>
                  Connect With Me
                </h3>
                <div className="flex space-x-6">
                  <motion.a
                    href="https://github.com/AnujKumarHQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="absolute -inset-2 bg-gradient-to-r from-red-900 to-red-600 rounded-full opacity-0 group-hover:opacity-70 blur-md transition-all duration-300"></div>
                    <div className="relative bg-gray-900 p-3 rounded-full">
                      <Github className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
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
                    <div className="relative bg-gray-900 p-3 rounded-full">
                      <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
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
                    <div className="relative bg-gray-900 p-3 rounded-full">
                      <Instagram className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
                    </div>
                    <span className="sr-only">Instagram</span>
                  </motion.a>
                  <motion.a
                    href="mailto:anuj@example.com"
                    className="group relative"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="absolute -inset-2 bg-gradient-to-r from-red-900 to-red-600 rounded-full opacity-0 group-hover:opacity-70 blur-md transition-all duration-300"></div>
                    <div className="relative bg-gray-900 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
                    </div>
                    <span className="sr-only">Email</span>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 border-2 border-red-700 transform translate-x-4 translate-y-4 rounded-lg"></div>
              <motion.div
                className="relative z-10 bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-800"
                whileHover={{
                  boxShadow: "0 20px 25px -5px rgba(139, 0, 0, 0.2), 0 10px 10px -5px rgba(139, 0, 0, 0.1)",
                }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-red-500">Skills</h3>

                {/* Category tabs */}
                <div className="flex mb-6 space-x-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-red-900 scrollbar-track-gray-800">
                  {skillCategories.map((category, idx) => (
                    <motion.button
                      key={idx}
                      className={`px-4 py-2 rounded-md text-sm whitespace-nowrap transition-all ${
                        activeCategory === idx
                          ? "bg-red-900/50 text-white"
                          : "bg-gray-800/50 text-gray-400 hover:bg-gray-800"
                      }`}
                      onClick={() => setActiveCategory(idx)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {category.name}
                    </motion.button>
                  ))}
                </div>

                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  {skillCategories[activeCategory].skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Decorative blood drip */}
                <div className="absolute -bottom-4 right-8 w-1 h-16">
                  <motion.div
                    className="w-full bg-gradient-to-b from-red-700 to-red-900 rounded-b-full"
                    variants={bloodDrip}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
