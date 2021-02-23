import React from 'react'
import './Brand.css'
import logo from './nr.png'

const Brand = ({ showTitle }) => (
  <div className='brand flex a-center'>
    <img src={logo} />
    {showTitle && <h1>Social Media</h1>}
  </div>
)

export default Brand
