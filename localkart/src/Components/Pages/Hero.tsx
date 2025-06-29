import React, { useState } from 'react';

const Hero = () => {
  const [service, setService] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    console.log('Searching for', service, 'in', location);
  };

  return (
    <section className="relative min-h-screen bg-[url('https://img.freepik.com/premium-photo/composition-with-smartphone-used-digital-shopping-online-ordering_23-2151380469.jpg?semt=ais_hybrid&w=740')] bg-center bg-cover flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-white text-center px-4">
        <h1 className="text-[2.5rem] md:text-5xl font-bold mb-4">Book Trusted Local Services Instantly</h1>
        <p className="text-lg md:text-xl mb-6">Plumbers, Electricians, Beauticians & more at your doorstep</p>

        {/* Search Form */}
        <div className="flex flex-wrap justify-center gap-3">
          <input
            type="text"
            placeholder="Search for a service..."
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="px-4 py-3 w-[220px] md:w-[250px] rounded-md border-none text-black bg-gray-400"
          />
          <input
            type="text"
            placeholder="Enter your location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="px-4 py-3 w-[220px] md:w-[250px] rounded-md border-none text-black bg-gray-400"
          />
          <button
            onClick={handleSearch}
            className="px-6 py-3 bg-[#ff7a00] text-white font-bold rounded-md hover:bg-[#e56b00] transition"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
