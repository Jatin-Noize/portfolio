import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_2y7y3uw',
      'template_viuhqtk',
      form.current,
      'uAu4NbG76vjskqW3-'
    )
    .then(
      (result) => {
        alert('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        alert('Failed to send message. Please try again.');
      }
    );
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In <span className="text-blue-400">Touch</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Contact Information</h3>
              
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start"
                >
                  <div className="bg-blue-400/10 p-3 rounded-full mr-4">
                    <FiMail className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm">Email</h4>
                    <a href="mailto:jayveer282004@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                      jayveer282004@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start"
                >
                  <div className="bg-blue-400/10 p-3 rounded-full mr-4">
                    <FiPhone className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm">Phone</h4>
                    <a href="tel:+919389096176" className="text-gray-300 hover:text-blue-400 transition-colors">
                      +91 9389096176
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start"
                >
                  <div className="bg-blue-400/10 p-3 rounded-full mr-4">
                    <FiMapPin className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm">Location</h4>
                    <p className="text-gray-300">Agra – 282004, Uttar Pradesh</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Send Me a Message</h3>
              
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    name="user_name"
                    id="name" 
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your name"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="user_email"
                    id="email" 
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your email"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                  <textarea 
                    name="message"
                    id="message" 
                    rows="5"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your message"
                    required
                  ></textarea>
                </motion.div>

                <input 
                  type="hidden" 
                  name="to_email" 
                  value="jayveer282004@gmail.com"
                />

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}