import React from 'react';
import WorkspaceCard from '../components/workspacecard';
import AddWorkspaceCard from '../components/AddWorkspaceCard';
import Toolbar from '../components/Toolbar';
import HelpPrompt from '../components/HelpPrompt';

const mockWorkspaces = [
  { _id: '1', name: 'Workspace 1', description: 'This is workspace 1' },
  { _id: '2', name: 'Workspace 2', description: 'This is workspace 2', organizationId: 'org1' },
];

const Dashboard = ({ handleDelete }) => {
  return (
    <div className="flex flex-col pb-8 bg-gray-900 text-white h-screen w-full">
      <Toolbar
        title="Vojo"
        links={[
          {name: 'Tools', href: '#'},
          {name: 'Filters', href: '#'},
          {name: 'Themes', href: '#'}
        ]}
      />

      <div className="pl-8 pr-8 flex flex-wrap space-x-8 mt-6">
        {mockWorkspaces.map(workspace => (
          <WorkspaceCard key={workspace._id} workspace={workspace} onDelete={handleDelete} />
        ))}
        <AddWorkspaceCard />
      </div>
    </div>
  );
};

export default Dashboard;
