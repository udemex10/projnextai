import React, { useState, useEffect } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import Column from './Column';

export default function KanbanBoard(){

    const [completed, setCompleted] = useState([]);
    const [incompleted, setIncompleted] = useState([]);
    
    useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((json) => {
            setCompleted(json.filter((task) => task.completed));
            setIncompleted(json.filter((task) => !task.completed));
        });
    }, {});
    
    
    /*const handleDragEnd = (result) => {

        const { destination, source, draggableId} = result;

        if(source.droppableId == destination.droppableId){
            return;
        }

        if(source.droppableId == 2){
            setCompleted(removeItemById(draggableId, completed));
        }
        else{
            setIncompleted(removeItemById(draggableId, incompleted));
        }

        //Get Item
        const task = findItemById(draggableId, [...incompleted, ...completed])

        //Add Item
        if(destination.droppableId == 2){
            setCompleted([{ ...task, completed: !task.completed}, ...completed]);
        }
        else{
            setIncompleted([{ ...task, completed: !task.completed}, ...incompleted]);
        }


    }
    /**/


    let handleDragEnd = result => {
        const { destination, source, draggableId } = result
      
        if (!destination) {
          return
        }
      
        if (
          destination.droppableId === source.droppableId &&
          destination.index === source.index
        ) {
          return
        }
      
        const start = this.state.columns[source.droppableId]
        const finish = this.state.columns[destination.droppableId]
      
      
        // this is the logic behind sorting state , you have to do it by your self
        if (start === finish) {
          const newTaskIds = Array.from(start.taskIds)
          newTaskIds.splice(source.index, 1)
          newTaskIds.splice(destination.index, 0, draggableId)
      
          const newColumn = {
            ...start,
            taskIds: newTaskIds
          }
      
          const newState = {
            ...this.state,
            columns: {
              ...this.state.columns,
              [newColumn.id]: newColumn
            }
          }
      
          this.setState(newState)
          return
        }
      }

    function findItemById(id, array){
        return array.find((item) => item.id == id)
    }

    function removeItemById(id, array){
        return array.filter((item) => item.id != id)
    }
    
    
    return(
        <DragDropContext onDragEnd={handleDragEnd}>
            <h2 style={{ textAlign : "center" }}>Progress Board</h2>


            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row"
              }}
            >

                <Column title={"TO DO"} tasks={incompleted} id={"1"} />
                <Column title={"DONE"} tasks={completed} id={"2"} />
                <Column title={"BACKLOG"} tasks={[]} id={"3"} />


            </div>
        </DragDropContext>
    )
}