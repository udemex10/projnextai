import React, { useState } from 'react';
import WorkspaceOption from './WorkspaceOption'; // Assuming you have this component

function WorkflowManagerSidebar({ onSelectWorkspaceOption }) {
    const [workspaces] = useState([
        { _id: '1', name: 'Component Workspace 1' },
        { _id: '2', name: 'Component Workspace 2' },
        // ... other workspaces ...
    ]);

    const addWorkspace = () => {
        console.log("Add Component Workspace");
        // Implement workspace addition logic here
    };

    const sidebarStyle = {
        width: '300px',
        backgroundColor: '#1a202c', // A darker shade of the theme
        color: 'white',
        position: 'fixed',
        left: '264px', // Adjust as needed
        top: 0,
        bottom: 0,
        transition: 'left 0.5s ease-in-out',
        padding: '10px',
        overflowY: 'auto',
        zIndex: 1000,
    };

    return (
        <div style={sidebarStyle}>
            <h1 className="mb-4">Workflow Manager</h1>
            <div className="flex justify-center mb-4">
                <button onClick={addWorkspace} className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full">
                    <span className="text-2xl text-white">+</span>
                </button>
            </div>
            <div>
                {/* "All Workspaces" option */}
                <WorkspaceOption
                    key="all-component_workspaces"
                    title="All Component Workspaces"
                    workspaces="all" // Using an identifier for "All Workspaces"
                    onSelectOption={onSelectWorkspaceOption}
                />
                {/* Individual workspace options */}
                {workspaces.map(workspace => (
                    <WorkspaceOption
                         key={workspace._id}
                         title={workspace.name}
                         workspace={workspace}
                         onSelectOption={onSelectWorkspaceOption}
                    />
                ))}
            </div>
        </div>
    );
}

export default WorkflowManagerSidebar;
