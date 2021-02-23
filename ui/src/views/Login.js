import React, { useState } from 'react'
import AuthForm from '../components/AuthForm/AuthForm'
import { useLogin } from '../hooks/useLogin'
import { useHistory } from 'react-router-dom'

const Login = () => {
  const [credentials, setCredentials] = useState({})
  const { login } = useLogin()
  const history = useHistory()

  const handleClick = () => {
    login(credentials)
  }

  return (
    <div
      className='login route flex a-center j-center'
      style={{ width: '100vw', height: '90vh' }}
    >
      <AuthForm
        email
        password
        onChange={c => setCredentials(c)}
        values={credentials}
        onSubmit={handleClick}
      />
    </div>
  )
}

export default Login
