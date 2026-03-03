import React from 'react'

const FormGroup = ({label, placeholder, type}) => {
  return (
    <div className='form-group'>
        <label htmlFor={label}>{label}</label>
        <input type={type} name={label} id={label} placeholder={placeholder}/>
    </div>
  )
}

export default FormGroup