import React, {useState, useContext, useEffect} from 'react';
import {themeContext} from './context'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

function Todo(){  
  const {theme} = useContext(themeContext)
  const [inputvalue, setInputvalue] = useState('')
  const [data, setData] = useState([])
  useEffect(()=>{
    const localStorageData = localStorage.getItem('data') || []
    setData(JSON.parse(localStorageData))
  },[])
  useEffect(()=>{
    localStorage.setItem('data', JSON.stringify(data))
  },[data])
  function addTodo(){
    setData([...data,{id : Date.now(), message:inputvalue}])
    setInputvalue('')
  }
  function removeTodo(event){
    setData([...data].filter(todo => {return todo.id !== event.id}))
  }
  function changeTodo(event){
    removeTodo(event)
    setInputvalue(event.message)
  }
  
  return(
    <div className={`container container-${theme}`}>
      <div className={`lolo ${theme}`}>
        <MyInput placeholder='To-do' value={inputvalue} onChange={event => setInputvalue(event.target.value) }/>
        <MyButton onClick={addTodo}>Add</MyButton>
        {data?.map(todo => {
          return(
          <div key={todo.id} style={{display:"flex", justifyContent:'space-between'}}>
            <h3>{todo.message}</h3><div><MyButton onClick={() => changeTodo(todo)}>Change</MyButton><MyButton onClick={() => removeTodo(todo)}>Remove</MyButton></div>
          </div>
          )
        })}
      </div>
      <div className='stiky'>
        <h1>To-do List</h1>
      </div>
    </div>
  )
}

export default Todo