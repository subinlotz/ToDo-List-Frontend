import React, { useState } from 'react'

function Todolist({text, updateMode, deleteMode}) {
  
  return (
    <div id='todo-list'>
      <p >{text}</p>
      <div id='icons'>
      <i onClick={updateMode} className="fa-solid fa-pen-to-square"></i>
      <i onClick={deleteMode} className="fa-solid fa-trash"></i>
      </div>
   
    </div>
  )
}

export default Todolist
