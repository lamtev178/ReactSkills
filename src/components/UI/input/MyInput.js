import React, {useContext} from "react";
import classes from './MyInput.module.css'
import {themeContext} from '../../context'

function Input(props){
  const {theme} = useContext(themeContext)
  return(
    <input {...props} className={classes.MyInput} style={theme==='blue' ?   {backgroundColor: '#285fce', color: 'white'} :   {backgroundColor: '#d9deef', color: 'black'}}/>
  )
}
export default Input