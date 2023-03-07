import React from 'react'
import classes from './FilteredList.module.css'
import FilteredItems from './FilteredItems'

export default function FilteredList(props) {

  console.log(props.filteredData)
  return (
    <div className={classes.memberslist}>
      <div className={`row ${classes.head}`}>
        <h6 className='col-4'>Name</h6>
        <h6 className='col-2'>Status</h6>
        <h6 className='col-2'>Size</h6>
        <h6 className='col-2'>Date</h6>
        <h6 className='col-2'>Time</h6>
      </div>
      <ul>
        {props.filteredData.map((items) => (<FilteredItems key={items.name} id={items.name} name={items.name} status={items.status} size={items.size} date={items.date} time={items.time}></FilteredItems>))}
      </ul>
    </div>

  )
}

