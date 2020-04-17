import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [formValue, setFormValue] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValue);
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <input
            type="text"
            value={formValue}
            onChange={(e) => {
              setFormValue(e.target.value);
            }}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
