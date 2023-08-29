import React from 'react'

const Todo = ({todo, onDelete}) => {
  return (
    <div>
      <h1>{todo.text}</h1>
      <button onClick={() => {onDelete(todo.id)}}>Delete Todo</button>
    </div>
  )
}

export default Todo
