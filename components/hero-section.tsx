"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

const greetings = [
  { language: "English", text: "Hello, I'm Anuj Kumar" },
  { language: "Hindi", text: "नमस्ते, मैं अनुज कुमार हूँ" },
  { language: "Japanese", text: "こんにちは、アヌジ・クマールです" },
  { language: "Chinese", text: "你好，我是阿努杰·库马尔" },
  { language: "Russian", text: "Привет, я Ануж Кумар" },
  { language: "Spanish", text: "Hola, soy Anuj Kumar" },
  { language: "French", text: "Bonjour, je suis Anuj Kumar" },
  { language: "German", text: "Hallo, ich bin Anuj Kumar" },
  { language: "Arabic", text: "مرحبا، أنا أنوج كومار" },
]

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

interface Drip {
  id: number;
  left: string;
  width: string;
  height: string;
  duration: number;
  delay: number;
}

export default function HeroSection() {
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [bloodParticles, setBloodParticles] = useState<Particle[]>([])
  const [drips, setDrips] = useState<Drip[]>([])

  // Generate blood particles
  useEffect(() => {
    const particles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
    }))
    setBloodParticles(particles)
  }, [])

  // Generate blood drips
  useEffect(() => {
    const newDrips = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      left: `${i * 10 + Math.random() * 5}%`,
      width: `${Math.random() * 2 + 0.5}rem`,
      height: `${Math.random() * 8 + 4}rem`,
      duration: Math.random() * 2 + 2,
      delay: Math.random() * 2,
    }))
    setDrips(newDrips)
  }, [])

  // Typing effect
  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isTyping) {
      if (displayText.length < greetings[currentGreetingIndex].text.length) {
        timeout = setTimeout(() => {
          setDisplayText(greetings[currentGreetingIndex].text.slice(0, displayText.length + 1))
        }, 100)
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, 1500)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, displayText.length - 1))
        }, 50)
      } else {
        setCurrentGreetingIndex((currentGreetingIndex + 1) % greetings.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, currentGreetingIndex, isTyping])

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/90 to-black"></div>

      {/* Blood particles */}
      {bloodParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-red-600"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: ["0%", "100%"],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Blood drip effect */}
      <div className="absolute top-0 left-0 w-full h-20">
        {drips.map((drip) => (
          <motion.div
            key={drip.id}
            className="absolute top-0 bg-gradient-to-b from-red-900 to-transparent"
            style={{
              left: drip.left,
              width: drip.width,
              height: 0,
            }}
            animate={{ height: ["0rem", drip.height] }}
            transition={{
              duration: drip.duration,
              delay: drip.delay,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="mb-6">
          <motion.span
            className="inline-block text-sm md:text-base font-medium text-red-500 bg-gray-900/50 px-4 py-1 rounded-full"
            animate={{
              boxShadow: [
                "0 0 0 rgba(185, 28, 28, 0)",
                "0 0 15px rgba(185, 28, 28, 0.7)",
                "0 0 0 rgba(185, 28, 28, 0)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            {greetings[currentGreetingIndex].language}
          </motion.span>
        </motion.div>

        <div className="relative">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-red-600 relative">
              {displayText}
              <span className="animate-pulse absolute">|</span>

              {/* Underline animation */}
              <motion.span
                className="absolute bottom-0 left-0 h-1 bg-red-600"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
              />
            </span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
        >
          Data Scientist & Full Stack Web Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10"
        >
          <motion.button
            className="relative bg-gradient-to-r from-red-800 to-red-600 text-white px-8 py-3 rounded-md shadow-lg shadow-red-900/50 transition-all hover:shadow-red-700/50 font-medium overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 1 }}
            />
            <span className="relative z-10">Explore My Work</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        <motion.div
          className="w-10 h-14 rounded-full border-2 border-red-500 flex justify-center pt-2"
          animate={{
            boxShadow: ["0 0 0 rgba(185, 28, 28, 0)", "0 0 10px rgba(185, 28, 28, 0.7)", "0 0 0 rgba(185, 28, 28, 0)"],
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <motion.div
            className="w-1 h-3 bg-red-500 rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          />
        </motion.div>
        <motion.div
          className="mt-2 text-red-500 text-sm flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <ChevronDown className="w-4 h-4 mr-1" />
          <span>Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  )
}