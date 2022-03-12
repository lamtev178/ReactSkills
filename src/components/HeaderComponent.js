import React, {useContext} from "react";
import Button from "./UI/button/MyButton";
import {themeContext} from './context'

function Header(){
  const {theme, setTheme} = useContext(themeContext)
  return(
    <div className={`header header-${theme}`}>
      <h3>Some skills</h3>
      <Button onClick={() => setTheme(theme === 'blue' ? 'white' : 'blue')}>Change theme</Button>
    </div>
  )
}
export default Header