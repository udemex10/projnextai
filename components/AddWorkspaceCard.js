import React from 'react';

const AddWorkspaceCard = () => {
  return (
    <div
      onClick={() => console.log("Add Workspace Card Clicked!")} // Replace with the desired action
      className="bg-gray-700 w-60 h-80 p-5 rounded-lg shadow-md hover:shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105 flex justify-center items-center cursor-pointer">
      <span className="text-6xl text-gray-300 hover:text-gray-400 transition-colors duration-300">+</span>
    </div>
  );
};

export default AddWorkspaceCard;
