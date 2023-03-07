import React from 'react'
import classes from './Navbar.module.css'

export default function Navbar() {
  return (
    <div className={`row ${classes.container}`}>
      <div className={`col-1 ${classes.icon}`}>
        <i className='fa-solid fa-laptop-code'></i>
      </div>
      <div className='col-11'>
        <h4>Members</h4>
      </div>
    </div>
  )
}
