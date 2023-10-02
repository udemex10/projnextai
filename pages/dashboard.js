import React from 'react';
import WorkspaceCard from '../components/WorkspaceCard';
import AddWorkspaceCard from '../components/AddWorkspaceCard';

const mockWorkspaces = [
  { _id: '1', name: 'Workspace 1', description: 'This is workspace 1' },
  { _id: '2', name: 'Workspace 2', description: 'This is workspace 2', organizationId: 'org1' },
  // ... Add more mock data or fetch from an API
];

const Dashboard = () => {
  // Function to handle deleting a workspace
  const handleDelete = async (workspaceId) => {
    try {
      // Make an API call to delete the workspace
      const response = await fetch(`/api/workspace/${workspaceId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete workspace');
      }

      // Remove the workspace from the UI or refetch workspaces
      // For now, we'll use a simple page reload
      location.reload();
    } catch (error) {
      console.error('Failed to delete workspace:', error);
    }
  };


  return (
    <div className="p-8 bg-gray-900 text-white p-8 h-screen">
      <h1 className="text-4xl mb-4 font-semibold">Your Workspaces</h1>
      <div className="grid grid-cols-3 gap-4">
        {mockWorkspaces.map(workspace => (
          <WorkspaceCard key={workspace._id} workspace={workspace} onDelete={handleDelete} />
        ))}
        <AddWorkspaceCard /> {/* Added this line */}
      </div>
    </div>
  );
};


export default Dashboard;
