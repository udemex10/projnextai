import React, { useState } from 'react';

function Backlog() {
  const [tasks, setTasks] = useState([
    // sample tasks
    { id: 1, name: "Task 1", inSprint: false },
    { id: 2, name: "Task 2", inSprint: false }
  ]);

  const [sprintTasks, setSprintTasks] = useState([]);

  const addToSprint = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, inSprint: true } : task
    );
    setTasks(updatedTasks);
    setSprintTasks(updatedTasks.filter(t => t.inSprint));
  };

  const removeFromSprint = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, inSprint: false } : task
    );
    setTasks(updatedTasks);
    setSprintTasks(updatedTasks.filter(t => t.inSprint));
  };

  return (
    <div>
      <h1>Backlog</h1>
      <button className="text-blue-500 mb-4">
        <i className="fas fa-plus"></i> {/* Assuming FontAwesome for the icon */}
      </button>

      <h2>Grouped List</h2>
      <button onClick={() => setSprintTasks(tasks)}>Create Sprint</button>
      <ul>
        {tasks.filter(t => !t.inSprint).map(task => (
          <li key={task.id}>
            {task.name}
            <button onClick={() => addToSprint(task.id)}>Add to Sprint</button>
            {/* Add other task options */}
          </li>
        ))}
      </ul>

      <h2>Sprint</h2>
      <ul>
        {sprintTasks.map(task => (
          <li key={task.id}>
            {task.name}
            <div className="dropdown">
              <button className="dropbtn">Options</button>
              <div className="dropdown-content">
                <button onClick={() => removeFromSprint(task.id)}>Remove from Sprint</button>
                {/* Other dropdown options */}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Backlog;
