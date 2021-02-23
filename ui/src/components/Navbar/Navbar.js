import React from 'react'
import Brand from '../Brand/Brand'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import useProfile from '../../hooks/useProfile'
import AuthOnly from '../AuthOnly/AuthOnly'
import ProfilePic from '../ProfilePic/ProfilePic'
import { useSignout } from '../../hooks/useSignout'
import { Button } from '@material-ui/core'

const Link = ({ to, children }) => (
  <NavLink className='flex a-center' to={to}>
    {children}
  </NavLink>
)

const Devider = () => <div className='flex a-center devider'> | </div>

const Navbar = () => {
  const { avatarUrl } = useProfile()
  const { signout } = useSignout()
  return (
    <nav>
      <div
        className='wrapper flex a-center j-btwn'
        style={{ backgroundColor: '#f8f8f8' }}
      >
        <div className='start flex a-center'>
          <Brand />
          <SearchBar />
        </div>
        <ul className='links flex a-stretch j-end'>
          <div className='flex a-stretch main'>
            <Button color='secondary'>
              <Link to='/'>Home</Link>
            </Button>{' '}
            <AuthOnly>
              <Devider />
              <Button onClick={signout} color='secondary'>
                Sign Out
              </Button>{' '}
            </AuthOnly>
            <AuthOnly reversed>
              <Devider />
              <Button color='secondary'>
                <Link to='/login'>Log In</Link>
              </Button>
              <Devider />
              <Button color='secondary'>
                <Link to='/register'>Register</Link>
              </Button>{' '}
            </AuthOnly>
          </div>
          <AuthOnly>
            <NavLink to='/profile' className='flex a-center'>
              <ProfilePic url={avatarUrl} />
            </NavLink>
          </AuthOnly>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
