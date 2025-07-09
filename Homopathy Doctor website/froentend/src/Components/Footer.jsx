import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  // Dynamic data state
  const [footerData, setFooterData] = useState({
    company: {
      name: "NAMMA",
      tagline: "Homeopathy",
      description: "At Namma Homeopathy, we offer the widest choice of the most highly skilled, compassionate physicians and advanced homeopathic treatment with accurate disease diagnosis."
    },
    contact: {
      locations: ["KARNATAKA", "MAHARASHTRA"],
      email: "info@nammahomeopathy.com",
      phone: "+91-9900091777"
    },
    socialMedia: [
      { name: "Facebook", icon: Facebook, url: "#", bgColor: "bg-blue-600", hoverColor: "hover:bg-blue-700" },
      { name: "Twitter", icon: Twitter, url: "#", bgColor: "bg-blue-400", hoverColor: "hover:bg-blue-500" },
      { name: "Instagram", icon: Instagram, url: "#", bgColor: "bg-pink-600", hoverColor: "hover:bg-pink-700" },
      { name: "YouTube", icon: Youtube, url: "#", bgColor: "bg-red-600", hoverColor: "hover:bg-red-700" }
    ],
    usefulLinks: [
      { name: "About Namma", url: "#" },
      { name: "Services", url: "#" },
      { name: "Locations", url: "#" },
      { name: "Namma Doctors", url: "#" },
      { name: "Gallery", url: "#" },
      { name: "Contact", url: "#" }
    ],
    departments: [
      { name: "Hormonal Disorders", url: "#" },
      { name: "Respiratory Disorders", url: "#" },
      { name: "Infertility", url: "#" },
      { name: "Skin and Hair Disorders", url: "#" },
      { name: "Psychiatric Disorders", url: "#" },
      { name: "Neurological Disorders", url: "#" }
    ]
  });

  // Function to update footer data (example of dynamic functionality)
  const updateFooterData = (newData) => {
    setFooterData(prevData => ({
      ...prevData,
      ...newData
    }));
  };

  return (
    <footer className="bg-slate-800 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="bg-gradient-to-r from-cyan-400 to-green-400 rounded-lg p-3 inline-block mb-4">
                <span className="text-white font-bold text-lg">{footerData.company.name}</span>
                <span className="text-white text-sm ml-2">{footerData.company.tagline}</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              {footerData.company.description}
            </p>
            
            <div className="mb-6">
              <h3 className="text-white font-semibold mb-4 tracking-wide">FOLLOW US</h3>
              <div className="flex space-x-3">
                {footerData.socialMedia.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a 
                      key={index}
                      href={social.url} 
                      className={`${social.bgColor} ${social.hoverColor} p-2 rounded-full transition-colors`}
                      aria-label={social.name}
                    >
                      <IconComponent size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Reach Us Section */}
          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wide">REACH US</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  {footerData.contact.locations.map((location, index) => (
                    <p key={index} className="text-gray-300 mt-1">{location}</p>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-gray-400 flex-shrink-0" />
                <a 
                  href={`mailto:${footerData.contact.email}`} 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {footerData.contact.email}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-gray-400 flex-shrink-0" />
                <a 
                  href={`tel:${footerData.contact.phone}`} 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {footerData.contact.phone}
                </a>
              </div>
            </div>
          </div>
          
          {/* Useful Links Section */}
          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wide">USEFUL LINKS</h3>
            <div className="space-y-3">
              {footerData.usefulLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          {/* Departments Section */}
          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wide">DEPARTMENTS</h3>
            <div className="space-y-3">
              {footerData.departments.map((department, index) => (
                <a 
                  key={index}
                  href={department.url} 
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  {department.name}
                </a>
              ))}
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Demo: Dynamic Data Update Button (Remove in production) */}
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-700">
        <div className="text-center">
          <button 
            onClick={() => updateFooterData({
              company: {
                ...footerData.company,
                description: "Updated description: Leading homeopathic healthcare provider with expert physicians and modern treatment facilities."
              }
            })}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded transition-colors text-sm"
          >
            Update Description (Demo)
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;