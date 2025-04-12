import React, { useState } from 'react';

const ServiceSelector = () => {
  const services = [
    { 
      id: 1,
      name: 'Application Development',
      description: 'We build custom applications tailored to your business needs.'
    },
    { 
      id: 2,
      name: 'Digital Transformation',
      description: 'Modernize your business processes with our digital expertise.'
    },
    { 
      id: 3,
      name: 'Cloud Solutions',
      description: 'Scalable and secure cloud solutions for your business.'
    },
    { 
      id: 4,
      name: 'IT Consulting',
      description: 'Expert IT consulting to align technology with your goals.'
    }
  ];

  const [selectedServiceId, setSelectedServiceId] = useState(null);

  return (
    <div className="w-[75%] mx-auto p-4">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-teal-300 text-center mb-6">Select a Service</h2>
      
      <div className="flex flex-col gap-4">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => setSelectedServiceId(service.id)}
            className={`p-6  rounded-lg border cursor-pointer transition-all duration-200 ${
              selectedServiceId === service.id
                ? 'bg-teal-700 text-white border-teal-700'
                : 'bg-white text-gray-800 border-gray-200 hover:border-teal-500'
            }`}
          >
            <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
            
          </div>
        ))}
      </div>

      {selectedServiceId && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-600">
            Selected: <span className="font-medium">{services.find(s => s.id === selectedServiceId)?.name}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default ServiceSelector;