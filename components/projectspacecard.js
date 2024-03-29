import React from 'react';
import Link from 'next/link';

const ProjectspaceCard = ({ projectspace, onDelete }) => { 
  return (
    <Link href={`/projectspace/${projectspace._id}`}>
      <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '1000px' }} className="bg-gray-700 h-30 pr-5 pt-5 pb-5 rounded-lg shadow-md hover:shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105 mx-auto mb-4 cursor-pointer">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(projectspace._id);
          }}
          className="absolute top-2 right-2 text-red-500 hover:text-red-700">
          X
        </button>
        <h2 className="text-3xl font-bold mb-2">{projectspace.name}</h2>
        <p className="text-gray-300 mb-2">{projectspace.description}</p>
        {projectspace.organizationId && (
          <span className="text-sm text-gray-500">Org ID: {projectspace.organizationId}</span>
        )}
      </div>
    </Link>
  );
};

export default ProjectspaceCard;
