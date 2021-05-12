import React from 'react'

export const Todoitem = ({todo,onDelete}) => {
    return (
      <tr>
        <td><b>{todo.title}</b></td>
        <td>{todo.desc}</td>
        <td>
          {
            <button
              className="btn btn-sm btn-danger"
              onClick={() => onDelete(todo)}
            >
              Delete
            </button>
          }
        </td>
      </tr>
    );
}
