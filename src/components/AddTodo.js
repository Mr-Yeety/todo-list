import React, { useState } from 'react'

const AddTodo = ({onAdd}) => {

    const [newTodo, setNewTodo] = useState("")

    const onSubmit = (e) => {

        if(!newTodo){
            alert("Add todo")
        }

        onAdd({text: newTodo})

        setNewTodo('')

    }

  return (
    <div>
      <input type="text" placeholder='Add a Todo' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={onSubmit}>Add Todo</button>
    </div>
  )
}

export default AddTodo
