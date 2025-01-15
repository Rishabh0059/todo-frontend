/* eslint-disable react/prop-types */
// import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const ToDo = ({text,updateMode,deleteMode}) => {
  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="icons">
      <FaEdit className="icon" onClick={updateMode}/>
      <MdDelete className="icon" onClick={deleteMode}/>
      </div>
    </div>
  )
}

export default ToDo

