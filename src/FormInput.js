import React from "react";

export default function FormInput(props) {
  const {
    userName,
    email,
    mobileNumber,
    setUserName,
    setEmail,
    setMobileNumber,
  } = props;
  return (
    <div className="form-input-wrapper">
      <br />
      <input
        value={userName}
        id="form-input"
        placeholder="Name*"
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />

      <br />
      <input
        value={mobileNumber}
        id="form-input"
        placeholder="Mobile No.*"
        onChange={(e) => setMobileNumber(e.target.value)}
      />
      <br />

      <br />
      <input
        value={email}
        id="form-input"
        placeholder="Email ID*"
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
}
