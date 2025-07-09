import React, { useState } from 'react';
import { MapPin, Settings } from 'lucide-react';

export default function LocationServiceFinder() {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);

  const locations = [
    'New York, NY', 'Los Angeles, CA', 'Chicago, IL', 'Houston, TX', 'Phoenix, AZ',
    'Philadelphia, PA', 'San Antonio, TX', 'San Diego, CA', 'Dallas, TX', 'San Jose, CA'
  ];

  const services = [
    'Healthcare', 'Education', 'Financial Services', 'Legal Services', 'Real Estate',
    'Transportation', 'Food & Dining', 'Entertainment', 'Shopping', 'Professional Services'
  ];

  return (
    <div className="w-full min-h-[65vh] bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center px-4 py-8">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Location Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-cyan-500" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Find a Location</h2>
            </div>
            <div className="relative">
              <button
                onClick={() => {
                  setShowLocationDropdown(!showLocationDropdown);
                  setShowServiceDropdown(false);
                }}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <span className={selectedLocation ? 'text-gray-800' : 'text-gray-500'}>
                  {selectedLocation || 'Select a location'}
                </span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showLocationDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
                  {locations.map((location) => (
                    <button
                      key={location}
                      onClick={() => {
                        setSelectedLocation(location);
                        setShowLocationDropdown(false);
                      }}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                    >
                      {location}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button className="text-green-500 hover:text-green-600 font-medium transition-colors">
              All locations
            </button>
          </div>

          {/* Service Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                <Settings className="w-5 h-5 text-cyan-500" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Find a Service</h2>
            </div>
            <div className="relative">
              <button
                onClick={() => {
                  setShowServiceDropdown(!showServiceDropdown);
                  setShowLocationDropdown(false);
                }}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <span className={selectedService ? 'text-gray-800' : 'text-gray-500'}>
                  {selectedService || 'Select a service'}
                </span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showServiceDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
                  {services.map((service) => (
                    <button
                      key={service}
                      onClick={() => {
                        setSelectedService(service);
                        setShowServiceDropdown(false);
                      }}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                    >
                      {service}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button className="text-green-500 hover:text-green-600 font-medium transition-colors">
              All services
            </button>
          </div>
        </div>

        {/* Search Button */}
        {(selectedLocation || selectedService) && (
          <div className="mt-8 text-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
              Search {selectedLocation && selectedService
                ? `${selectedService} in ${selectedLocation}`
                : selectedLocation || selectedService}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
