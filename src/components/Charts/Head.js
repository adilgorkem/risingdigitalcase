import React from 'react'
import Card from '../UI/Card'
import classes from './Head.module.css'

export default function Head() {
    return (
        <Card className={`row ${classes.container}`}>
            <div className={`col-1 ${classes.icon1}`}><i className='fa-solid fa-laptop-code'></i></div>
            <div className={`col-1 ${classes.icon2}`}><i className="fa-solid fa-magnifying-glass"></i><h5>Search</h5></div>
            <div className='col-10'>
                <div className={classes.users}>
                    <i className="fa-regular fa-circle-user"></i>
                    <i className="fa-regular fa-circle-user"></i>
                    <i className="fa-regular fa-circle-user"></i>
                    <button>
                        <i className="fa-solid fa-circle-plus"></i>
                    </button>
                </div>
            </div>
        </Card>
    )
}
