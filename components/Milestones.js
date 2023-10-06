import React from 'react';

function SprintBoard() {
  const tasks = [
    { id: 1, name: 'Task 1', assignee: 'User A', status: 'working on' },
    { id: 2, name: 'Task 2', assignee: null, status: 'unassigned' },
    { id: 3, name: 'Task 3', assignee: 'User B', status: 'done' },
    //... other tasks
  ];

  const users = ['User A', 'User B']; // This would be fetched or derived from the tasks.

  const statuses = ['to do', 'working on', 'done', 'stuck'];

  return (
    <div>
      <h1>Sprint Board</h1>

      <section>
        <h2>Unassigned</h2>
        <ul>
          {tasks
            .filter(task => task.status === 'unassigned')
            .map(task => (
              <li key={task.id}>{task.name}</li>
            ))}
        </ul>
      </section>

      {users.map(user => (
        <section key={user}>
          <h2>{user}</h2>

          {statuses.map(status => (
            <div key={status}>
              <h3>{status.charAt(0).toUpperCase() + status.slice(1)}</h3>
              <ul>
                {tasks
                  .filter(task => task.assignee === user && task.status === status)
                  .map(task => (
                    <li key={task.id}>{task.name}</li>
                  ))}
              </ul>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}

export default SprintBoard;
