import './employees-list-item.css';
import { useState } from 'react';

const EmployeesListItem = ({ id, name, salary, onDelete, increase }) => {
    const [color, setColor] = useState("black");

    const toggleColor = () => {
        setColor(prevColor => prevColor === "black" ? "orange" : "black");
    };
    let className = 'list-group-item d-flex justify-content-between';
    if (increase){
        className += ' increase';
    }

    return (
        <li className={className}>
            <span className="list-group-item-label" style={{ color: color }}>
                {name}
            </span>
            <input 
                type="text" 
                className="list-group-item-input" 
                defaultValue={salary}
                style={{ color: color }}
            />
            <div className='d-flex justify-content-center align-items-center'>
                <button 
                    type="button"
                    className="btn-cookie btn-sm"
                    onClick={toggleColor}
                >
                    <i className="fas fa-cookie"></i>
                </button>

                <button 
                    type="button"
                    className="btn-trash btn-sm"
                    onClick={() => onDelete(id)}
                >
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
};

export default EmployeesListItem;
