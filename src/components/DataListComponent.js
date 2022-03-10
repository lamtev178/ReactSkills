import React from 'react';
import Button from './UI/button/MyButton';
import Input from './UI/input/MyInput';

function DataList(){  
  const {useState} = React
  const data = [
    {id : '1', name: 'Alex'},
    {id : '2', name: 'Djohn'},
    {id : '3', name: 'Sara'},
    {id : '4', name: 'Tom'},
    {id : '5', name: 'Mike'},
    {id : '6', name: 'Lara'},
  ]
  const [activeUser, setActiveUser] = useState(data)
  const [inputValue, setInputValue] = useState('')
  function handleChange(event){
    setInputValue(event.target.value)
  }
  console.log(inputValue);
  function handleClick(){
    setActiveUser(data.filter((user) => {return user.name.toUpperCase().startsWith(inputValue.toUpperCase())}))
  }   
  return(
    <div className='container'>
      <div className='lolo'>
        <Input type='text' value={inputValue} onChange={handleChange}/>
        <Button onClick={handleClick}>Найти</Button>
        <ul>
          {activeUser.map((user) => {
            return(
              <li key={user.id}>{user.name}</li>
            )
          })}
        </ul>
      </div>
      <div className='stiky'>
        <h1>Search Some Data</h1>
      </div>
    </div>
)}
export default DataList