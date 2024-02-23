import React, { useState } from 'react';
import Toolbar from '../../components/Toolbar';
import ProjectSidebar from '../../components/ProjectSidebar';
import QuickCharts from '../../components/QuickCharts';
import RecentActivity from '../../components/RecentActivity';
import WorkflowManagerSidebar from '../../components/WorkflowManagerSidebar';
import WorkspaceOptionPanel from '../../components/WorkspaceOptionPanel'; // Assuming you have this component
import Roadmap from '../../components/roadmapComponent';
import HelpPrompt from '../../components/HelpPrompt';

const projectspaceid = () => {
    const [showWorkflowManager, setShowWorkflowManager] = useState(false);
    const [selectedWorkspace, setSelectedWorkspace] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const [activeView, setActiveView] = useState('');

    // Define all workspaces here
    const allWorkspaces = [
        { _id: '1', name: 'Component Workspace 1' },
        { _id: '2', name: 'Component Workspace 2' },
        // ...other workspaces...
    ];

const handleSelectWorkspaceOption = (workspace, option) => {
    // Special handling for "All Workspaces"
    if (selectedOption === option && selectedWorkspace && selectedWorkspace.isAllWorkspaces && workspace === 'all') {
        setSelectedWorkspace(null);
        setSelectedOption(null);
    } else if (selectedWorkspace && selectedWorkspace.workspaces.includes(workspace) && selectedOption === option) {
        // Toggle the WorkspaceOptionPanel visibility off for individual workspaces
        setSelectedWorkspace(null);
        setSelectedOption(null);
    } else {
        // Handle new selection
        if (workspace === 'all') {
            setSelectedWorkspace({ workspaces: allWorkspaces, isAllWorkspaces: true });
        } else {
            setSelectedWorkspace({ workspaces: [workspace], isAllWorkspaces: false });
        }
        setSelectedOption(option);
    }
    };


    // Render main content based on selection
    const renderMainContent = () => {
            switch (activeView) {
                case 'roadmap':
                    return <Roadmap />;
                // Add cases for other views if necessary
                default:
                    return (
                        <>
                            <div className="flex-1 overflow-auto">
                                <QuickCharts />
                            </div>
                            <div className="flex-1 overflow-auto">
                                <RecentActivity />
                            </div>
                        </>
                    );
            }
        };

    return (
            <div className="flex flex-col h-screen bg-gray-900 text-white">
                <Toolbar /* props */ />
                <div className="flex flex-grow">
                    <ProjectSidebar setShowWorkflowManager={setShowWorkflowManager} setActiveView={setActiveView} />
                    <div className="flex flex-grow relative">
                        {showWorkflowManager && (
                            <WorkflowManagerSidebar onSelectWorkspaceOption={handleSelectWorkspaceOption} />
                        )}
                        <div className="flex-grow p-8 flex flex-col">
                            {renderMainContent()}
                        </div>
                        {selectedOption && (
                            <WorkspaceOptionPanel
                                selectedWorkspace={selectedWorkspace}
                                selectedOption={selectedOption}
                            />
                        )}
                    </div>
                    <HelpPrompt />
                </div>
            </div>
        );
};

export default projectspaceid;
