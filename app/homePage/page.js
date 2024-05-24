// app/homePage/page.js

'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery) {
      router.push(`/generativePage?url=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <img src="/dontOpenLogo.png" alt="Don't Open Dead Inside Logo" className="w-64 h-auto mb-8" />
      <input 
        type="text" 
        placeholder="Enter URL" 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="p-3 w-96 text-black rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <button 
        onClick={handleSearch} 
        className="bg-blue-500 text-white p-3 rounded-full w-48 hover:bg-blue-600 mt-4"
      >
        Search
      </button>
    </div>
  );
};

export default HomePage;
