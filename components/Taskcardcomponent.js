import { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';

function TaskCard({ task, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
          className={`border p-2 mb-2 ${isHovered ? 'bg-gray-200' : 'bg-white'}`}
        >
          <p>{task.name}</p>
          <p>Assigned to: {task.assignee.name}</p>
        </div>
      )}
    </Draggable>
  );
}

export default TaskCard;
