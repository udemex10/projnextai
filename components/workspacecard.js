import React from 'react';
import Link from 'next/link';

const WorkspaceCard = ({ workspace, onDelete }) => {
  return (
    <div className="bg-gray-700 p-5 m-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <button
        onClick={() => onDelete(workspace._id)}
        className="absolute top-2 right-2 text-red-500 hover:text-red-700">
        X
      </button>

      <h2 className="text-3xl font-bold mb-2">{workspace.name}</h2>
      <p className="text-gray-300 mb-2">{workspace.description}</p>

      {workspace.organizationId && (
        <span className="text-sm text-gray-500">Org ID: {workspace.organizationId}</span>
      )}

      <a
        onClick={() => window.location.href = `/workspace/${workspace._id}`}
        className="mt-4 block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
        Open Workspace
      </a>
    </div>
  );
};

export default WorkspaceCard;
