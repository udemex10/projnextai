function Sidebar({ setActiveView }) {
  return (
    <aside className="w-64 border-r border-gray-700 bg-gray-800 text-white p-4">
      <button className="text-blue-500 mb-4">
        <i className="fas fa-plus"></i> {/* Assuming you are using FontAwesome */}
      </button>

      <ul className="mt-2">
        <li className="mb-2">
          <button onClick={() => setActiveView('roadmap')} className="block py-1 hover:text-blue-500 transition-transform duration-300 ease-in-out transform hover:scale-105">
            Roadmap
          </button>
        </li>
        <li className="mb-2">
          <button onClick={() => setActiveView('backlog')} className="block py-1 hover:text-blue-500 transition-transform duration-300 ease-in-out transform hover:scale-105">
            Backlog
          </button>
        </li>
        <li className="mb-2">
          <button onClick={() => setActiveView('board')} className="block py-1 hover:text-blue-500 transition-transform duration-300 ease-in-out transform hover:scale-105">
            Board
          </button>
        </li>
        <li className="mb-2">
          <button onClick={() => setActiveView('Milestones')} className="block py-1 hover:text-blue-500 transition-transform duration-300 ease-in-out transform hover:scale-105">
            Milestones
          </button>
        </li>
        <li className="mb-2">
           <button onClick={() => setActiveView('cadtools')} className="block py-1 hover:text-blue-500 transition-transform duration-300 ease-in-out transform hover:scale-105">
               CAD tools
           </button>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
