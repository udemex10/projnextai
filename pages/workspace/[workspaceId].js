import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Roadmap from '../../components/roadmapComponent';
import Backlog from '../../components/backlogcomponent';
import Taskboard from '../../components/TaskBoard';
import Sprintboard from '../../components/Milestones';
import Toolbar from '../../components/Toolbar';
import WebCAD from '../../components/WebCAD';
import HelpPrompt from '../../components/HelpPrompt'; /*update header here from dashboard*/


function WorkspaceId({ allWorkspaces }) {
  const [selectedWorkspace, setSelectedWorkspace] = useState(null);
  const [activeView, setActiveView] = useState('');

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
       case 'cadtools':
         return <WebCAD />;
      default:
        return (
          <div className="flex items-center justify-center h-full">
            <p className="text-xl">Select a workspace or view to see its content.</p>
          </div>
        );
    }
  };


  return (
    <div className="flex flex-col h-screen text-white bg-gray-900">
      <Toolbar
        title="Vojo"
        links={[
          {name: 'Tools', href: '#'},
          {name: 'Projects', href: '#'},
          {name: 'Create', href: '#'}
        ]}
      />
      <div className="flex flex-grow">
        <Sidebar workspaces={allWorkspaces} setActiveView={setActiveView} />
        <main className="flex-1 p-8 overflow-y-scroll text-white">
          {selectedWorkspace ? (
            <div>
              <h1 className="text-3xl mb-4">{selectedWorkspace.name}</h1>
              {renderActiveView()}
            </div>
          ) : renderActiveView()}
        </main>
      </div>
      <HelpPrompt /> {/*here is the insertion of help prompt*/}
    </div>
  );
}

export async function getServerSideProps() {
  const allWorkspaces = [
    { _id: '1', name: 'Workspace 1', description: 'Description 1' },
    { _id: '2', name: 'Workspace 2', description: 'Description 2' }
  ];

  return {
    props: { allWorkspaces }
  };
}

export default WorkspaceId;
