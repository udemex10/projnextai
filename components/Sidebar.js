import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //font awesome
import { faPlus } from '@fortawesome/free-solid-svg-icons'; // + icons

function Sidebar({ setActiveView }) {
  // tracking if dropdown is open
  const [openDropdown, setOpenDropdown] = useState(null);

  // initiate dropdown
  const toggleDropdown = (view) => {
    setOpenDropdown(openDropdown === view ? null : view);
  };

  // Dropdown component
  const DropdownMenu = () => (
    <div className="absolute mt-2 w-40 rounded-md shadow-lg bg-white text-gray-900 z-10">
      <div className="py-1">
        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200" onClick={() => console.log('New task')}>New task</a>
        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200" onClick={() => console.log('New milestone')}>New milestone</a>
      </div>
    </div>
  );

  return (
    <aside className="w-64 border-r border-gray-700 bg-gray-800 text-white p-4 relative">
      <ul className="mt-2">
        {['roadmap', 'backlog', 'board', 'Milestones', 'cadtools'].map((view, index) => (
          <li className="mb-2 relative flex items-center" key={index}>
            <button
              onClick={() => setActiveView(view)}
              className="py-1 hover:text-blue-500 transition-transform duration-300 ease-in-out transform hover:scale-105 text-left flex-grow"
            >
              {view.charAt(0).toUpperCase() + view.slice(1)}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown(view);
              }}
              className="ml-2 text-white"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
            {openDropdown === view && <DropdownMenu />}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
