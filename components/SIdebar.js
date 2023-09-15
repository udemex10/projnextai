function Sidebar({ setActiveView }) {
  return (
    <aside className="w-64 border-r border-gray-200 p-4">
      <button className="text-blue-500 mb-4">
        <i className="fas fa-plus"></i> {/* Assuming you are using FontAwesome */}
      </button>

      <ul className="mt-2">
        <li className="mb-2">
          <button onClick={() => setActiveView('roadmap')} className="block py-1 hover:text-blue-500">
            Roadmap
          </button>
        </li>
        <li className="mb-2">
          <button onClick={() => setActiveView('backlog')} className="block py-1 hover:text-blue-500">
            Backlog
          </button>
        </li>
        <li className="mb-2">
          <button onClick={() => setActiveView('board')} className="block py-1 hover:text-blue-500">
            Board
          </button>
        </li>
        <li className="mb-2">
          <button onClick={() => setActiveView('sprint board')} className="block py-1 hover:text-blue-500">
            Sprint
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
