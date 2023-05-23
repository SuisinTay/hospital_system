import React from "react";
import "../style/NameWithCheckbox.scss";

const NameWithCheckbox = ({ title, is_checked }) => (
  <div className="name-with-checkbox">
    <span className="checkbox-title">{title}</span>
    <input
      className="checkbox"
      disabled
      defaultChecked={is_checked}
      type="checkbox"
    />
  </div>
);

export default NameWithCheckbox;
