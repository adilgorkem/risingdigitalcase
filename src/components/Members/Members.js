import React from 'react'
import classes from './Members.module.css'
import Navbar from './Navbar'
import Sidebar from '../Sidebar/Sidebar'
import MembersList from './MembersList'
import Card from '../UI/Card'


export default function Members(props) {

    const data = [
        { name: 'Adil', status: 'In Progress', size: '456 MB', date: '25 March 2021', time: '05:30' },
        { name: 'Görkem', status: 'In Progress', size: '348 MB', date: '25 March 2021', time: '05:30' },
        { name: 'Şeyma', status: 'In Progress', size: '265 MB', date: '25 March 2021', time: '05:30' },
        { name: 'Ömer', status: 'In Progress', size: '420 MB', date: '25 March 2021', time: '05:30' },
        { name: 'Zehra', status: 'In Progress', size: '390 MB', date: '25 March 2021', time: '05:30' },
        { name: 'Burak', status: 'In Progress', size: '188 MB', date: '25 March 2021', time: '05:30' },
        { name: 'Oğuz', status: 'In Progress', size: '250 MB', date: '25 March 2021', time: '05:30' },
        { name: 'Feyzi', status: 'In Progress', size: '210 MB', date: '25 March 2021', time: '05:30' }
    ]

    return (
        <Card>
            <Navbar />
            <div className={`row ${classes.wrapper}`}>
                <Sidebar className={`col-1 ${classes.aside}`} />
                <div className={`col-11 ${classes.container}`}>
                    <div className={`row ${classes.buttons}`}>
                        <button className={`col-1 btn btn-light ${classes.bttn}`}>Reject</button>
                        <button onClick={props.onClick} className={`col-1 btn btn-primary ${classes.bttn}`}>Approve</button>
                    </div>
                    <MembersList onChange={props.onChange} className={classes.memberslist} data={data} />
                </div>
            </div>
        </Card>
    )
}
