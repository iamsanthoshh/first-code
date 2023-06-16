import React from 'react'

const Button = ({color,text ,onClick}) => {
  //  const onClick =(e) => { console.log(e)}
  return (
    <button  className="btn" onClick ={onClick} style ={{backgroundColor:color}}> {text}</button>
  )
}
export default Button;