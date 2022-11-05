import './App.css';
import axios from 'axios';
import react, { useEffect, useState, useRef } from 'react';
import Todos from './components/Todos';
import Form from './components/Form';

function App() {
  const [todos, setTodos] = useState([])
  const [editTodo, seteditTodo] = useState(null)
  useEffect(()=>{
    axios.get('http://localhost:8000/api/todos',{
      headers:{
        'Content-Type':'application/json',
        'Authorization':'Token c640df4af1ef3913b63ffb2be9d8dd4787e4b2f0'
      }
    }).then(resp=>setTodos(resp.data))
    .catch(err=>console.log(err))
  },[])

  const updateBtn = (todo) =>{
    seteditTodo(todo)
  }
  const btnDelete = (todo) =>{
    axios.delete(`http://localhost:8000/api/todos/${todo.id}/`,{
      headers:{
        'Content-Type':'application/json',
        'Authorization':'Token c640df4af1ef3913b63ffb2be9d8dd4787e4b2f0'
      }
    }).then(()=>setTodos(todos.filter((t) => t.id !== todo.id)))
    .catch(err=>console.log(err))
  }
  const updateInfo = (todo) =>{
    const newtodo = todos.filter(mytodo => {
      if(mytodo.id === todo.id){
        return todo
      }
      else {
        return mytodo
      }
    })
    setTodos(newtodo)
    window.location.reload()
  }

  const addtodo = () =>{
    seteditTodo({
      'title':'',
      'desc':''
    })
  }

  const addTodoInfo = (todo) => {
    setTodos([...todos,todo])
  }

  return (
    <div className="App">
      <button onClick={()=>addtodo()}>Add Todo</button>
      <br/>

      {editTodo ? 
        <Form todo={editTodo} updateInfo={updateInfo} addTodoInfo={addTodoInfo}/>
      :null}

      {/* {editTodo && editTodo.id ? */}
      {/* <Todos editTodo={editTodo} todos={todos} btnUpdate={updateBtn} btnDelete={btnDelete}/>  : */}
      <Todos todos={todos} btnUpdate={updateBtn} btnDelete={btnDelete}/>
      {/* } */}
    </div>
  );
}

export default App;
