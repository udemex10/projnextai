import React, { useState } from 'react';

const WorkspaceOption = ({ title, workspaces, workspace, onSelectOption }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

const handleOptionClick = (option) => {
    if (title === 'All Component Workspaces') {
        onSelectOption('all', option); // Use 'all' as a distinct identifier
    } else {
        onSelectOption(workspace, option);
    }
    setDropdownOpen(false);
};

    return (
        <div className="mb-2">
            <div
                className="p-2 border border-transparent hover:border-gray-500 rounded cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
            >
                {title}
            </div>
            {dropdownOpen && (
                <div className="bg-gray-700 p-2 rounded">
                    <div className="hover:bg-gray-600 p-2 rounded" onClick={() => handleOptionClick('overview')}>Overview</div>
                    <div className="hover:bg-gray-600 p-2 rounded" onClick={() => handleOptionClick('insights')}>Insights</div>
                    <div className="hover:bg-gray-600 p-2 rounded" onClick={() => handleOptionClick('workflow')}>Workflow</div>
                </div>
            )}
        </div>
    );
};

export default WorkspaceOption;
