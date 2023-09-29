import React, { useState } from 'react'
import "./App.css"
import InputEmail from './components/email/InputEmail'
import InputPassword from './components/password/InputPassword';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';


const App = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const handleInput = () => {
    console.log("Email: " + email);
    console.log("Password: " + password);
  }
  return (
    <>
      <div className='main-page'>
        <div className='container'>
          <div>
            <img src="../img/img-01.png" alt="Logo" />
          </div>
          <form onSubmit={handleInput} className="form">
            <h3>Login-page</h3>
            <div className="email-input" >
              <MailIcon className='icons'/>
              <InputEmail
                className="email-input"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className='password-input'>
              <LockIcon className='icons'/>
              <InputPassword
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <button type='submit'>Register</button>
            <p><span><a href="#">or create an Account -{'>'}</a></span></p>
          </form>
        </div>
  

      </div>
    </>
  )
}

export default App