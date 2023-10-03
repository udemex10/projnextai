import React from 'react';
import WorkspaceCard from '../components/WorkspaceCard';
import AddWorkspaceCard from '../components/AddWorkspaceCard';

const mockWorkspaces = [
  { _id: '1', name: 'Workspace 1', description: 'This is workspace 1' },
  { _id: '2', name: 'Workspace 2', description: 'This is workspace 2', organizationId: 'org1' },
];

const Dashboard = ({ handleDelete }) => {
  return (
    <div className="p-8 bg-gray-900 text-white h-screen">
      <div className="flex justify-start items-center mb-6">
        <h1 className="text-5xl font-extrabold mr-10 vojo-logo">Vojo</h1>
        <div className="space-x-4">
            <a href="#" className="hover:underline transition duration-300 ease-in-out transform hover:scale-105">Tools</a>
            <a href="#" className="hover:underline transition duration-300 ease-in-out transform hover:scale-105">Filters</a>
            <a href="#" className="hover:underline transition duration-300 ease-in-out transform hover:scale-105">Themes</a>
        </div>
      </div>
      <div className="flex flex-wrap space-x-8">
        {mockWorkspaces.map(workspace => (
          <WorkspaceCard key={workspace._id} workspace={workspace} onDelete={handleDelete} />
        ))}
        <AddWorkspaceCard />
      </div>
    </div>
  );
};

export default Dashboard;
