import React from 'react';
import Link from 'next/link';
import styles from './WorkspaceCard.module.css';

const WorkspaceCard = ({ workspace, onDelete }) => {
  return (
    <div className={`bg-white shadow-lg rounded-lg p-5 m-5 relative ${styles.card}`}>
      <button
          onClick={() => onDelete(workspace._id)}
          className="absolute top-2 right-2 text-red-500 hover:text-red-700">
          X
      </button>

      <h2 className="text-2xl font-bold mb-2">{workspace.name}</h2>
      <p className="text-gray-700 mb-2">{workspace.description}</p>

      {workspace.organizationId && (
        <span className="text-sm text-gray-500">Org ID: {workspace.organizationId}</span>
      )}

      <Link href={`/workspace/${workspace._id}`}>
        <a className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Open Workspace
        </a>
      </Link>
    </div>
  );
};

export default WorkspaceCard;
