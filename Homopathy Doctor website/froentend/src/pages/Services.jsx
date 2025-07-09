// src/pages/Services.js
import React, { useState } from 'react';
import servicesBackgroundvideo from '../assets/services.mp4';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Dynamic services data
  const servicesData = {
    hero: {
      title: "Our Homeopathic Services",
      subtitle: "Comprehensive natural healing solutions for mind, body, and spirit",
      backgroundVideo: servicesBackgroundvideo,
      posterImage: ""
    },

    introduction: {
      title: "Holistic Healthcare Solutions",
      description: "We offer a wide range of homeopathic treatments designed to address the root cause of illness, not just the symptoms. Our personalized approach ensures that each patient receives the most effective natural remedy for their unique constitution and health needs."
    },

    categories: [
      { id: 'all', name: 'All Services', icon: '🏥' },
      { id: 'acute', name: 'Acute Care', icon: '⚡' },
      { id: 'chronic', name: 'Chronic Conditions', icon: '🔄' },
      { id: 'mental', name: 'Mental Health', icon: '🧠' },
      { id: 'womens', name: "Women's Health", icon: '👩‍⚕️' },
      { id: 'pediatric', name: 'Pediatric Care', icon: '👶' },
      { id: 'preventive', name: 'Preventive Care', icon: '🛡️' }
    ],

     services: [
      // Acute Care Services
      {
        id: 1,
        category: 'acute',
        title: 'Fever & Flu Treatment',
        description: 'Quick relief from acute fevers, influenza, and viral infections using targeted homeopathic remedies.',
        duration: '30-45 mins',
        price: '₹800',
        benefits: ['Rapid symptom relief', 'No side effects', 'Boosts immunity', 'Personalized treatment'],
        icon: '🤒',
        featured: true
      },
      {
        id: 4,
        category: 'chronic',
        title: 'Diabetes Management',
        description: 'Comprehensive homeopathic approach to managing diabetes and its complications.',
        duration: '60 mins',
        price: '₹1500',
        benefits: ['Blood sugar regulation', 'Prevents complications', 'Improves metabolism', 'Lifestyle guidance'],
        icon: '🩺',
        featured: true
      },
      // Chronic Conditions
      {
        id: 4,
        category: 'chronic',
        title: 'Diabetes Management',
        description: 'Comprehensive homeopathic approach to managing diabetes and its complications.',
        duration: '60 mins',
        price: '₹1500',
        benefits: ['Blood sugar regulation', 'Prevents complications', 'Improves metabolism', 'Lifestyle guidance'],
        icon: '🩺',
        featured: true
      },
      // Mental Health Services
      {
        id: 8,
        category: 'mental',
        title: 'Anxiety & Stress Management',
        description: 'Natural treatment for anxiety disorders, stress, and panic attacks.',
        duration: '60 mins',
        price: '₹1200',
        benefits: ['Calms mind', 'Reduces anxiety', 'Improves sleep', 'Emotional balance'],
        icon: '🧘',
        featured: true
      },
      // Women's Health
      {
        id: 11,
        category: 'womens',
        title: 'PCOS/PCOD Treatment',
        description: 'Comprehensive treatment for polycystic ovary syndrome and hormonal imbalances.',
        duration: '60 mins',
        price: '₹1800',
        benefits: ['Hormone regulation', 'Weight management', 'Fertility improvement', 'Symptom relief'],
        icon: '🌸',
        featured: true
      },
    
      // Pediatric Care
      {
        id: 15,
        category: 'pediatric',
        title: 'Childhood Allergies',
        description: 'Safe treatment for allergic conditions in children including asthma and eczema.',
        duration: '45 mins',
        price: '₹900',
        benefits: ['Safe for children', 'Builds immunity', 'Reduces allergic reactions', 'Long-term relief'],
        icon: '🎈',
        featured: true
      },
      
      // Preventive Care
      {
        id: 18,
        category: 'preventive',
        title: 'Constitutional Treatment',
        description: 'Deep-acting treatment to strengthen overall health and prevent diseases.',
        duration: '90 mins',
        price: '₹2000',
        benefits: ['Disease prevention', 'Immunity boost', 'Better vitality', 'Long-term health'],
        icon: '🏛️',
        featured: true
      },
    ],

    consultation: {
      title: "Consultation Process",
      steps: [
        {
          step: 1,
          title: "Initial Consultation",
          description: "Detailed case history and symptom analysis",
          duration: "60-90 minutes"
        },
        {
          step: 2,
          title: "Remedy Selection",
          description: "Personalized homeopathic remedy prescription",
          duration: "Analysis period"
        },
        {
          step: 3,
          title: "Follow-up Sessions",
          description: "Regular monitoring and remedy adjustments",
          duration: "30-45 minutes"
        },
        {
          step: 4,
          title: "Ongoing Support",
          description: "Continuous care and health guidance",
          duration: "As needed"
        }
      ]
    }
  };

  // Filter services based on active category
  const filteredServices = activeCategory === 'all' 
    ? servicesData.services 
    : servicesData.services.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            playsInline
            muted
            loop
            controls={false}
            poster={servicesData.hero.posterImage}
            className="w-full h-full object-cover"
          >
            <source src={servicesData.hero.backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {servicesData.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              {servicesData.hero.subtitle}
            </p>
            <div className="w-24 h-1 bg-green-400 mx-auto mb-8"></div>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Book Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            {servicesData.introduction.title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {servicesData.introduction.description}
          </p>
        </div>
      </section>

      {/* Services Categories Filter */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {servicesData.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-green-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105 ${
                  service.featured ? 'ring-2 ring-green-500' : ''
                }`}
              >
                {service.featured && (
                  <div className="bg-green-500 text-white text-center py-2 font-semibold">
                    ⭐ Featured Service
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{service.icon}</div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{service.price}</div>
                      <div className="text-sm text-gray-500">{service.duration}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Benefits:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Process */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
            {servicesData.consultation.title}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesData.consultation.steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-2">
                  {step.description}
                </p>
                <p className="text-sm text-green-600 font-medium">
                  {step.duration}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-xl">Happy Patients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-xl">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-xl">Specialized Services</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-xl">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Natural Healing Journey?
          </h2>
          <p className="text-xl mb-8">
            Book your consultation today and experience the power of personalized homeopathic care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Schedule Consultation
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;