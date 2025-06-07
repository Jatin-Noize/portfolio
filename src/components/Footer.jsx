import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiTwitter } from 'react-icons/fi'

export default function Footer() {
  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/Jatin-Noize', label: 'GitHub' },
    { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/jatin-gautam-2b7519329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
    // { icon: <FiTwitter />, href: 'https://twitter.com/yourhandle', label: 'Twitter' },
    // { icon: <FiMail />, href: '/#contact', label: 'Email' },
  ]

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-black/80 backdrop-blur-md border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and copyright */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex flex-col items-center md:items-start"
          >
            <a 
              href="#home"
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2"
            >
              Jatin Gautam
            </a>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </motion.div>

          {/* Social links */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ y: -3, color: '#3b82f6' }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-300 hover:text-blue-400 text-xl transition-colors"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            {/* Contact info */}
            <div className="flex flex-col items-center md:items-end gap-2">
              <motion.a
                href="mailto:your@email.com"
                whileHover={{ color: '#3b82f6' }}
                className="flex items-center text-gray-300 hover:text-blue-400 text-sm transition-colors gap-2"
              >
                <FiMail className="text-blue-400" />
                jayveer282004@gmail.com
              </motion.a>
              <motion.a
                href="tel:+1234567890"
                whileHover={{ color: '#3b82f6' }}
                className="flex items-center text-gray-300 hover:text-blue-400 text-sm transition-colors gap-2"
              >
                <FiPhone className="text-blue-400" />
                +91 9389096176
              </motion.a>
            </div>
          </div>
        </div>

        {/* Back to top button */}
        <motion.div 
          className="mt-12 flex justify-center"
          whileHover={{ scale: 1.05 }}
        >
          <a 
            href="#home"
            className="text-gray-300 hover:text-blue-400 text-sm flex items-center gap-1 transition-colors"
          >
            Back to top
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m18 15-6-6-6 6"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </motion.footer>
  )
}