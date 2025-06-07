import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-400">About</span> Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Personal Info</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-gray-400 w-24">Name:</span>
                  <span>Jatin Gautam</span>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-400 w-24">Email:</span>
                  <span>jayveer282004@gmail.com</span>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-400 w-24">Phone:</span>
                  <span>+91 9389096176</span>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-400 w-24">Location:</span>
                  <span>Agra, Uttar Pradesh</span>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-400 w-24">Education:</span>
                  <span>BCA, Dr. Bhimrao Ambedkar University</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="md:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Professional Summary</h3>
              <p className="text-gray-300 mb-4">
                Detail-oriented and innovative Frontend Developer with 6 months of hands-on experience developing responsive, user-friendly web apps using React.js. Skilled in API integration, UI/UX design, and cross-browser compatibility.
              </p>
              <p className="text-gray-300 mb-4">
                Focused on building performant, scalable frontends using modern best practices. Passionate about creating intuitive user interfaces and staying up-to-date with the latest web technologies.
              </p>
              <div className="mt-6">
               
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}