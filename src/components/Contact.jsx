import { motion } from 'framer-motion';
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <section id="contact" className="relative min-h-screen pt-20">
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="gradient-text">Contact</span> Me
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <EnvelopeIcon className="w-6 h-6 text-primary" />
                      <a href="mailto:your.email@example.com" className="text-gray-300 hover:text-white transition-colors">
                        your.email@example.com
                      </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <PhoneIcon className="w-6 h-6 text-secondary" />
                      <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors">
                        +1 (234) 567-890
                      </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <MapPinIcon className="w-6 h-6 text-accent" />
                      <span className="text-gray-300">Your Location</span>
                    </div>
                  </div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
                  <div className="flex gap-4">
                    <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                      LinkedIn
                    </a>
                    <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                      GitHub
                    </a>
                    <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                      Twitter
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <ChatBubbleLeftRightIcon className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Send Message</h3>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    ></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    className="btn-primary w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
