import React, { useEffect, useState } from 'react'
import SideBar from '../Sidebar/Sidebar'

import { BarChart, PieChart, Pie, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Cell } from 'recharts'
import FilteredList from './FilteredList'
import classes from './Charts.module.css'
import Head from './Head'

const data = [
  {
    "month": "01",
    "instagram": Math.round(Math.random() * 150),
    "facebook": Math.round(Math.random() * 150),
    "twitter": Math.round(Math.random() * 150)
  },
  {
    "month": "02",
    "instagram": Math.round(Math.random() * 150),
    "facebook": Math.round(Math.random() * 150),
    "twitter": Math.round(Math.random() * 150)
  },
  {
    "month": "03",
    "instagram": Math.round(Math.random() * 150),
    "facebook": Math.round(Math.random() * 150),
    "twitter": Math.round(Math.random() * 150)
  },
  {
    "month": "04",
    "instagram": Math.round(Math.random() * 150),
    "facebook": Math.round(Math.random() * 150),
    "twitter": Math.round(Math.random() * 150)
  },
  {
    "month": "05",
    "instagram": Math.round(Math.random() * 150),
    "facebook": Math.round(Math.random() * 150),
    "twitter": Math.round(Math.random() * 150)
  },
  {
    "month": "06",
    "instagram": Math.round(Math.random() * 150),
    "facebook": Math.round(Math.random() * 150),
    "twitter": Math.round(Math.random() * 150)
  },
  {
    "month": "07",
    "instagram": Math.round(Math.random() * 150),
    "facebook": Math.round(Math.random() * 150),
    "twitter": Math.round(Math.random() * 150)
  },
  {
    "month": "08",
    "instagram": Math.round(Math.random() * 150),
    "facebook": Math.round(Math.random() * 150),
    "twitter": Math.round(Math.random() * 150)
  },
  {
    "month": "09",
    "instagram": Math.round(Math.random() * 150),
    "facebook": Math.round(Math.random() * 150),
    "twitter": Math.round(Math.random() * 150)
  },
  {
    "month": "10",
    "instagram": Math.round(Math.random() * 150),
    "facebook": Math.round(Math.random() * 150),
    "twitter": Math.round(Math.random() * 150)
  },
  {
    "month": "11",
    "instagram": Math.round(Math.random() * 150),
    "facebook": Math.round(Math.random() * 150),
    "twitter": Math.round(Math.random() * 150)
  },
  {
    "month": "12",
    "instagram": Math.round(Math.random() * 150),
    "facebook": Math.round(Math.random() * 150),
    "twitter": Math.round(Math.random() * 150)
  },
]

const data1 = [
  { name: "Group A", value: 4 },
  { name: "Group B", value: 3 },
];
const data2 = [
  { name: "Group A", value: 6 },
  { name: "Group B", value: 2 },
];
const data3 = [
  { name: "Group A", value: 7 },
  { name: "Group B", value: 3 },
];

const chartWidth = {
  big: 350,
  medium: 200,
  small: 150
}

const chartHeight = {
  big: 300,
  medium: 250,
  small: 150
}

const sizes = {
  big: 'big',
  medium: 'medium',
  small: 'small'
}

const COLORS1 = ["#d62976", "#d9d9d9"];
const COLORS2 = ["#4267B2", "#d9d9d9"];
const COLORS3 = ["#1DA1F2", "#d9d9d9"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="#d9d9d9" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function Charts(props) {
  const [screenSize, setScreenSize] = useState('big');
  const [screenHeight, setScreenHeight] = useState('big');

  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth > 768) {
        setScreenSize(sizes.big)
        setScreenHeight(sizes.big)
      } else if(window.innerWidth > 320) {
        setScreenSize(sizes.medium)
        setScreenHeight(sizes.medium)
      } else {
        setScreenSize(sizes.small)
        setScreenHeight(sizes.small)
      }
    }
    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  return (
    <React.Fragment>
      <Head onReturn={props.onReturn} />
      <div className={`row ${classes.wrapper}`}>
        <SideBar logOut={props.logOut} className={`col-1 ${classes.aside}`} />
        <div className={`col-11 ${classes.container}`}>
          <FilteredList filteredData={props.filteredData} />
          <div className={classes.charts}>
            <BarChart barGap={'10px'} width={chartWidth[screenSize]} height={300} data={data} >
              <CartesianGrid stroke='none' />
              <XAxis dataKey="month" style={{ 'fontFamily': 'sans-serif' }} />
              <YAxis style={{ 'fontFamily': 'sans-serif'}} />
              <Tooltip />
              <Legend align='center' iconType='circle' />
              <Bar stackId='horizontal' dataKey="instagram" fill="#d62976" />
              <Bar stackId='horizontal' dataKey="facebook" fill="#4267B2" />
              <Bar stackId='horizontal' dataKey="twitter" fill="#1DA1F2" />
            </BarChart>
              <PieChart width={200} height={chartHeight[screenHeight]}>
                <Pie
                  data={data1}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS1[index % COLORS1.length]} />
                  ))}
                </Pie>
              </PieChart>
              <PieChart width={200} height={chartHeight[screenHeight]}>
                <Pie
                  data={data2}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS2[index % COLORS1.length]} />
                  ))}
                </Pie>
              </PieChart>
              <PieChart width={200} height={chartHeight[screenHeight]}>
                <Pie
                  data={data3}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS3[index % COLORS3.length]} />
                  ))}
                </Pie>
              </PieChart>
              </div>
            </div>
          </div>
    </React.Fragment>
  )
}
