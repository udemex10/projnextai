import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Sidebar({ setActiveView }) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Dropdown component
  const DropdownMenu = () => (
    <div className="absolute top-10 w-40 rounded-md shadow-lg bg-white text-gray-900 z-10">
      <div className="py-1">
        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200" onClick={() => console.log('New task')}>New task</a>
        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200" onClick={() => console.log('New milestone')}>New milestone</a>
      </div>
    </div>
  );

  return (
    <aside className="w-64 border-r border-gray-700 bg-gray-800 text-white p-4 relative">
      <ul className="mt-2">
        <li className="mb-2">
          <button
            onMouseOver={() => setOpenDropdown(true)}
            onMouseLeave={() => setOpenDropdown(false)}
            className="p-2 hover:text-blue-500 transition-transform duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center bg-red-600 rounded text-white"
            style={{ justifyContent: 'center', height: '32px' }} // Centered plus button
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
          {openDropdown && <DropdownMenu />}
        </li>
        {['roadmap', 'backlog', 'board', 'Milestones', 'cadtools', 'PLM'].map((view, index) => (
          <li className="mb-2" key={index}>
            <button
              onClick={() => setActiveView(view)}
              className="py-1 hover:text-blue-500 transition-transform duration-300 ease-in-out transform hover:scale-105 text-left w-full"
            >
              {view.charAt(0).toUpperCase() + view.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
