import React from "react";

export default function List(props) {
  const { employees, onDelete } = props;

  return (
    <div>
      {employees.map((emp) => (
        <div key={emp.id} className="employee-list">
          <div id="name-div">
            Name <span>Mobile No.</span>
            <br />
            <div id="name">
              {emp.employeeName} <span>{emp.employeeMobileNumber}</span>
            </div>
          </div>
          <div id="name-div">
            Email ID
            <div id="name">{emp.employeeEmail}</div>
          </div>
          <button id="btn-delete" onClick={() => onDelete(emp.id)}>
            Delete
          </button>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
}
