import React from 'react'
import Card from '../UI/Card'
import classes from './Navbar.module.css'

export default function Navbar() {
  return (
    <Card className={classes.container}>
    <div className={`row ${classes.wrapper}`}>
      <div className={`col-1 ${classes.icon}`}><i className='fa-solid fa-laptop-code'></i></div>
      <div className='col-11'><h4>Members</h4></div>
    </div>
    </Card>
  )
}
