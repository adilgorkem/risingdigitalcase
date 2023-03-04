import React, {useEffect, useState} from 'react';
import './App.css';
import Login from './components/Login/Login';
import Members from './components/Members/Members';
import Charts from './components/Charts/Charts';
const App = () => {

  const viewModes = {
    list: 'list',
    chart: 'chart'
  }

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const [filteredData, setFilteredData] = useState([]);

  const [viewMode, setViewMode] = useState(viewModes.list)

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const filterItemsHandler = () => {
    setViewMode(viewModes.chart)
  }

  const selectItemHandler = (item,isSelected) => {
    
    if(isSelected) {
      setFilteredData([...filteredData, item])
    } else {
      setFilteredData(filteredData.filter(el => el.name !== item.name))
    }
    console.log(isSelected, item)
  }

  useEffect(() => {
    console.log(filteredData);
  }, [filteredData])

  return (
    <React.Fragment>
      {
        !isLoggedIn ? <Login onLogin={loginHandler} /> : (viewMode === viewModes.list ? <Members onChange={selectItemHandler} onClick={filterItemsHandler}/> : <Charts filteredData={filteredData}/>)
      }
        {/* {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Members onChange={selectItemHandler} onClick={filterItemsHandler}/>}
        {isLoggedIn && <Charts />} */}
    </React.Fragment>
  );
}

export default App;
