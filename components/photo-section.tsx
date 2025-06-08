"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  left: string;
  top: string;
  y: number[];
  opacity: number[];
  scale: number[];
  duration: number;
  delay: number;
}

interface BloodCell {
  id: number;
  left: string;
  duration: number;
  delay: number;
}

interface BloodDrip {
  id: number;
  left: string;
  delay: number;
  height: string;
}

export default function PhotoSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [bloodCells, setBloodCells] = useState<BloodCell[]>([]);
  const [bloodDrips, setBloodDrips] = useState<BloodDrip[]>([]);

  // Generate background particles, blood cells, and blood drips on client side
  useEffect(() => {
    // Background particles
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      y: [0, Math.random() * 50 - 25],
      opacity: [0.2, 0.5, 0.2],
      scale: [1, 1.5, 1],
      duration: 3 + Math.random() * 5,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);

    // Animated blood cells
    const newBloodCells = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 2,
    }));
    setBloodCells(newBloodCells);

    // Blood drips
    const newBloodDrips = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      left: `${10 + i * 20}%`,
      delay: i * 0.2,
      height: `${Math.random() * 40 + 60}%`,
    }));
    setBloodDrips(newBloodDrips);
  }, []);

  return (
    <section id="photo" className="py-24 bg-black relative overflow-hidden">
      {/* Red accent */}
      <div className="absolute top-0 right-0 w-1/3 h-1 bg-gradient-to-l from-red-700 to-transparent"></div>

      {/* Background particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-red-600/30 rounded-full"
          style={{
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: particle.y,
            opacity: particle.opacity,
            scale: particle.scale,
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
          }}
        />
      ))}

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
            <span className="text-red-600">Photo</span> Gallery
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
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="relative mx-auto max-w-md">
            {/* Blood frame effect */}
            <motion.div
              className="absolute inset-0 border-4 border-red-900 transform rotate-3 rounded-lg"
              animate={{ rotate: isHovered ? 6 : 3 }}
              transition={{ duration: 0.4 }}
            >
              {/* Blood drips from frame */}
              {bloodDrips.map((drip) => (
                <motion.div
                  key={drip.id}
                  className="absolute top-full w-1 bg-red-900"
                  style={{ left: drip.left }}
                  initial={{ height: 0 }}
                  animate={{ height: isHovered ? drip.height : "0%" }}
                  transition={{ duration: 1.5, delay: drip.delay }}
                />
              ))}
            </motion.div>

            {/* Photo container */}
            <motion.div
              className="relative z-10 overflow-hidden rounded-lg"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="aspect-[3/4] bg-gradient-to-b from-gray-800 to-black relative">
                <motion.img
                  src="/images/Anuj-photo.jpg" // Your photo path
                  alt="Anuj Kumar"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Vampire overlay effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-red-900/80 to-black/60 flex items-end justify-center pb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="text-center"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <p className="text-2xl font-gothic text-white mb-2">Anuj Kumar</p>
                    <p className="text-sm text-gray-300">Data Scientist & Developer</p>
                  </motion.div>
                </motion.div>

                {/* Blood drip effect */}
                <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-red-900 to-transparent"></div>

                {/* Animated blood cells */}
                {isHovered &&
                  bloodCells.map((cell) => (
                    <motion.div
                      key={cell.id}
                      className="absolute w-1 h-1 bg-red-500 rounded-full"
                      style={{ left: cell.left, top: "0%" }}
                      animate={{
                        y: ["0%", "100%"],
                        opacity: [0, 0.8, 0],
                      }}
                      transition={{
                        duration: cell.duration,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: cell.delay,
                      }}
                    />
                  ))}
              </div>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -bottom-4 -right-4 w-16 h-16 text-red-600"
              animate={{ rotate: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5 }}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="currentColor"
                />
              </svg>
            </motion.div>
          </div>

          <motion.p
            className="mt-12 text-gray-400 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Data scientist by day, web developer by night. Embracing the duality of analytical precision and creative
            design.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}