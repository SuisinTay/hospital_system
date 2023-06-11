import React from "react";
import "../style/NameWithCheckbox.scss";

const NameWithCheckbox = ({ id, title, is_checked, is_disabled }) => (
  <div className="name-with-checkbox">
    <span className="checkbox-title">{title}</span>
    <input
      id={id}
      className="checkbox"
      disabled={is_disabled}
      defaultChecked={is_checked}
      type="checkbox"
    />
  </div>
);

export default NameWithCheckbox;
