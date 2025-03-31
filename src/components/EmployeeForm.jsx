import React, { useState } from "react";

function EmployeeForm({ addEmployee }) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !position) return;
    addEmployee({ name, position });
    setName("");
    setPosition("");
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form">
      <input
        type="text"
        placeholder="Employee Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;
