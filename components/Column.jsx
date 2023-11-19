import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';
import styled from "styled-components";
//import "./scroll.css";
import Task from './Task';

const Container = styled.div`
    background-color: #F4F5F7;
    border-radius: 2.5px;
    width: 300px;
    height: 475px;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    border: 1px solid gray;
`;

const Title = styled.h3`
    padding: 8px;
    background-color: #F4F5F7;
    text-align: center;
`;

const TaskList = styled.div`
    padding: 3px;
    transition: background-color 0.2s ease;
    background-color: #F4F5F7;
    flex-grow: 1;
    min-height: 100px;
`;

export default function Column({ title, tasks, id }) {
  return (
    <Container className="column">

      <Title
        style={{
          backgroundColor: "lightblue",
          position: "sticky",
        }}
      >
        {title}
      </Title>

      <Droppable droppableId={id}>
        {(provided, snapshot) => {
          return (
            <TaskList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
                
                {/* Provide Your Tasks */}
                {tasks.map((task, index) => (
                    <Draggable draggableId={task.id} index={index} key={task.id}>
                        {(provided, snapshot) => (
                        <Task
                            provided={provided}
                            snapshot={snapshot}
                            task={task}
                            index={index}
                        />
                        )}
                    </Draggable>
                ))}
                {provided.placeholder}
            </TaskList>
          );
        }}
      </Droppable>
    </Container>
  );
}



/*
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from "styled-components";
import "./scroll.css";
import { Task } from '@/models';

const Container = styled.div`
    background-color: #F4F5F7;
    border-radius: 2.5px;
    width: 300px;
    height: 475px;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none
    border: 1px solid gray;
`;

const Title = styled.h3`
    padding: 8px;
    background-color: #F4F5F7;
    text-align: center;
`;

const TaskList = styled.div`
    padding: 3px;
    transistion: background-color 0.2s ease;
    background-color: #F4F5F7;
    flex-grow: 1;
    min-height: 100px;
`;


export default function Column({ title, tasks, id}){
    return(
        <Container className="column">
            <h2 style={{ textAlign : "center" }}>Progress Board</h2>

            <Title
              style={{
                backgroundColor: "lightblue",
                position: "stick",
              }}
            >
                {title}
            </Title>

            <Droppable droppableId={id}>
                {(provided, snapshot) => {
                    <TaskList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDragingOver={snapshot.isDraggingOver}
                    >
                        {/* Provide Your Tasks* /}

                        {
                            tasks.map((task, index) => (<Task key={index} index={index} task={task} />))
                        }

                        {provided.placeholder}
                    </TaskList>
                }}

            </Droppable>
        </Container>

    )
}
/**/