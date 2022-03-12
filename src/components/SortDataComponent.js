import React, {useContext} from 'react';
import Select from './UI/select/MySelect';
import {themeContext} from './context'

function SortData(){  
  const {theme} = useContext(themeContext)
  const {useState} = React
  const [data, setData] = useState([
    {id : '1', name: 'Alex', score: -13.5},
    {id : '2', name: 'Djohn', score: 13.5},
    {id : '3', name: 'Sara', score: 18.5},
    {id : '4', name: 'Tom', score: 5.5},
    {id : '5', name: 'Mike', score: -43.8},
    {id : '6', name: 'Lara', score: 0.5},
  ])
  function sortData(type){
    if(type === 'ascending') {
      setData([...data].sort((a,b) => a.score-b.score))
    }
    if(type === 'descending') {
      setData([...data].sort((a,b) => b.score-a.score))
    }
  }
  return(
    <div className={`container container-${theme}`}>
      <div className={`lolo ${theme}`}>
        <Select 
          onChange={sortData}
          defaultValue='Сортировка'
          options={[
            {name:'По возрастанию', value:'ascending'}, 
            {name:'По убыванию', value:'descending'}
          ]}
        />
        <ul>
          {data.map((user) => {
            return(
              <li key={user.id}>{user.name + ', score : ' + user.score}</li>
            )
          })}
        </ul>
      </div>
      <div className='stiky'>
        <h1>Sort Data</h1>
      </div>
    </div>
)}
export default SortData