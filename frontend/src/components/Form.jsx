import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Form(props) {
    const[title, setTitle] = useState(props.todo.title)
    const[desc, setDesc] = useState(props.todo.desc)
    useEffect(()=>{
        setTitle(props.todo.title)
        setDesc(props.todo.desc)
    },[props.todo])

    const updateTodo = (e) => {
      e.preventDefault()
      let formdata = new FormData()
      formdata.append('title',title)
      formdata.append('desc',desc)
      axios.put(`http://localhost:8000/api/todos/${props.todo.id}/`,formdata,{
        headers:{
          'Content-Type':'application/json',
          'Authorization':'Token c640df4af1ef3913b63ffb2be9d8dd4787e4b2f0'
        },
      }).then(resp=>props.updateInfo(resp.data)).catch(err=>console.log(err))
      setTitle('')
      setDesc('')
    }

    const addTodoInfo = (e) => {
      e.preventDefault()
      let formdata = new FormData()
      formdata.append('title',title)
      formdata.append('desc',desc)
      axios.post(`http://localhost:8000/api/todos/`,formdata,{
        headers:{
          'Content-Type':'application/json',
          'Authorization':'Token c640df4af1ef3913b63ffb2be9d8dd4787e4b2f0'
        },
      }).then(resp=>(props.addTodoInfo(resp.data)))
      .catch(err=>console.log(err))
      setTitle('')
      setDesc('')

    }
  return (
    <div>
        <input type="text" name="title" id="title" value={title} onChange={e=>setTitle(e.target.value)} />
        <textarea type="text" name="desc" id="desc" value={desc} onChange={e=>setDesc(e.target.value)} />
        {props.todo && props.todo.title ?
        <button onClick={updateTodo}>Update</button>:
        <button onClick={addTodoInfo}>New</button>
        }
        

    </div>
  )
}

export default Form