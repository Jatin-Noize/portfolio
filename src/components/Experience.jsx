import { motion } from 'framer-motion'

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Insistence Technologies Pvt. Ltd.",
    duration: "Oct 2024 – Mar 2025",
    location: "Remote",
    responsibilities: [
      "Built and maintained reusable components for an enterprise React web app",
      "Integrated APIs via Axios and improved frontend performance",
      "Created responsive UIs with Tailwind CSS and Material-UI from Figma prototypes",
      "Contributed to sprint planning and Git-based version control workflows"
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-blue-400">Experience</span>
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12"
            >
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 shadow-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-semibold text-blue-400">{exp.role}</h3>
                  <span className="text-gray-400">{exp.duration}</span>
                </div>
                <div className="flex items-center mb-4">
                  <span className="bg-blue-400/10 text-blue-400 px-3 py-1 rounded-full text-sm">
                    {exp.company}
                  </span>
                  <span className="ml-4 text-gray-400">{exp.location}</span>
                </div>
                <ul className="space-y-2">
                  {exp.responsibilities.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex items-start"
                    >
                      <span className="text-blue-400 mr-2">•</span>
                      <span className="text-gray-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}