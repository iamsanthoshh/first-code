import React from 'react'

export const Task = ({task,onDelete,onToggle}) => {
  return (
    <div onDoubleClick={() => onToggle(task.id)} className='task'><h3>{task.text} </h3> <button onClick={()=> onDelete(task.id)} className='delete'> delete</button>
    <p>{task.day} {onDelete}</p></div>
  )
}
