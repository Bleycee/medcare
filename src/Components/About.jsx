// About.jsx
import React from 'react';
import { Navbar } from './LandingPage/Navbar';
import { Footer } from './Footer';
import { Heart, Users, Shield } from 'lucide-react';

export const About = () => {
  const coreValues = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We treat every patient with empathy, respect and dignity, ensuring comfort and support throughout their healthcare journey.'
    },
    {
      icon: Users,
      title: 'Patient-Centered',
      description: 'Your health goals and preferences guide our care decisions, with transparent communication at every step.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We uphold ethical practices, honesty, and accountability in all our interactions and medical decisions.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-blue-600 to-blue-500">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <p className="text-cyan-300 text-sm md:text-base font-semibold mb-4 tracking-wide">
            ABOUT US
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Committed to Your Health & Well-being
          </h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto text-blue-100">
            With over two decades of experience, we've been providing exceptional healthcare services to our community, combining advanced medical expertise with compassionate care.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-4 text-center">
            OUR MISSION
          </h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            Delivering Accessible, Quality Healthcare
          </h3>
          <div className="space-y-4 text-gray-600">
            <p>
              Our mission is to provide accessible, high-quality healthcare services that improve the health and well-being of individuals and communities. We strive to deliver patient-centered care through innovation, collaboration and a commitment to excellence in every interaction.
            </p>
            <p>
              We believe that everyone deserves access to quality healthcare, and we work tirelessly to break down barriers and ensure that our services are available to all who need them.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-4 text-center">
            OUR VISION
          </h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            Leading the Future of Healthcare
          </h3>
          <div className="space-y-4 text-gray-600">
            <p>
              We envision a future where healthcare is proactive, personalized and seamlessly integrated into people's lives. Through cutting-edge technology, continuous innovation, and a holistic approach to wellness, we aim to set new standards in patient care.
            </p>
            <p>
              Our goal is to be the most trusted healthcare partner in the region, known for clinical excellence, technological advancement and genuine care for every patient.
            </p>
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-4">
              OUR CORE VALUES
            </h2>
            <p className="text-xl text-gray-600">
              Principles That Guide Us
            </p>
            <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
              These fundamental values shape our culture, guide our decisions, and define how we serve our patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {value.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-4 text-center">
            OUR STORY
          </h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            Two Decades of Healthcare Excellence
          </h3>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              At MedCare, we believe everyone deserves access to quality healthcare. Our journey began with a mission to bridge the gap between patients and providers through innovative technology.
            </p>
            <p>
              Founded by a group of passionate tech innovators, we recognized the challenges of navigating the healthcare system. Our goal was to create a user-friendly app that empowers individuals to take control of their health.
            </p>
            <p>
              We offer features like appointment scheduling, telehealth services, and health tracking, all designed based on user feedback. Our commitment to continuous improvement drives us to enhance the healthcare experience further.
            </p>
            <p className="font-semibold text-gray-800">
              Join us as we transform health and wellness together, making quality care accessible for everyone!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};