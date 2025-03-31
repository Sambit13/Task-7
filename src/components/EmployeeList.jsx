import React from "react";
import EmployeeCard from "./EmployeeCard";

function EmployeeList({ employees, deleteEmployee, editEmployee }) {
  return (
    <div className="employee-list">
      {employees.length === 0 ? (
        <p>No employees added yet.</p>
      ) : (
        employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            deleteEmployee={deleteEmployee}
            editEmployee={editEmployee}
          />
        ))
      )}
    </div>
  );
}

export default EmployeeList;
