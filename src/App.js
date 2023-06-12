import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

import { useState } from "react";



 const App = () => {
  const [showAddTask,setShowAddTask] = useState(false)
  
const [tasks,setTasks] = useState ([ {
  id:1,
  text:'today meeting',
  day:'march1',
  reminder:true,
},
{
  id:2,
  text:'leave',
  day:'dec 2023',
  reminder:false,
},
{
  id:3,
  text:'santhosh birthday',
  day:'dec2020',
  reminder:true,
},
] )
// add task
const  addTask =(task) => {
  const id =Math.floor(Math.random() * 10000) +1
  const newTask ={id,...task}
  setTasks([...tasks,newTask])
}


//delete task
const deleteTask = (id) => {

  setTasks(tasks.filter((task)=> task.id!==id))
}
const toggleReminder =(id) => {
setTasks(tasks.map((task)=> task.id ===id ? {...task,reminder:!task.reminder} : task ))
}
 
    return ( <div><Header title ="Task  Tracker" onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>{ showAddTask && <AddTask onAdd={addTask}/>}
   {tasks.length >0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> :'No Tasks to show'} </div>)
  }
 
export default App;
