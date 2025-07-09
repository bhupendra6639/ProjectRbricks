import React, { useState, useEffect } from 'react';
import LocationServiceFinder from '../Components/LocationServiceFinder';
import { Phone, MessageCircle } from 'lucide-react';
import Footer from '../Components/Footer';
import axios from 'axios';
import bgimg from "../assets/homopaticbanner.jpg";
import doctorimg from "../assets/doctobg.jpg"
const HomeopathyBanner = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    disease: ''
  });

  const [focusedField, setFocusedField] = useState(null);
  const [diseases, setDiseases] = useState([]);
  const [treatments, setTreatments] = useState([]);
  const [testimonialCards, setTestimonialCards] = useState([]);
  const [experienceStats, setExperienceStats] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/treatments")
      .then((res) => setTreatments(res.data))
      .catch((err) => console.error("Fetch Error (Treatments):", err));
  }, []);

  useEffect(() => {
    axios.get("http://localhost:5000/api/testimonials")
      .then(res => setTestimonialCards(res.data))
      .catch(err => console.error("Fetch error (Testimonials):", err));
  }, []);

  useEffect(() => {
    axios.get('http://localhost:5000/api/experience')
      .then(res => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          setExperienceStats(res.data[0]);
        } else {
          console.warn('No experience data found');
        }
      })
      .catch(err => console.error('Error fetching experience:', err));
  }, []);

  useEffect(() => {
    const fetchDiseases = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/diseases');
        setDiseases(res.data);
      } catch (error) {
        console.error('Error fetching diseases:', error);
      }
    };
    fetchDiseases();
  }, []);

  const formFields = [
    { id: 'name', label: 'Your Name', type: 'text', placeholder: 'Enter your full name', icon: '👤', required: true },
    { id: 'phone', label: 'Your Phone', type: 'tel', placeholder: 'Enter your phone number', icon: '📱', required: true },
    { id: 'location', label: 'Your Location', type: 'text', placeholder: 'Enter your city/area', icon: '📍', required: true }
  ];

  const handleInputChange = (fieldId, value) => {
    setFormData(prev => ({ ...prev, [fieldId]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/form", formData);
      console.log("Post Success:", res.data);
      alert("Form submitted successfully!");
      setFormData({ name: '', phone: '', location: '', disease: '' });
    } catch (error) {
      console.error("Post Error:", error);
      alert("Failed to submit form.");
    }
  };

  if (!experienceStats) return <p>Loading...</p>;

  return (
    <>
      {/* First Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-400 via-green-500 to-blue-500 min-h-[500px] flex items-center py-16">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-green-400 to-green-500 transform skew-x-12 origin-top-left"></div>
          <div className="absolute inset-y-0 right-0 w-3/5 bg-gradient-to-l from-blue-400 to-blue-500 transform -skew-x-12 origin-top-right"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-6">
            <h2 className="text-lg sm:text-xl font-medium uppercase">Immunogenic Miasmatic</h2>
            <h3 className="text-3xl lg:text-4xl font-bold uppercase">Sixth Generation</h3>
            <h1 className="text-5xl lg:text-6xl font-bold uppercase leading-tight">Homeopathic Treatment</h1>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 shadow-lg">Learn More</button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600">Book Appointment</button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-gray-200 rounded-full flex flex-col items-center justify-center text-gray-400 text-center">
                  <div className="w-32 h-32 bg-gray-300 rounded-full mb-4"></div>
                  <img src={doctorimg} alt="" />
                  {/* <p className="text-sm">{bgimg}</p> */}
                  <p className="text-xs">Professional in suit</p>
                  <p className="text-xs">Holding medicine bottle</p>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-white rounded-lg p-2 shadow-lg">
                <div className="w-8 h-12 bg-blue-500 rounded-sm flex items-center justify-center">
                  <span className="text-white text-xs font-bold">RX</span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -left-6 w-6 h-6 bg-pink-400 rounded-full animate-bounce"></div>
              <div className="absolute bottom-1/4 -right-8 w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-400 via-green-500 to-emerald-600 min-h-[500px] flex items-center py-16">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-4/5 bg-gradient-to-r from-green-300/30 to-green-400/30 transform skew-x-12 origin-top-left animate-pulse"></div>
          <div className="absolute inset-y-0 right-0 w-3/5 bg-gradient-to-l from-emerald-300/30 to-green-400/30 transform -skew-x-12 origin-top-right"></div>
          <div className="absolute top-10 left-10 w-8 h-8 bg-white/20 rounded-full animate-bounce"></div>
          <div className="absolute top-20 right-20 w-6 h-6 bg-yellow-300/60 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-4 h-4 bg-blue-300/60 rounded-full animate-ping"></div>
          <div className="absolute bottom-10 right-10 w-10 h-10 bg-white/10 rounded-full animate-bounce delay-700"></div>
          <div className="absolute top-1/4 left-1/4 text-white/20 text-2xl animate-pulse">✚</div>
          <div className="absolute bottom-1/3 right-1/3 text-white/20 text-xl animate-pulse delay-500">✚</div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-16 grid grid-cols-1 lg:grid-cols-2 gap-[21rem] items-center">
          <div className="text-white space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">Heal through</span>
              <span className="block text-white drop-shadow-lg">Homeopathy!</span>
            </h1>
            <h2 className="text-3xl lg:text-4xl font-semibold text-green-50">Book your visit</h2>
            <div className="space-y-3 pt-4">
              {[{ icon: '🌿', text: 'Natural & Safe Treatment' }, { icon: '⚡', text: 'Quick & Effective Results' }, { icon: '👨‍⚕️', text: 'Expert Consultation' }].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-green-50">
                  <span className="text-xl">{feature.icon}</span>
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
              {formFields.map(field => (
                <div key={field.id} className="relative group">
                  <div className={`relative transition-all duration-300 ${focusedField === field.id ? 'transform scale-105' : ''}`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    <div className="relative flex items-center">
                      <span className="absolute left-4 text-xl z-10">{field.icon}</span>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formData[field.id]}
                        onChange={(e) => handleInputChange(field.id, e.target.value)}
                        onFocus={() => setFocusedField(field.id)}
                        onBlur={() => setFocusedField(null)}
                        className="w-full pl-12 pr-4 py-4 bg-white/95 backdrop-blur-sm rounded-lg border-2 border-transparent focus:border-blue-400 focus:bg-white placeholder-gray-400 text-gray-700 font-medium shadow-lg focus:shadow-xl"
                        required={field.required}
                      />
                    </div>
                  </div>
                </div>
              ))}

              <div className="relative group">
                <div className={`relative transition-all duration-300 ${focusedField === 'disease' ? 'transform scale-105' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <div className="relative flex items-center">
                    <span className="absolute left-4 text-xl z-10">🏥</span>
                    <select
                      value={formData.disease}
                      onChange={(e) => handleInputChange('disease', e.target.value)}
                      onFocus={() => setFocusedField('disease')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-12 pr-4 py-4 bg-white/95 backdrop-blur-sm rounded-lg border-2 border-transparent focus:border-blue-400 focus:bg-white text-gray-700 font-medium shadow-lg focus:shadow-xl appearance-none cursor-pointer"
                      required
                    >
                      {diseases.map(d => <option key={d.value} value={d.value}>{d.label}</option>)}
                    </select>
                    <div className="absolute right-4 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl active:scale-95 shadow-lg">
                <span className="flex items-center justify-center gap-2">
                  <span>Book Now</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>

              <div className="flex items-center justify-center gap-4 pt-2">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-white text-sm">4.9/5 Rating</span>
                </div>
                <div className="w-px h-4 bg-white/30"></div>
                <div className="flex items-center gap-1">
                  <span className="text-green-300">🔒</span>
                  <span className="text-white text-sm">100% Secure</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
        <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content - Dynamic Cards */}
          <div className="space-y-6">
            {testimonialCards.map((card) => (
              <div key={card.id} className="relative group">
                {/* Card Container */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${card.backgroundColor}`}></div>
                  
                  {/* Geometric Pattern Background */}
                  <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-full h-full">
                      <div className="absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-green-400/20 to-blue-400/20 transform skew-x-12 origin-top-left"></div>
                      <div className="absolute inset-y-0 right-0 w-2/5 bg-gradient-to-l from-blue-400/20 to-green-400/20 transform -skew-x-12 origin-top-right"></div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10 p-6">
                    <div className="flex items-start justify-between">
                      
                      {/* Left Content */}
                      <div className="flex-1 space-y-4">
                        {/* Brand Logo */}
                        <div className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-lg">
                          <span className="mr-2">{card.brandName}</span>
                          <span className="text-sm font-normal">{card.brandSubtitle}</span>
                        </div>

                        {/* Tagline */}
                        <div className="text-cyan-300 text-sm font-medium tracking-wide">
                          {card.tagline}
                        </div>

                        {/* Main Content Card */}
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 space-y-2">
                          <div className="text-green-600 text-sm font-bold">
                            {card.celebrationType}
                          </div>
                          <div className="text-green-700 text-lg font-bold">
                            {card.celebrationDetail}
                          </div>
                          <div className="text-gray-600 text-sm">
                            {card.achievement}
                          </div>
                          <div className="text-gray-600 text-sm">
                            {card.specialMention}
                          </div>
                          <div className="text-gray-600 text-sm">
                            {card.specialGuest}
                          </div>
                          <div className="text-blue-600 text-lg font-bold">
                            {card.guestTitle}
                          </div>
                        </div>
                      </div>

                      {/* Right Content - Image Placeholder */}
                      <div className="ml-6 flex-shrink-0">
                        <div className="w-48 h-32 bg-white/20 rounded-lg flex items-center justify-center overflow-hidden">
                          <div className="text-center text-white/80">
                            <div className="w-16 h-16 bg-white/30 rounded-full mx-auto mb-2 flex items-center justify-center">
                              <span className="text-2xl">📸</span>
                            </div>
                            <div className="text-xs">
                              {card.image}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Content - Experience Details */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="text-6xl lg:text-7xl font-bold text-gray-600">
                {experienceStats.yearsOfExperience}
                <span className="text-4xl lg:text-5xl"> year's of</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-blue-600">
                {experienceStats.description}
              </h2>
            </div>

            {/* Description */}
            <div className="text-gray-600 text-lg leading-relaxed">
              {experienceStats.description}
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {experienceStats.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 mt-1">
                    {feature.checkmark && (
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xl">{feature.icon}</span>
                    <span className="text-gray-700 font-medium text-lg group-hover:text-blue-600 transition-colors duration-200">
                      {feature.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Learn More About Us
              </button>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-lg border-2 border-blue-500 hover:border-blue-600">
                View Success Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* map data */}
    <LocationServiceFinder></LocationServiceFinder>
        <div className="w-full min-h-screen bg-gradient-to-br from-green-100 to-green-200 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-blue-600 mb-4">
                We Offer
              </h2>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
                Specialised Treatments
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Namma Homeopathy treats every patient according to their individual 
                health diagnostics and induces additional care with recuperation process, 
                keeping in mind the totality of symptoms present.
              </p>
            </div>

            {/* Contact Section */}
            <div className="space-y-4">
              <h3 className="text-blue-600 font-semibold text-lg">
                CALL US AT:
              </h3>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-blue-600" />
                <span className="text-2xl font-bold text-blue-600">
                  +91-9900091777
                </span>
              </div>
            </div>
          </div>
          {/* Right Content - Treatment Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {treatments.map((treatment) => (
              <div
                key={treatment.id}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${treatment.color} flex items-center justify-center`}>
                  <span className="text-2xl">{treatment.icon}</span>
                </div>
                <h3 className="text-blue-700 font-semibold text-sm leading-tight">
                  {treatment.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <section>
      <Footer></Footer>
    </section>
    </>
  );
};

export default HomeopathyBanner;
