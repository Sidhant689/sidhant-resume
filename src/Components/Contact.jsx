import React, { useState, useRef } from 'react';
import { motion as M, useInView } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import portfolioData from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic
    console.log('Form submitted:', formData);
    setFormSubmitted(true);

    const whatsappNumber = portfolioData.whatsapp; // Add this in portfolioData
    const whatsappMessage = `Hello, my name is ${formData.name}. ${formData.message}`;

    // Detect if the user is on a mobile device
    const isMobile = /iPhone|Android|iPad/i.test(navigator.userAgent);
    const whatsappLink = isMobile
      ? `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`
      : `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappLink, "_blank");

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 12, stiffness: 200 }
    }
  };

  return (
    <M.section
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="bg-gradient-to-b from-gray-50 to-white py-16 px-8 rounded-xl shadow-lg"
    >
      <M.h2
        variants={itemVariants}
        className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
      >
        Contact Me
      </M.h2>

      <M.div
        variants={containerVariants}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12"
      >
        <M.div variants={itemVariants} className="space-y-8">
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <h3 className="text-xl font-bold mb-6 text-primary">Get In Touch</h3>

            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="bg-secondary bg-opacity-10 p-4 rounded-full mr-4 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <FaEnvelope className="text-white group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <a
                    href={`mailto:${portfolioData.email}`}
                    className="text-gray-700 font-medium hover:text-secondary transition-colors"
                  >
                    {portfolioData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="bg-secondary bg-opacity-10 p-4 rounded-full mr-4 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <FaPhone className="text-white group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Phone</p>
                  <span className="text-gray-700 font-medium">{portfolioData.phone}</span>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="bg-secondary bg-opacity-10 p-4 rounded-full mr-4 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <FaMapMarkerAlt className="text-white group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Location</p>
                  <span className="text-gray-700 font-medium">{portfolioData.location}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-xl shadow-md text-white">
            <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
            <p className="mb-6">I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
            <div className="flex space-x-4">
              {portfolioData.socialLinks && portfolioData.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white bg-opacity-20 p-3 rounded-full hover:bg-white text-gray-500 hover:text-secondary transition-all duration-300"
                >
                  <link.icon />
                </a>
              ))}
            </div>
          </div>
        </M.div>

        <M.div variants={itemVariants}>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <h3 className="text-xl font-bold mb-6 text-primary">Send Me a Message</h3>

            <div className="space-y-5">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Your Message</label>
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none"
                  required
                />
              </div>

              <M.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-6 rounded-lg text-white font-medium transition-all duration-300 ${formSubmitted ? 'bg-green-500' : 'bg-secondary hover:bg-primary'}`}
              >
                {formSubmitted ? 'Message Sent!' : 'Send Message'}
              </M.button>
            </div>
          </form>
        </M.div>
      </M.div>
    </M.section>
  );
};

export default Contact;