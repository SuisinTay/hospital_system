import React from "react";
import "../style/NameWithInputField.scss";

let data = {};

const NameWithInputField = ({
  id,
  title,
  is_required,
  is_textfield,
  patients_data,
  is_disabled,
}) => {
  return (
    <div className={is_textfield ? "name-with-textfield" : "name-with-input"}>
      <span className="inputfield-title">{title}</span>
      {is_textfield ? (
        <textarea
          id={id}
          className="textfield"
          disabled={is_disabled}
          value={patients_data}
          required={is_required}
        />
      ) : (
        <input
          id={id}
          className={"inputfield"}
          disabled={is_disabled}
          value={patients_data}
          required={is_required}
        ></input>
      )}
    </div>
  );
};

export default NameWithInputField;
