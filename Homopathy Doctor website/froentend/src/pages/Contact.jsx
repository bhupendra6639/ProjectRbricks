import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    appointmentDate: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Dynamic doctor data
  const doctorData = {
    name: "Dr. Sarah Johnson",
    title: "Certified Homeopathic Physician",
    phone: "+1 (555) 123-4567",
    email: "dr.sarah@homeopathyhealing.com",
    address: "123 Wellness Avenue, Suite 456, Healing City, HC 12345",
    emergencyPhone: "+1 (555) 987-6543",
    
    officeHours: [
      { day: "Monday", hours: "9:00 AM - 6:00 PM", isOpen: true },
      { day: "Tuesday", hours: "9:00 AM - 6:00 PM", isOpen: true },
      { day: "Wednesday", hours: "9:00 AM - 6:00 PM", isOpen: true },
      { day: "Thursday", hours: "9:00 AM - 6:00 PM", isOpen: true },
      { day: "Friday", hours: "9:00 AM - 5:00 PM", isOpen: true },
      { day: "Saturday", hours: "10:00 AM - 2:00 PM", isOpen: true },
      { day: "Sunday", hours: "Closed", isOpen: false }
    ],
    
    services: [
      "Constitutional Homeopathy",
      "Acute Care Treatment", 
      "Chronic Disease Management",
      "Pediatric Homeopathy",
      "Women's Health",
      "Mental Health Support",
      "Allergy Treatment",
      "Detoxification Programs"
    ],
    
    stats: {
      patients: "1,250+",
      experience: "15+",
      rating: "4.9/5",
      success: "98%"
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          appointmentDate: '',
          message: ''
        });
        setSubmitStatus('');
      }, 3000);
    }, 2000);
  };

  return (
    <></>
    // <div className="relative min-h-screen overflow-hidden">
    //   {/* Background Video */}
    //   <div className="absolute inset-0 w-full h-full">
    //     <video
    //       autoPlay
    //       playsInline
    //       muted
    //       loop
    //       controls={false}
    //       className="w-full h-full object-cover"
    //     >
    //       <source src="" type="video/mp4" />
    //       Your browser does not support the video tag
    //     </video>
    //     <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-emerald-800/70 to-teal-900/80"></div>
    //   </div>

    //   {/* Main Content */}
    //   <div className="relative z-10 min-h-screen py-16 px-4">
    //     <div className="max-w-7xl mx-auto">
          
    //       {/* Header Section */}
    //       <div className="text-center mb-16">
    //         <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
    //           Contact {doctorData.name}
    //         </h1>
    //         <p className="text-xl md:text-2xl text-green-100 font-light mb-2">
    //           {doctorData.title}
    //         </p>
    //         <p className="text-lg text-green-200 mb-8">
    //           Your Journey to Natural Healing Starts Here
    //         </p>
    //         <div className="w-24 h-1 bg-green-400 mx-auto rounded-full"></div>
    //       </div>

    //       {/* Contact Cards Grid */}
    //       <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-16">
            
    //         {/* Phone Card */}
    //         <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105">
    //           <div className="text-center">
    //             <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
    //               <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
    //               </svg>
    //             </div>
    //             <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
    //             <p className="text-green-200 text-sm">{doctorData.phone}</p>
    //             <p className="text-green-300 text-xs mt-1">Emergency: {doctorData.emergencyPhone}</p>
    //           </div>
    //         </div>

    //         {/* Email Card */}
    //         <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105">
    //           <div className="text-center">
    //             <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
    //               <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
    //               </svg>
    //             </div>
    //             <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
    //             <p className="text-green-200 text-sm break-all">{doctorData.email}</p>
    //             <p className="text-green-300 text-xs mt-1">Response within 24 hours</p>
    //           </div>
    //         </div>

    //         {/* Address Card */}
    //         <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105">
    //           <div className="text-center">
    //             <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
    //               <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
    //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
    //               </svg>
    //             </div>
    //             <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
    //             <p className="text-green-200 text-sm leading-relaxed">{doctorData.address}</p>
    //           </div>
    //         </div>

    //         {/* Hours Card */}
    //         <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105">
    //           <div className="text-center">
    //             <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
    //               <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    //               </svg>
    //             </div>
    //             <h3 className="text-lg font-semibold text-white mb-2">Today's Hours</h3>
    //             <p className="text-green-200 text-sm">Mon-Fri: 9:00 AM - 6:00 PM</p>
    //             <p className="text-green-300 text-xs mt-1">Sat: 10:00 AM - 2:00 PM</p>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Main Content Grid */}
    //       <div className="grid lg:grid-cols-3 gap-8">
            
    //         {/* Contact Form */}
    //         <div className="lg:col-span-2">
    //           <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
    //             <h2 className="text-3xl font-bold text-white mb-8 text-center">Book Your Consultation</h2>
                
    //             <div className="space-y-6">
    //               <div className="grid md:grid-cols-2 gap-6">
    //                 <div>
    //                   <label className="block text-sm font-medium text-green-200 mb-2">First Name</label>
    //                   <input
    //                     type="text"
    //                     name="firstName"
    //                     value={formData.firstName}
    //                     onChange={handleInputChange}
    //                     className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-green-200 focus:border-green-400 focus:ring-2 focus:ring-green-400/50 transition-all"
    //                     placeholder="Enter your first name"
    //                     required
    //                   />
    //                 </div>
    //                 <div>
    //                   <label className="block text-sm font-medium text-green-200 mb-2">Last Name</label>
    //                   <input
    //                     type="text"
    //                     name="lastName"
    //                     value={formData.lastName}
    //                     onChange={handleInputChange}
    //                     className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-green-200 focus:border-green-400 focus:ring-2 focus:ring-green-400/50 transition-all"
    //                     placeholder="Enter your last name"
    //                     required
    //                   />
    //                 </div>
    //               </div>
                  
    //               <div>
    //                 <label className="block text-sm font-medium text-green-200 mb-2">Email Address</label>
    //                 <input
    //                   type="email"
    //                   name="email"
    //                   value={formData.email}
    //                   onChange={handleInputChange}
    //                   className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-green-200 focus:border-green-400 focus:ring-2 focus:ring-green-400/50 transition-all"
    //                   placeholder="Enter your email"
    //                   required
    //                 />
    //               </div>
                  
    //               <div>
    //                 <label className="block text-sm font-medium text-green-200 mb-2">Phone Number</label>
    //                 <input
    //                   type="tel"
    //                   name="phone"
    //                   value={formData.phone}
    //                   onChange={handleInputChange}
    //                   className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-green-200 focus:border-green-400 focus:ring-2 focus:ring-green-400/50 transition-all"
    //                   placeholder="Enter your phone number"
    //                   required
    //                 />
    //               </div>
                  
    //               <div>
    //                 <label className="block text-sm font-medium text-green-200 mb-2">Preferred Appointment Date</label>
    //                 <input
    //                   type="date"
    //                   name="appointmentDate"
    //                   value={formData.appointmentDate}
    //                   onChange={handleInputChange}
    //                   className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:border-green-400 focus:ring-2 focus:ring-green-400/50 transition-all"
    //                   required
    //                 />
    //               </div>
                  
    //               <div>
    //                 <label className="block text-sm font-medium text-green-200 mb-2">Message</label>
    //                 <textarea
    //                   name="message"
    //                   value={formData.message}
    //                   onChange={handleInputChange}
    //                   rows="4"
    //                   className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-green-200 focus:border-green-400 focus:ring-2 focus:ring-green-400/50 transition-all"
    //                   placeholder="Tell us about your health concerns..."
    //                 ></textarea>
    //               </div>
                  
    //               <button
    //                 type="button"
    //                 onClick={handleSubmit}
    //                 disabled={isSubmitting}
    //                 className={`w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 ${
    //                   isSubmitting 
    //                     ? 'bg-gray-600 cursor-not-allowed' 
    //                     : submitStatus === 'success'
    //                     ? 'bg-green-600 hover:bg-green-700'
    //                     : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:transform hover:scale-105'
    //                 } text-white shadow-lg hover:shadow-xl`}
    //               >
    //                 {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Message Sent! ✓' : 'Schedule Consultation'}
    //               </button>
    //             </div>
    //           </div>
    //         </div>

    //         {/* Sidebar */}
    //         <div className="space-y-8">
              
    //           {/* Office Hours */}
    //           <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
    //             <h3 className="text-xl font-semibold text-white mb-4">Office Hours</h3>
    //             <div className="space-y-2">
    //               {doctorData.officeHours.map((schedule, index) => (
    //                 <div key={index} className="flex justify-between items-center py-1">
    //                   <span className={`text-sm ${schedule.isOpen ? 'text-green-200' : 'text-gray-400'}`}>
    //                     {schedule.day}
    //                   </span>
    //                   <span className={`text-sm ${schedule.isOpen ? 'text-white' : 'text-gray-400'}`}>
    //                     {schedule.hours}
    //                   </span>
    //                 </div>
    //               ))}
    //             </div>
    //           </div>

    //           {/* Services */}
    //           <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
    //             <h3 className="text-xl font-semibold text-white mb-4">Our Services</h3>
    //             <div className="space-y-2">
    //               {doctorData.services.map((service, index) => (
    //                 <div key={index} className="flex items-center space-x-3">
    //                   <div className="w-2 h-2 bg-green-400 rounded-full"></div>
    //                   <span className="text-sm text-green-200">{service}</span>
    //                 </div>
    //               ))}
    //             </div>
    //           </div>

    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Contact;