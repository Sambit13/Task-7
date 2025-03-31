import React, { useState } from "react";

function EmployeeCard({ employee, deleteEmployee, editEmployee }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(employee.name);
  const [position, setPosition] = useState(employee.position);

  const handleEdit = () => {
    editEmployee(employee.id, { name, position });
    setIsEditing(false);
  };

  return (
    <div className="employee-card">
      {isEditing ? (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <h3>{employee.name}</h3>
          <p>{employee.position}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default EmployeeCard;
