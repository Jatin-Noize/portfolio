import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
// import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-black scroll-smooth text-gray-100 min-h-screen">
      {/* Blue flare effects */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/5 left-1/5 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/2 right-1/2 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-5 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-5 animate-pulse delay-1000"></div>
      </div>

      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      {/* <Footer /> */}
    </div>
  )
}