import React, { useState } from 'react'
import './AuthForm.css'
import { Button } from '@material-ui/core'
const emailRegx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const InputField = ({
  label,
  type = 'text',
  placeholder,
  onChange,
  validation,
  needsValidation,
  onValidationError,
}) => {
  const [value, setValue] = useState('')
  return (
    <div className='input-field'>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={e => {
          setValue(e.target.value)
          console.log(e)
          if (!validation(value)) {
            onChange(e.target.value)
          } else {
            onValidationError()
          }
        }}
      />
      {needsValidation && (
        <div className='error'>{validation(value) || ''}</div>
      )}
    </div>
  )
}

const AuthForm = ({
  name,
  email,
  password,
  onChange = () => {},
  values = {},
  onSubmit = () => {},
}) => {
  const [isSubmitted, setSubmitted] = useState(false)
  const [isValidated, setValidated] = useState({
    name: false,
    email: false,
    password: false,
  })

  const handleClick = async e => {
    e.preventDefault()
    console.log('clicked')

    setSubmitted(true)
    if ((email || isValidated.email) && (password || isValidated.password)) {
      onSubmit()
    }
  }

  return (
    <form className='auth-form flex column a-center' onSubmit={handleClick}>
      {name && (
        <InputField
          label='enter your name'
          type='text'
          placeholder='e. g. Tony Stark'
          needsValidation={isSubmitted}
          validation={n => {
            if (n.trim() === '') return 'you must enter a name'
            else return undefined
          }}
          onChange={n => {
            onChange({ ...values, name: n })
            setValidated(v => ({ ...v, name: true }))
          }}
          onValidationError={() => {
            setValidated(v => ({ ...v, name: false }))
          }}
        />
      )}
      {email && (
        <InputField
          label='your email'
          type='text'
          placeholder='youremail@whatever.com'
          needsValidation={isSubmitted}
          validation={e => {
            if (!emailRegx.test(e)) return 'please enter a valid email'
            else return undefined
          }}
          onChange={e => {
            console.log(e, 'asdjahsd')
            onChange({ ...values, email: e })
            setValidated(v => ({ ...v, email: true }))
          }}
          onValidationError={() => {
            setValidated(v => ({ ...v, email: false }))
          }}
        />
      )}
      {password && (
        <InputField
          label='Your password'
          type='password'
          placeholder='**'
          needsValidation={isSubmitted}
          validation={p => {
            if (p.trim() === '') return 'you must enter a password'
            else return undefined
          }}
          onChange={p => {
            onChange({ ...values, password: p })
            setValidated(v => ({ ...v, password: true }))
          }}
          onValidationError={() => {
            setValidated(v => ({ ...v, password: false }))
          }}
        />
      )}
      {(email || password || name) && (
        <div className='submit'>
          <Button color='primary' variant='contained' onClick={handleClick}>
            {'Go'}
          </Button>
        </div>
      )}
    </form>
  )
}

export default AuthForm
