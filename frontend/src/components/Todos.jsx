import React from 'react'
import Form from './Form'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function Todos(props) {

    // const[title, setTitle] = useState(props.editTodo.title)
    // const[desc, setDesc] = useState(props.editTodo.desc)
    // useEffect(()=>{
    //     setTitle(props.editTodo.title)
    //     setDesc(props.editTodo.desc)
    // },[props.todo])

    const btnUpdate = (todo)=>{
        props.btnUpdate(todo)
    }
    const btnDelete = (todo)=>{
        props.btnDelete(todo)
    }

    // const updateTodo = (e) => {
    //     e.preventDefault()
    //     let formdata = new FormData()
    //     formdata.append('title',title)
    //     formdata.append('desc',desc)
    //     axios.put(`http://localhost:8000/api/todos/${props.editTodo.id}/`,formdata,{
    //       headers:{
    //         'Content-Type':'application/json',
    //         'Authorization':'Token c640df4af1ef3913b63ffb2be9d8dd4787e4b2f0'
    //       },
    //     }).then(resp=>props.updateInfo(resp.data)).catch(err=>console.log(err))
    //     setTitle('')
    //     setDesc('')
    //   }
  return (
    <div>
        {!props.todos ? "No Todos" :
        props.todos.map(todo=>{
            return(
                <div key={todo.id}>
                    <h2><span>{todo.id}</span> - {todo.title}</h2>
                    <p>{todo.desc}</p>
                    <button className='btn btn-success' onClick={()=>btnUpdate(todo)}>Update</button>
                    <button className='btn btn-danger' onClick={()=>btnDelete(todo)}>Delete</button>
{/*                     
                    {props.editTodo && props.editTodo.id ? 
                        <div>
                        <input type="text" name="title" id="title" value={title} onChange={e=>setTitle(e.target.value)} />
                        <textarea type="text" name="desc" id="desc" value={desc} onChange={e=>setDesc(e.target.value)} />    
                        <button onClick={updateTodo}>Update</button>
                        </div>
                        :
                        null
                    } */}
                        
                </div>
            )
        })}
    </div>
  )
}
