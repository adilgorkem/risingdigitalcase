import React from 'react'
// import PieChart from './PieChart'
import SideBar from '../Sidebar/Sidebar'
// import ColumnChart from './ColumnChart'
import FilteredList from './FilteredList'
import classes from './Charts.module.css'
import Head from './Head'

export default function Charts(props) {
  return (
    <div>
      <Head />
      <div className={`row ${classes.wrapper}`}>
        <SideBar className={`col-1 ${classes.aside}`}/>
        <div className={`col-11 ${classes.container}`}>
          <FilteredList filteredData={props.filteredData}/>
          {/* <div>
            <ColumnChart />
            <PieChart />
          </div> */}
        </div>
      </div>
    </div>
  )
}
