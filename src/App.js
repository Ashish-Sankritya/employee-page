import React, { useState } from "react";
import FormInput from "./FormInput";
import "./App.css";
import List from "./List";

function App() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [employees, setEmployee] = useState([]);

  const enterDetails = () => {
    setShowForm(true);
  };
  const addDetails = () => {
    if (userName.trim() && email.trim() && mobileNumber.trim()) {
      setShowDetails(true);
      setEmployee([
        ...employees,
        {
          id: Math.random(), // creating unique keys
          employeeName: userName,
          employeeEmail: email,
          employeeMobileNumber: mobileNumber,
        },
      ]);

      setUserName("");
      setEmail("");
      setMobileNumber("");
    } else {
      // fallback error message when there is any empty input field
      window.alert("Please Enter Values");
    }
  };

  const deleteList = (id) => {
    setEmployee(employees.filter((emp) => emp.id !== id));
  };

  return (
    <div className="app">
      {!showForm && (
        <button id="btn-add-form" onClick={enterDetails}>
          ADD Form
        </button>
      )}
      {showForm && (
        <div className="form-wrapper">
          <h1>Employee List</h1>
          <form className="form">
            <FormInput
              userName={userName}
              email={email}
              mobileNumber={mobileNumber}
              label="Name*"
              placeholder="eg Jon Doe"
              setUserName={setUserName}
              setEmail={setEmail}
              setMobileNumber={setMobileNumber}
            />
          </form>
          <button id="btn-add" onClick={addDetails}>
            ADD
          </button>
          <div className="List-component">
            {showDetails && (
              <List employees={employees} onDelete={deleteList} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
