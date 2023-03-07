import React, {useState} from 'react';
import './App.css';
import Login from './components/Login/Login';
import Members from './components/Members/Members';
import Charts from './components/Charts/Charts';
const App = () => {

  const viewModes = {
    list: 'list',
    chart: 'chart'
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [data, setData] = useState([
    { name: 'Adil', status: 'In Progress', size: '456 MB', date: '25 March 2021', time: '05:30', selected: false },
    { name: 'Görkem', status: 'In Progress', size: '348 MB', date: '21 March 2021', time: '05:30', selected: false },
    { name: 'Şeyma', status: 'In Progress', size: '265 MB', date: '12 May 2021', time: '05:30', selected: false },
    { name: 'Ömer', status: 'In Progress', size: '420 MB', date: '03 Jul 2021', time: '05:30', selected: false },
    { name: 'Zehra', status: 'In Progress', size: '390 MB', date: '25 Sep 2021', time: '05:30', selected: false },
    { name: 'Burak', status: 'In Progress', size: '188 MB', date: '07 Jan 2021', time: '05:30', selected: false },
    { name: 'Oğuz', status: 'In Progress', size: '250 MB', date: '18 Aug 2021', time: '05:30', selected: false },
    { name: 'Feyzi', status: 'In Progress', size: '210 MB', date: '23 Nov 2021', time: '05:30', selected: false }
]);

  const [viewMode, setViewMode] = useState(viewModes.list);

  const selectItemHandler = (item, isSelected) => {
    const newData = [...data]
    newData.filter((el) => {
    if(el.name === item.name) {
      el.selected = isSelected
    }
    return newData;
    })
    setData(newData)
  }

  const returnMembersPageHandler = () => {
    setViewMode(viewModes.list)
  }

  const rejectHandler = () => {
    const newData = [...data]
    newData.forEach((item,index) => {
      newData[index].selected = false;
    })
    setData(newData)
  }

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const logOutHandler = () => {
    setIsLoggedIn(false);
  }

  const filterItemsHandler = () => {
    setViewMode(viewModes.chart)
  }


  return (
    <React.Fragment>
      {
        !isLoggedIn ? <Login onLogin={loginHandler} /> : (viewMode === viewModes.list ? <Members data={data} logOut={logOutHandler} onReject={rejectHandler} onChange={selectItemHandler} onClick={filterItemsHandler}/> : <Charts logOut={logOutHandler} onReturn={returnMembersPageHandler} filteredData={data.filter(el => !!el.selected)}/>)
      }
    </React.Fragment>
  );
}

export default App;
