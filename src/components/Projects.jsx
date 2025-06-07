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

       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
  {projects.map((project, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1] 
      }}
      whileHover={{ 
        y: -8,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-400/30 transition-all duration-300 relative"
    >
      {/* Project Image */}
      <div className="h-52 bg-gradient-to-br from-blue-900/20 via-gray-900 to-blue-900/10 flex items-center justify-center relative overflow-hidden">
        <img 
          src={project.link} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Project Content */}
      <div className="p-6 lg:p-7">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded-full">
            #{index + 1}
          </span>
        </div>
        
        <p className="text-gray-400 mb-5 leading-relaxed">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <motion.span 
              key={tech}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs hover:bg-blue-900/30 hover:text-blue-300 transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex justify-between items-center border-t border-gray-800 pt-4">
          <motion.a
            href={project.link}
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium gap-1.5"
          >
            View Project
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </motion.a>
          
          <div className="flex gap-3">
           
            
           
          </div>
        </div>
      </div>
      
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 border border-transparent group-hover:border-blue-400/10 pointer-events-none transition-all duration-500 rounded-xl" />
    </motion.div>
  ))}
</div>
      </div>
    </section>
  )
}