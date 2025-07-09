import React from "react";
import { useState } from "react";

function Input({ setMovie }) {
  const [name, setName] = useState("");
  return (
    <div className="searchBar mt-4 mb-5">
      <input
        className="input white"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Search...."
      />
      <button
        onClick={() => {
          setMovie(name);
          setName("");
        }}
      >
        <i className="bi bi-search"></i>
      </button>
    </div>
  );
}

export default Input;
