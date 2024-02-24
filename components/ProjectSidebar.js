import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function ProjectSidebar({ setShowWorkflowManager, setActiveView  }) {
    const [openDropdown, setOpenDropdown] = useState(false);

    // Handler for sidebar option click
    const handleSidebarOptionClick = (view) => {
            if (view === 'Roadmap') {
                setActiveView('roadmap'); // Set the active view to 'roadmap'
            } else if (view === 'Component Workflow') {
                setShowWorkflowManager(prevState => !prevState);
            }

        // ... handle other views ...
    };

    return (
        <aside className="w-64 border-r border-gray-700 bg-gray-800 text-white p-4 relative">
            <ul className="list-none">
                {/* Plus Icon Button */}
                <li className="mb-2">
                    <button
                        onMouseOver={() => setOpenDropdown(true)}
                        onMouseLeave={() => setOpenDropdown(false)}
                        className="p-2 hover:text-blue-500 transition-transform duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center bg-red-600 rounded text-white"
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                    {openDropdown && (
                        <div className="absolute top-10 w-40 rounded-md shadow-lg bg-white text-gray-900 z-10">
                            {/* Dropdown for additional actions */}
                        </div>
                    )}
                </li>
                {['Roadmap', 'Kanban Board', 'Component Workflow', 'Insights', 'Budget Analysis', 'Validation manager', 'Modules', 'Knowledge Capture AI', 'Roles', 'Project Settings'].map((view, index) => (
                     <li className="mb-2" key={index}>
                       <button
                        onClick={() => handleSidebarOptionClick(view)}
                        className="py-1 hover:text-blue-500 transition-transform duration-300 ease-in-out transform hover:scale-105 text-left w-full"
                        >
                            {view}
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default ProjectSidebar;