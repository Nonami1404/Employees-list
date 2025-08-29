import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel 
            search={search}
            setSearch={setSearch}/>
            <AppFilter/>
        </div>
        
        <EmployeesList 
        search={search}/>
    </div>
  );
}

export default App;
