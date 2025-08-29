import { useState } from "react";
import EmployeesListItem from "../employees-list-item/employees-list-item";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import "./employees-list.css";

const EmployeesList = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: "John Smith", salary: "1000$", increase: true },
    { id: 2, name: "Anna John",  salary: "3000$", increase: false },
    { id: 3, name: "Gerry Lots", salary: "4000$", increase: true }
  ]);

  const deleteElem = (id) => {
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
  };

  // Колбэк, который получит данные из формы и добавит в массив
  const addEmployee = ({ name, salary, increase = false }) => {
    setEmployees((prev) => [
      ...prev,
      {
        id: Date.now(), // генерируем уникальный id тут, в родителе
        name,
        salary,
        increase
      }
    ]);
  };

  return (
    <>
      <ul className="app-list list-group">
        {employees.map((emp) => (
          <EmployeesListItem
            key={emp.id}
            id={emp.id}
            name={emp.name}
            salary={emp.salary}
            onDelete={deleteElem}
            increase={emp.increase}
          />
        ))}
      </ul>

      {/* Подключаем форму и передаём onAdd */}
      <EmployeesAddForm onAdd={addEmployee} />
    </>
  );
};

export default EmployeesList;
