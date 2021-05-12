import React from "react";
import { useState } from 'react';
export const AddTodo = (props) => {
    const [task, settask] = useState("");
    const [detail, setdetail] = useState("");
    const addtask = (e)=>{
        e.preventDefault();
        if(!task || !detail){
             alert("Please Enter title and description")
        }
        props.addTodo(task,detail)
    }
  return (
    <div className="container my-4 col-6">
      <h3 className="text-center">Add a Task</h3>
      <form onSubmit={addtask}>
        <div className="mb-3">
          <label htmlFor="task" className="form-label">
            Add Task
          </label>
          <input type="text" value={task} className="form-control" id="task" onChange={(e)=>{settask(e.target.value)}} />
        </div>
        <div className="mb-3">
          <label htmlFor="detail" className="form-label">
            Add Description
          </label>
          <input type="text" value={detail} className="form-control" id="detail" onChange={(e)=>{setdetail(e.target.value)}}/>
        </div>
        <button type="submit" className="btn btn-sm btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
