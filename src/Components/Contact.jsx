import React ,{useState} from 'react';
import { Navbar } from './LandingPage/Navbar';
import { Footer } from './Footer';



export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add your form submission logic here
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div>
    <Navbar/>
    <section className="py-16 bg-white pt-24  min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            SEND US A MESSAGE
          </h2>
          <p className="text-gray-600">
            We'd love to hear from you. Fill out the form below and our team will get back to you as soon as possible. For urgent matters, please call our emergency line.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Enter your name*"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-[#0056B3] rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email address*"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-[#0056B3] rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-[#0056B3] rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject*"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-3 border border-[#0056B3] rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-[#0056B3] rounded-lg focus:outline-none focus:border-cyan-500 transition-colors resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all hover:shadow-lg flex items-center justify-center space-x-2"
            >
              <span>Send Message</span>
              <span>→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
};