import { useState } from 'react';
import Sidebar from '../../components/SIdebar';
import Roadmap from '../../components/roadmapComponent';
import Backlog from '../../components/backlogcomponent';
import Taskboard from '../../components/TaskBoard';
import Sprintboard from '../../components/sprintBoardcomponent';

function WorkspaceId({ allWorkspaces }) {
  const [selectedWorkspace, setSelectedWorkspace] = useState(null);
  const [activeView, setActiveView] = useState(''); // Will hold values like 'roadmap', 'backlog', etc.

  // Function to determine which component to render based on activeView
  const renderActiveView = () => {
    switch (activeView) {
      case 'roadmap':
        return <Roadmap />;
      case 'backlog':
        return <Backlog />;
      case 'board':
        return <Taskboard />;
      case 'sprint board':
        return <Sprintboard />;
      default:
        return (
          <div className="flex items-center justify-center h-full">
            <p className="text-xl">Select a workspace or view to see its content.</p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar workspaces={allWorkspaces} setActiveView={setActiveView} />

      <main className="flex-1 p-8 overflow-y-scroll">
        {selectedWorkspace ? (
          <div>
            <h1 className="text-3xl mb-4">{selectedWorkspace.name}</h1>
            {renderActiveView()}
          </div>
        ) : renderActiveView()}
      </main>
    </div>
  );
}

// Mock export for the sake of this example, in Next.js you'd use getServerSideProps or getStaticProps.
export async function getServerSideProps() {
  // Fetch the list of workspaces from your backend.
  // const response = await fetch('/api/workspaces');
  // const allWorkspaces = await response.json();

  // For this mock example:
  const allWorkspaces = [
    { _id: '1', name: 'Workspace 1', description: 'Description 1' },
    { _id: '2', name: 'Workspace 2', description: 'Description 2' },
  ];

  return {
    props: { allWorkspaces },
  };
}

export default WorkspaceId;
