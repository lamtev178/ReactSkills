import React from "react";
import Button from "./UI/button/MyButton";

function Header(){
  return(
    <div className="header">
      <h3>Some skills</h3>
      <Button disabled>Submit</Button>
    </div>
  )
}
export default Header