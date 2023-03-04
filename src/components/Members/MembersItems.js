import React, { useState } from 'react'
import classes from './MembersItems.module.css'

export default function MembersItems(props) {

    const [itemSelected, setItemSelected] = useState(false);

    const changeHandler = () => {
        props.onChange(props, !itemSelected)
        setItemSelected(!itemSelected)
    }
  
    return (
        <div className={`row ${classes.item}`}>
            <div className='col-4'>
                <input value={itemSelected} onChange={changeHandler} type='checkbox'></input>
                <label className={classes.namelabel} htmlFor='name'>{props.name}</label>
            </div>
            <div className='col-2'>{props.status}</div>
            <div className='col-2'>{props.size}</div>
            <div className='col-2'>{props.date}</div>
            <div className='col-2'>{props.time}</div>
        </div>
    )
}
