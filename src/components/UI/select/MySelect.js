import React, {useContext} from "react";
import classes from './MySelect.module.css'
import {themeContext} from '../../context'

function Select({options, defaultValue, onChange}){
  const {theme} = useContext(themeContext)
  return(
    <select onChange={event => onChange(event.target.value)}  className={classes.MySeclect} style={theme==='blue' ?   {backgroundColor: '#285fce', color: 'white'} :   {backgroundColor: '#d9deef', color: 'black'}}>
      <option style={{color:'white'}} disabled>{defaultValue}</option>
      {options.map((option) => {
        return <option key={option.value} value={option.value}>{option.name}</option>
      })}
    </select>
  )
}
export default Select