import React, { useState } from 'react'
import './App.css'

function ToDoList() {
    const [task, setTask] = useState("");
    const [toDos , setToDos] = useState([]);

    function addToDo(e){
        e.preventDefault();
        task != "" ? setToDos([...toDos, {id: Math.random(), value: task, isDone: false}]) : "";
        setTask("")
    }

    function changeState(changedTodo){
        setToDos( toDos.map((toDo)=>{
            if(toDo.id === changedTodo.id) return changedTodo;
            return toDo;
        }) )
    }

    const isDone = toDos.filter((toDo) => toDo.isDone).length;

  return (
    <div id='content'>
        <form id="addPart" onSubmit={addToDo}>
            <input type="text" name='toDo' value={task} onChange={(e) => setTask(e.target.value)} />
            <button>Add</button>
        </form>
        <ul>
            {
                toDos.map((toDo) =>{
                    return  <li key={toDo.id}>
                                <p style={toDo.isDone ? {textDecoration: "line-through", opacity: 0.6} : {textDecoration: "none", opacity: 1} }> {toDo.value} </p>
                                <input type="checkbox" checked={toDo.isDone} onChange={(e) => {changeState({...toDo, isDone: e.target.checked}) }}/>
                            </li>
                })
            }
        </ul>
        <h2 id="count">{toDos.length != 0 ? `${isDone} / ${toDos.length}` : ""}</h2>
    </div>
  )
}

export default ToDoList