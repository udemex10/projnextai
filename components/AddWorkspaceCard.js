import React from 'react';

const AddWorkspaceCard = () => {
  return (
    <div className={`bg-white shadow-lg rounded-lg p-5 m-5 flex justify-center items-center ${styles.card}`}>
      <span className="text-6xl text-gray-300 cursor-pointer">+</span>
    </div>
  );
};

export default AddWorkspaceCard;
