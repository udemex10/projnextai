// taskboard.js

import React from 'react';

function boardComponent({ tasks, currentUser }) {
  // Filter tasks based on their status and assignee
  const doingTasks = tasks.filter(task => task.status === 'working on' && task.assignee === currentUser);
  const doneTasks = tasks.filter(task => task.status === 'done' && task.assignee === currentUser);
  const reviewTasks = tasks.filter(task => task.status === 'stuck' && task.assignee === currentUser);

  return (
    <div className="taskboard">
      <div className="column">
        <h2>Doing</h2>
        <ul>
          {doingTasks.map(task => (
            <li key={task.id}>{task.name}</li>
          ))}
        </ul>
      </div>
      <div className="column">
        <h2>Done</h2>
        <ul>
          {doneTasks.map(task => (
            <li key={task.id}>{task.name}</li>
          ))}
        </ul>
      </div>
      <div className="column">
        <h2>Review</h2>
        <ul>
          {reviewTasks.map(task => (
            <li key={task.id}>{task.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default boardComponent();
