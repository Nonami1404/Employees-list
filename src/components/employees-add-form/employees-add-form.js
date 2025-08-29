import { useState } from "react";
import './employees-add-form.css';

const EmployeesAddForm = ({ onAdd }) => {
    const [name, setName] = useState("");
    const [salary, setSalary] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !salary) return;

        onAdd({
            id: Date.now(),
            name: name.trim(),
            salary: `${salary}$`,
            increase: false
        });

        setName("");
        setSalary("");
    };

    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                />

                <button type="submit"
                        className="btn btn-outline-light">
                    Добавить
                </button>
            </form>
        </div>
    );
};

export default EmployeesAddForm;
