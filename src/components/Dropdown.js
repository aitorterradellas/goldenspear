import React from "react";
import colors from "../config/colors";

function Dropdown({ onChange, options }) {
  return (
    <div className="dropdown button" style={styles.dropdownContainer}>
      <select style={styles.dropdown} onChange={onChange}>
        {options.map((item, index) => (
          <option key={index} value={item.value}>
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
}

const styles = {
  dropdown: {
    border: "none",
    backgroundColor: "inherit",
    color: colors.white,
    cursor: "pointer",
    display: "block",
    margin: "auto",
  },
  dropdownContainer: {
    backgroundColor: colors.secondary,
    borderRadius: "50px",
    float: "right",
    padding: "10px",
    paddingLeft: "20px",
    paddingRight: "20px",
    width: "200px",
  },
};

export default Dropdown;
