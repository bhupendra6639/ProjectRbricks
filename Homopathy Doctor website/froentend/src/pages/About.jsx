// src/pages/About.js
import React from 'react';
import Footer from '../Components/Footer';
import backgroundvideo from "../assets/aboutBg.mp4"
import aboutbgvideo from "../assets/aboutBg.mp4"
const About = () => {
  // Dynamic data structure
  const aboutData = {
    hero: {
      title: "About Our Practice",
      subtitle: "Dedicated to natural healing through homeopathy",
      backgroundVideo: backgroundvideo,
      posterImage: "./test.jpg"
    },
    
    doctor: {
      name: "Dr. Rajesh Sharma",
      title: "Certified Homeopathic Physician",
      description: "With over 15 years of experience in homeopathic medicine, Dr. Sharma is committed to providing personalized, natural healthcare solutions that treat the whole person, not just the symptoms.",
      qualifications: [
        {
          label: "Education",
          value: "BHMS (Bachelor of Homeopathic Medicine & Surgery), MD in Homeopathy"
        },
        {
          label: "Specialization",
          value: "Classical Homeopathy, Chronic Disease Management"
        },
        {
          label: "Experience",
          value: "15+ years of clinical practice"
        },
        {
          label: "Certifications",
          value: "Registered with Central Council of Homeopathy (CCH)"
        }
      ],
      image: null // Will show placeholder if null
    },

    philosophy: {
      title: "Our Philosophy",
      description: "Homeopathy is based on the principle of \"like cures like\" - using highly diluted natural substances to stimulate the body's own healing mechanisms. We believe in treating each patient as an individual, understanding their unique symptoms and constitution.",
      principles: [
        {
          number: 1,
          title: "Individualized Treatment",
          description: "Every patient receives a personalized treatment plan based on their unique symptoms and constitution."
        },
        {
          number: 2,
          title: "Natural Healing",
          description: "Using natural substances to stimulate the body's inherent ability to heal itself."
        },
        {
          number: 3,
          title: "Holistic Approach",
          description: "Treating the whole person - mind, body, and spirit - not just the disease symptoms."
        }
      ]
    },

    services: {
      title: "Our Services",
      serviceList: [
        {
          id: 1,
          title: "Acute Conditions",
          description: "Treatment for sudden onset conditions like fever, cough, digestive issues, and injuries.",
          icon: "🩺"
        },
        {
          id: 2,
          title: "Chronic Diseases",
          description: "Long-term management of chronic conditions like diabetes, hypertension, arthritis, and autoimmune disorders.",
          icon: "🔄"
        },
        {
          id: 3,
          title: "Mental Health",
          description: "Natural treatment for anxiety, depression, stress, and other mental health concerns.",
          icon: "🧠"
        },
        {
          id: 4,
          title: "Women's Health",
          description: "Specialized care for menstrual disorders, PCOS, pregnancy support, and menopause management.",
          icon: "👩‍⚕️"
        },
        {
          id: 5,
          title: "Children's Health",
          description: "Gentle, safe treatment for childhood ailments, developmental issues, and behavioral concerns.",
          icon: "👶"
        },
        {
          id: 6,
          title: "Preventive Care",
          description: "Constitutional treatment to strengthen immunity and prevent recurring illnesses.",
          icon: "🛡️"
        },
        {
          id: 7,
          title: "Skin Conditions",
          description: "Natural treatment for eczema, psoriasis, acne, and other dermatological conditions.",
          icon: "🌿"
        },
        {
          id: 8,
          title: "Respiratory Issues",
          description: "Treatment for asthma, allergies, bronchitis, and other respiratory problems.",
          icon: "💨"
        },
        {
          id: 9,
          title: "Digestive Health",
          description: "Management of IBS, gastritis, constipation, and other digestive disorders.",
          icon: "🍎"
        }
      ]
    },

    callToAction: {
      title: "Ready to Begin Your Healing Journey?",
      description: "Schedule a consultation today and discover the power of natural healing.",
      buttonText: "Book Appointment",
      buttonLink: "/contact" // You can make this dynamic too
    },

    // Additional sections that can be added
    testimonials: {
      title: "What Our Patients Say",
      reviews: [
        {
          id: 1,
          name: "Priya Patel",
          condition: "Chronic Migraine",
          review: "Dr. Sharma's treatment completely transformed my life. After years of suffering from migraines, I'm finally pain-free.",
          rating: 5
        },
        {
          id: 2,
          name: "Amit Kumar",
          condition: "Anxiety & Depression",
          review: "The holistic approach really works. I feel more balanced and peaceful than I have in years.",
          rating: 5
        },
        {
          id: 3,
          name: "Sunita Joshi",
          condition: "PCOS",
          review: "Natural treatment helped regulate my hormones without any side effects. Highly recommend!",
          rating: 5
        }
      ]
    },

    clinicInfo: {
      title: "Our Clinic",
      address: "123 Wellness Street, Health City, Maharashtra 411001",
      phone: "+91 98765 43210",
      email: "info@homeopathyclinic.com",
      hours: [
        { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
        { day: "Saturday", time: "9:00 AM - 2:00 PM" },
        { day: "Sunday", time: "Closed" }
      ]
    }
  };

  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            playsInline
            muted
            loop
            controls={false}
            poster={aboutData.hero.posterImage}
            className="w-full h-full object-cover"
          >
            <source src={aboutbgvideo} type="video/mp4" />
            Your browser does not support the video tag
          </video>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        {/* Content over video */}
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {aboutData.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              {aboutData.hero.subtitle}
            </p>
            <div className="w-24 h-1 bg-green-400 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Doctor's Information */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                {aboutData.doctor.name}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {aboutData.doctor.description}
              </p>
              <div className="space-y-4">
                {aboutData.doctor.qualifications.map((qualification, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      <strong>{qualification.label}:</strong> {qualification.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Doctor's Image */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                {aboutData.doctor.image ? (
                  <img 
                    src={aboutData.doctor.image} 
                    alt={aboutData.doctor.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-500 text-lg">Doctor's Photo</span>
                )}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {aboutData.doctor.name}
              </h3>
              <p className="text-green-600 font-medium">
                {aboutData.doctor.title}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            {aboutData.philosophy.title}
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {aboutData.philosophy.description}
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {aboutData.philosophy.principles.map((principle, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl font-bold">{principle.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {principle.title}
                </h3>
                <p className="text-gray-600">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
            {aboutData.services.title}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutData.services.serviceList.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
            {aboutData.testimonials.title}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {aboutData.testimonials.reviews.map((review) => (
              <div key={review.id} className="bg-gray-50 rounded-lg p-6">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{review.review}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-800">{review.name}</p>
                  <p className="text-green-600 text-sm">{review.condition}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            {aboutData.clinicInfo.title}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
              <div className="space-y-3 text-left">
                <p className="text-gray-600">
                  <strong>Address:</strong> {aboutData.clinicInfo.address}
                </p>
                <p className="text-gray-600">
                  <strong>Phone:</strong> {aboutData.clinicInfo.phone}
                </p>
                <p className="text-gray-600">
                  <strong>Email:</strong> {aboutData.clinicInfo.email}
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Clinic Hours</h3>
              <div className="space-y-3 text-left">
                {aboutData.clinicInfo.hours.map((schedule, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-600">{schedule.day}:</span>
                    <span className="text-gray-800 font-medium">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {aboutData.callToAction.title}
          </h2>
          <p className="text-xl mb-8">
            {aboutData.callToAction.description}
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            {aboutData.callToAction.buttonText}
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;