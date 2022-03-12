import React, {useContext} from "react";
import {themeContext} from './context'

function Footer(){
  const {theme} = useContext(themeContext)
  return(
    <div className={`footer footer-${theme}`}></div>
  )
}
export default Footer