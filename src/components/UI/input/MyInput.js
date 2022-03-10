import React from "react";
import classes from './MyInput.module.css'

function Input(props){
  return(
    <input {...props} className={classes.MyInput} />
  )
}
export default Input