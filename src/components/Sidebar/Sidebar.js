import React from 'react'
import Card from '../UI/Card'
import classes from './Sidebar.module.css'

export default function SideBar(props) {
  return (
    <Card className={classes.icons}>
        <div className={classes.icons1}>
        <button><i className="fa-regular fa-user"></i></button>
        <button><i className="fa-regular fa-circle-down"></i></button>
        <button><i className="fa-solid fa-chart-line"></i></button>
        <button><i className="fa-regular fa-file-image"></i></button>
        <button><i className="fa-regular fa-calendar"></i></button>
        <button><i className="fa-solid fa-fire"></i></button>
        <button><i className="fa-solid fa-chart-pie"></i></button>
        </div>
        <div className={classes.icons2}>
        <button onClick={props.logOut}><i className="fa-solid fa-right-from-bracket"></i></button>
        </div>
    </Card>
  )
}
