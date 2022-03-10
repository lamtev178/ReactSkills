import React from "react";
import classes from './button.module.css'

function Button({children,...props}){
  return(
    <button {...props} className={classes.MyBtn}>
      {children}
    </button>
  )
}
export default Button