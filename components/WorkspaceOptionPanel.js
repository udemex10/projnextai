import React from 'react';
import WorkspaceCard from './WorkspaceCard';
import AddWorkspaceCard from './AddWorkspaceCard';

const WorkspaceOptionPanel = ({ selectedWorkspace, selectedOption }) => {
    const renderContent = () => {
            if (selectedOption === 'overview' && selectedWorkspace) {
                const { workspaces, isAllWorkspaces } = selectedWorkspace;
                console.log(workspaces);
                return (
                    <div className="flex flex-wrap justify-start">
                        {workspaces.map(ws => (
                            <div key={ws._id} className="m-2">
                                <WorkspaceCard workspace={ws} />
                            </div>
                        ))}
                        {isAllWorkspaces && (
                            <div className="m-2">
                                <AddWorkspaceCard />
                            </div>
                        )}
                    </div>
                );
            }
        // Placeholder for other options
        return <div>{/* Content for Insights, Workflow, etc. */}</div>;
    };

    return (
        <div className="fixed left-[564px] top-0 bottom-0 right-0 bg-gray-800 overflow-auto p-4">
            {renderContent()}
        </div>
    );
};

export default WorkspaceOptionPanel;
