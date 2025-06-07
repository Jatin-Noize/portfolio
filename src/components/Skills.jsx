import { motion } from 'framer-motion'

const skills = [
  { category: 'Frontend', items: ['React.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'SASS', 'Tailwind CSS', 'Bootstrap'] },
  { category: 'API Handling', items: ['RESTful APIs', 'Axios', 'Fetch API', 'Postman'] },
  { category: 'UI/UX', items: ['Responsive Design', 'Material-UI', 'Figma'] },
  { category: 'Version Control', items: ['Git', 'GitHub', 'GitLab', 'Bitbucket'] },
  { category: 'Build Tools', items: ['Webpack', 'Vite', 'NPM', 'Yarn'] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-blur">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-blue-400">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-400/50 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-400">{skillCategory.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillCategory.items.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, backgroundColor: '#1e40af' }}
                    className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}