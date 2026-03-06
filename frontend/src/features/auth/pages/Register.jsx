import React, { useState } from 'react'
import "../styles/register.scss"
import FormGroup from '../components/FormGroup'
import {useAuth} from "../hooks/useAuth"
import { useNavigate } from 'react-router'

const Register = () => {
  const{loading, handleRegister} = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e)=> {
    e.preventDefault()

    await handleRegister({username, email, password})
    navigate("/")
  }

  return (
    <main className='register-page'>
        <div className="form-container">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <FormGroup value={username} onChange={(e)=> {setUsername(e.target.value)}} label="username" placeholder="Enter username" type="text" />
                <FormGroup value={email} onChange={(e)=> {setEmail(e.target.value)}} label="email" placeholder="Enter email" type="email" />
                <FormGroup value={password} onChange={(e)=> {setPassword(e.target.value)}} label="password" placeholder="Enter password" type="password" />
                <button className='button' type='submit'>Register</button>
            </form>
        </div>
    </main>
  )
}

export default Register