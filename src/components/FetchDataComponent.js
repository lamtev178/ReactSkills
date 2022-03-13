import React, {useState, useContext, useEffect} from 'react';
import {themeContext} from './context'
import MyButton from './UI/button/MyButton'

function FetchData(){  
  const axios = require('axios');
  const [user, setUser] =useState('')
  useEffect(()=>{
    handlefetchData()
  },[])
  async function handlefetchData(){
    try{
    const response = await axios.get('https://randomuser.me/api/')
      setUser(response.data.results[0]);
    }
    catch(error) {
      console.log(error)
    }
  }

  const {theme} = useContext(themeContext)
  return(
    <div className={`container container-${theme}`}>
      <div className={`lolo ${theme}`}>
        <MyButton onClick={handlefetchData}>Click</MyButton>
        <img src={user?.picture?.large} alt='user Photo' style={{borderRadius:'50%', display:'block'}}/>
        <h3>Gender : {user?.gender}</h3>
        <h3>Name : {user?.name?.first + ' ' + user?.name?.last}</h3>
        <h3>Email : {user?.email}</h3>
        <h3>Country : {user?.location?.country}</h3>
      </div>
      <div className='stiky'>
        <h1>Fetch Some User</h1>
      </div>
    </div>
  )
}

export default FetchData