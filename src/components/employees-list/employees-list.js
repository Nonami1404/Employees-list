import { useState } from "react";
import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: "John Smith", salary: "1000$" },
    { id: 2, name: "John Smith", salary: "1000$" },
    { id: 3, name: "John Smith", salary: "1000$" }
  ]);

  const deleteElem = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  return (
    <ul className="app-list list-group">
      {employees.map(emp => (
        <EmployeesListItem
          key={emp.id}
          id={emp.id}
          name={emp.name}
          salary={emp.salary}
          onDelete={deleteElem}
        />
      ))}
    </ul>
  );
};

export default EmployeesList;
