import React, { useState } from "react";

export default function Form({ setTitle }) {
  const [inputData, setInputData] = useState("");
  const [message, setMessage] = useState("");

  function submitForm(e) {
    e.preventDefault();
    if (inputData.length < 3) {
      setMessage(
        "Searched title is too short, it must be at least 3 characters long"
      );
    } else {
      setTitle(inputData);
      setInputData("");
      setMessage("");
    }
  }

  return (
    <div className="form-box">
      <form onSubmit={submitForm}>
        <label>
          <p>Search title</p>
          <input
            type="text"
            value={inputData}
            onChange={({ target }) => setInputData(target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
