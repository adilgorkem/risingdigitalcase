import React from 'react'
import classes from './FilteredItems.module.css'

export default function FilteredItems(props) {
    return (
        <div className={`row ${classes.item}`}>
            <div className='col-4'>{props.name}</div>
            <div className='col-2'>{props.status}</div>
            <div className='col-2'>{props.size}</div>
            <div className='col-2'>{props.date}</div>
            <div className='col-2'>{props.time}</div>
        </div>
    )
}
