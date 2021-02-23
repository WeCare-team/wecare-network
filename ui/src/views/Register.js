import React, { useState } from 'react'
import AuthForm from '../components/AuthForm/AuthForm'
import { useRegister } from '../hooks/useRegister'

import { useHistory } from 'react-router-dom'

const Register = () => {
  const [credentials, setCredentials] = useState({})
  const { register } = useRegister()

  const handleClick = async () => {
    register(credentials)
  }

  return (
    <div
      className='register route flex a-center j-center'
      style={{ width: '100vw', height: '90vh' }}
    >
      <AuthForm
        name
        email
        password
        onChange={c => setCredentials(c)}
        values={credentials}
        onSubmit={handleClick}
      />
    </div>
  )
}

export default Register
