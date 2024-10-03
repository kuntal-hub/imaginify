import React from 'react';

const Loader = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="loader border-t-4 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
      <p className="mt-6 font-bold text-lg text-gray-700">
        Loading...
      </p>
      
    </div>
  );
};

export default Loader;
