import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import portfolioData from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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
  };

  return (
    <section className="bg-white shadow-md rounded-lg p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="flex items-center">
            <FaEnvelope className="text-secondary mr-4 text-2xl" />
            <a href={`mailto:${portfolioData.email}`} className="text-gray-700">
              {portfolioData.email}
            </a>
          </div>
          <div className="flex items-center">
            <FaPhone className="text-secondary mr-4 text-2xl" />
            <span className="text-gray-700">{portfolioData.phone}</span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-secondary mr-4 text-2xl" />
            <span className="text-gray-700">{portfolioData.location}</span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            required
          />
          <input 
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            required
          />
          <textarea 
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-secondary"
            required
          />
          <button 
            type="submit" 
            className="w-full bg-secondary text-white p-3 rounded-lg hover:bg-primary transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact