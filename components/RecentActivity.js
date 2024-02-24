// RecentActivity.js
import React from 'react';
import { FaRegFile } from 'react-icons/fa'; // Example icon

const RecentActivity = () => {
    const recentItems = [
        { name: 'Component 1' },
        { name: 'Workspace A' },
        { name: 'Analysis Tool X' },
        // ... more items
    ];

    return (
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 flex flex-wrap">
            <h2 className="text-lg mb-2 w-full">Recent Activity</h2>
            {recentItems.map((item, index) => (
                <div key={index} className="p-2 hover:border hover:border-gray-600 rounded mr-2 mb-2" style={{ width: '200px' }}>
                    <div className="flex items-center">
                        <FaRegFile className="mr-2" />
                        <span>{item.name}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RecentActivity;