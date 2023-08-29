import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { Link} from "react-router-dom";

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {

    const id = Math.floor(Math.random() * 10000) + 1

    const newTodo = {id, ...todo}
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id) =>{
    setTodos(todos.filter((todo) => todo.id !== id))
  }


  return (
    
    <div className="App">
      <AddTodo onAdd={addTodo}/>
      <Todos todos={todos} onDelete={deleteTodo}/>
      <Link to="/about">About</Link>
    </div>
  );
}

export default App;
