import React, { useState } from 'react';

const PlmUI = () => {
  const [status, setStatus] = useState('active'); // active, abandoned

  // Updated dummy data for a more complex component tree
  const componentTree = [
    { id: 1, name: 'Component 1', version: 'v1.0', image: '/dummyComponentImage.jpg' },
    { id: 2, name: 'Component 2', version: 'v2.0', image: '/dummyComponentImage.jpg' },
    { id: 3, name: 'Component 3', version: 'v3.0', image: '/dummyComponentImage.jpg' },
    { id: 4, name: 'Component 4', version: 'v4.0', image: '/dummyComponentImage.jpg' },
    // Add more components as needed
  ];

  // Function to simulate network-like connections
  const renderComponentNodes = () => {
    return componentTree.map((component, index) => (
      <div key={component.id} className="flex flex-col items-center mb-4">
        <img
          src={component.image}
          alt={component.name}
          className="w-24 h-24 mb-2 rounded shadow-lg transform transition duration-500 hover:scale-110"
          onError={(e) => (e.target.style.display = 'none')} // Hides image if it fails to load
        />
        <div className="text-center">
          <p className="text-sm font-bold">{component.name}</p>
          <p className="text-xs">{component.version}</p>
        </div>
        {index < componentTree.length - 1 && (
          <div className="w-1 h-8 bg-gray-400 rounded-full"></div>
        )}
      </div>
    ));
  };

  return (
    <div className="flex">
      {/* Component Tree */}
      <div className={`flex-1 ${status === 'abandoned' ? 'grayscale' : ''}`}>
        <h2 className="text-xl font-bold mb-4">Component Tree</h2>
        <div className="flex justify-center items-center">
          <div className="w-0.5 h-full bg-gray-400 rounded-full absolute"></div>
          <div className="flex flex-col items-center z-10">
            {renderComponentNodes()}
          </div>
        </div>
      </div>

      {/* Flow Chart */}
      <div className="w-64 ml-8">
        <h2 className="text-xl font-bold mb-4">Workflow Status</h2>
        <div className="flex flex-col items-center">
          {/* Interactive buttons */}
          {['Backlog', 'Working On', 'Worked On', 'Abandoned'].map((statusOption) => (
            <button
              key={statusOption}
              onClick={() => setStatus(statusOption.toLowerCase())}
              className={`mb-2 px-4 py-2 rounded shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-500 hover:text-white ${status === statusOption.toLowerCase() ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              {statusOption}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlmUI;
