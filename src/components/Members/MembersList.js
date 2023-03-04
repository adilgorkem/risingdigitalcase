import React from 'react'
import MembersItems from './MembersItems'
import classes from './MembersList.module.css'

export default function MembersList(props) {

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
        {props.data.map((items) => (<MembersItems onChange={props.onChange} key={items.name} id={items.name} name={items.name} status={items.status} size={items.size} date={items.date} time={items.time}></MembersItems>))}
      </ul>
    </div>
  )
}
