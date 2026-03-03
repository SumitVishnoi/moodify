import React from 'react'
import "../styles/register.scss"
import FormGroup from '../components/FormGroup'

const Register = () => {
  return (
    <main className='register-page'>
        <div className="form-container">
            <h1>Register</h1>
            <form>
                <FormGroup label="username" placeholder="Enter username" type="text" />
                <FormGroup label="email" placeholder="Enter email" type="email" />
                <FormGroup label="password" placeholder="Enter password" type="password" />
                <button className='button' type='submit'>Register</button>
            </form>
        </div>
    </main>
  )
}

export default Register