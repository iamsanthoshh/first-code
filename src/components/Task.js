import React from 'react'

export const Task = ({task,onDelete,onToggle}) => {
  return (
    <div onDoubleClick={() => onToggle(task.id)}><h3>{task.text} </h3> <button onClick={()=> onDelete(task.id)}> delete</button>
    <p>{task.day} onDelete={onDelete}</p></div>
  )
}
