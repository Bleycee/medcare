// Services.jsx
import React from 'react';
import { Navbar } from './LandingPage/Navbar';
import { Footer } from './Footer';
import { Heart, Activity, Pill, Video, ArrowRight } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      id: 1,
      icon: Heart,
      title: 'GENERAL HEALTH',
      subtitle: 'Primary Care',
      description: 'Comprehensive primary healthcare services including routine check-ups, health screenings and preventive care for all family members.',
      features: [
        'Annual physicals',
        'Chronic disease management',
        'Health counselling',
        'Wellness programs'
      ],
      color: 'blue'
    },
    {
      id: 2,
      icon: Activity,
      title: 'HEART HEALTH',
      subtitle: 'Cardiology',
      description: 'Advanced cardiac care with state of the art diagnostics and treatment for all heart related conditions.',
      features: [
        'Echocardiogram',
        'Heart disease management',
        'Cardiac stress tests'
      ],
      color: 'blue'
    },
    {
      id: 3,
      icon: Pill,
      title: 'MEDICATION',
      subtitle: 'Pharmacy',
      description: 'Full service pharmacy with prescription medications and expert pharmaceutical care.',
      features: [
        'Prescription filling',
        'Medication counseling',
        'Medication management',
        'Home delivery'
      ],
      color: 'blue'
    },
    {
      id: 4,
      icon: Video,
      title: 'VIRTUAL CARE',
      subtitle: 'Telemedicine',
      description: 'Convenient virtual consultations with healthcare providers from the comfort of your home.',
      features: [
        'Video consultations',
        'Follow up care',
        'Health monitoring',
        'E-prescription'
      ],
      color: 'blue'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-blue-600 to-blue-500">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <p className="text-cyan-300 text-sm md:text-base font-semibold mb-4 tracking-wide">
            OUR SERVICES
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Comprehensive Healthcare Services
          </h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto text-blue-100">
            We offer a complete range of medical services delivered by board-certified physicians and healthcare professionals using advanced technology and evidence-based practices.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-cyan-500 mb-2">
                    {service.title}
                  </h3>
                  <h4 className="text-2xl font-bold text-gray-800 mb-4">
                    {service.subtitle}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="text-gray-700 text-sm">
                        • {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Button */}
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center space-x-2 group">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};