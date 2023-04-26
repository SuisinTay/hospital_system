import React from "react";
import "../style/NameWithInputField.css";

const NameWithInputField = ({ title, is_textfield, patients_data }) => {
  return (
    <div className={is_textfield ? "name-with-textfield" : "name-with-input"}>
      <span>{title}</span>
      {is_textfield ? (
        <textarea className="textfield" disabled value={patients_data} />
      ) : (
        <input className={"inputfield"} disabled value={patients_data}></input>
      )}
    </div>
  );
};

export default NameWithInputField;
