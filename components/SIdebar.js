function Sidebar({ setActiveView }) {
  return (
    <aside className="w-64 border-r border-gray-700 bg-dark-lighter text-dark-lighter p-4 text-white">
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
          <button onClick={() => setActiveView('sprint board')} className="block py-1 hover:text-blue-500 transition-transform duration-300 ease-in-out transform hover:scale-105">
            Sprint
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
