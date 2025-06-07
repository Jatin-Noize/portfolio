import { motion } from 'framer-motion'
import one from "../assets/one.png"
import three from "../assets/three.png"
import two from "../assets/two.png"
import four from "../assets/four.png"

const projects = [
  {
    title: "Car Care Platform",
    description: "Built a responsive app with firm login, admin dashboard, and car listing features.",
    technologies: ["React", "Tailwind", "Node", "MongoDB"],
    link: one
  },
  {
    title: "AI Chat Bot",
    description: "Created a real-time AI bot interface using WebSockets and Gemini API.",
    technologies: ["React", "Gemini API"],
    link: two
  },
  {
    title: "Self Finance Management",
    description: "Developed a web app to track and visualize your personal finance journey.",
    technologies: ["React", "Tailwind", "Node", "MongoDB"],
    link: three
  },
  {
    title: "ERP Dashboard",
    description: "Contributed to an ERP system during internship—UI enhancements and API-based data display.",
    technologies: ["React", "Material-UI", "REST APIs"],
    link: four
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-blur">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-blue-400">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-400/50 transition-all"
            >
              <div className="h-48 bg-gradient-to-r from-blue-900/30 to-blue-600/20 flex items-center justify-center">
                <img src={project.link} className="text-4xl font-bold text-blue-400/50"></img>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 bg-black text-blue-400">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-gray-800 text-gray-300 px-2 py-1 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                  >
                    View Project →
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-blue-400"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}