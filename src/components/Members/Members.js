import React from 'react'
import classes from './Members.module.css'
import Navbar from './Navbar'
import Sidebar from '../Sidebar/Sidebar'
import MembersList from './MembersList'
import Card from '../UI/Card'


export default function Members(props) {

    return (
        <Card>
            <Navbar />
            <div className={classes.wrapper}>
                <Sidebar logOut={props.logOut} className={classes.aside} />
                <div className={classes.container}>
                    <div className={`row ${classes.buttons}`}>
                        <button onClick={props.onReject} className={`col-1 btn btn-light ${classes.bttn}`}>Reject</button>
                        <button onClick={props.onClick} className={`col-1 btn btn-primary ${classes.bttn}`}>Approve</button>
                    </div>
                    <MembersList onReject={props.onClick} onChange={props.onChange} className={classes.memberslist} data={props.data} />
                </div>
            </div>
        </Card>
    )
}
