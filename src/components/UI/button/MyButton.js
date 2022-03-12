import React, {useContext} from "react";
import classes from './button.module.css' 
import {themeContext} from '../../context'

function Button({children,...props}){
  const {theme} = useContext(themeContext)
  return(
    <button {...props} className={classes.MyBtn} style={theme==='blue' ?   {backgroundColor: '#285fce', color: 'white'} :   {backgroundColor: '#d9deef', color: 'black'}}>
      {children}
    </button>
  )
}
export default Button