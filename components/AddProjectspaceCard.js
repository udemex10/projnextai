import React from 'react';

const AddProjectspaceCard = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div
        onClick={() => console.log("Add Workspace Card Clicked!")} // Replace with the desired action
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '1000px' }}
        className="bg-gray-700 h-30 pt-5 pb-5 rounded-lg shadow-md hover:shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105 mx-auto mb-4 cursor-pointer">
        <span className="text-6xl text-gray-300 hover:text-gray-400 transition-colors duration-300">+</span>
      </div>
    </div>
  );
};

export default AddProjectspaceCard;
