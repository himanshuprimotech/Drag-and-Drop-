import React, {useState} from 'react'
import Button from '@mui/material/Button';
import styled from 'styled-components'


const Logged = () => {
    const [isLoggedIn, setisLoggedIn] = useState(false)
    const handleLogin=()=>{
        console.log("Logged in")
        setisLoggedIn(true);
    }
    const handleLogout=()=>{
        console.log("Logged Out")
        setisLoggedIn(false);
    }
  return (
    <>
        <Wrapper>
        <div style={{marginTop:"20px"}}>
        <Button className='hello log' onClick={handleLogin} variant="contained">Login</Button>
        <Button className='log' onClick={handleLogout} variant="contained">Logout</Button>
        <div>User is {isLoggedIn ? 'Logged In ': 'Logged Out'}</div>
        </div>
        </Wrapper>
    </>
  )
}

export default Logged

const Wrapper=styled.section`

.hello{
    margin-right:20px;
    
}
.log{
    padding: 10px 40px;
}
`