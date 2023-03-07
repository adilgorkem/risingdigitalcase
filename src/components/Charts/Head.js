import React from 'react'
import classes from './Head.module.css'

export default function Head(props) {
    return (
        <div className={`row ${classes.container}`}>
            <div className={`col-1 ${classes.icon1}`}><i className='fa-solid fa-laptop-code'></i></div>
            <div className={`col-3 ${classes.icon2}`}><i className="fa-solid fa-magnifying-glass"></i><input type='text' placeholder='Search'></input></div>
            <div className='col-8'>
                <div className={classes.users}>
                    <i className="fa-regular fa-circle-user"></i>
                    <i className="fa-regular fa-circle-user"></i>
                    <i className="fa-regular fa-circle-user"></i>
                    <button onClick={props.onReturn}>
                        <i className="fa-solid fa-circle-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}
