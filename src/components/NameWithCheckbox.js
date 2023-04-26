import React from "react";
import "../style/NameWithCheckbox.css";

const NameWithCheckbox = ({ title, is_checked }) => (
  <div className="name-with-checkbox">
    <span>{title}</span>
    <input
      className="checkbox"
      disabled
      defaultChecked={is_checked}
      type="checkbox"
    />
  </div>
);

export default NameWithCheckbox;
