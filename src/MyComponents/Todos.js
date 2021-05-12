import React from 'react'
import {Todoitem}  from "./Todoitem";
export const Todos = (props) => {
    return (
      <div className="container col-8">
        <h3 className="text-center my-4">Todo's List</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Task</th>
              <th scope="col">Desc</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {props.todos.length === 0
              ? "No Todos To Display"
              : props.todos.map((todo) => {
                  return (
                    <Todoitem
                      todo={todo}
                      key={todo.sno}
                      onDelete={props.onDelete}
                    />
                  );
                })}
          </tbody>
        </table>
      </div>
    );
}
