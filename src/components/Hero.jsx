import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              whileHover={{ scale: 1.02 }}
            >
              Hi, I'm <span className="text-blue-400">Jatin Gautam</span>
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-3xl text-gray-400 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Frontend Developer
            </motion.h2>
            <motion.p 
              className="text-gray-400 mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              I build exceptional digital experiences with React.js, Next.js and modern web technologies.
            </motion.p>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Contact Me
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="border border-blue-400 text-blue-400 hover:bg-blue-400/10 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                View Work
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-blue-400/30 relative overflow-hidden">
                {/* Placeholder for profile image */}
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <span className="text-4xl">JG</span>
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-400/50 border-r-blue-400/30"
              ></motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="flex justify-center md:justify-start space-x-6 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.a 
            href="https://github.com/Jatin-Noize" 
            target="_blank"
            whileHover={{ y: -5, color: '#3b82f6' }}
            className="text-gray-400 hover:text-blue-400 text-2xl"
          >
            <FaGithub />
          </motion.a>
          <motion.a 
            href="#" 
            target="_blank"
            whileHover={{ y: -5, color: '#3b82f6' }}
            className="text-gray-400 hover:text-blue-400 text-2xl"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a 
            href="#" 
            target="_blank"
            whileHover={{ y: -5, color: '#3b82f6' }}
            className="text-gray-400 hover:text-blue-400 text-2xl"
          >
            <FaTwitter />
          </motion.a>
          <motion.a 
            href="mailto:jayveer282004@gmail.com" 
            whileHover={{ y: -5, color: '#3b82f6' }}
            className="text-gray-400 hover:text-blue-400 text-2xl"
          >
            <FaEnvelope />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}