import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import PhotoSection from "@/components/photo-section"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-gray-100 scroll-smooth">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <PhotoSection />
      <Footer />
    </main>
  )
}
