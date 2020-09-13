import React from "react";
import colors from "../config/colors";

function TextInput({ ...otherProps }) {
  return <input style={styles.input} {...otherProps} />;
}

const styles = {
  input: {
    borderColor: colors.light,
    borderRadius: "50px",
    borderWidth: "2px",
    margin: "5px",
    marginLeft: "0px",
    padding: "5px",
    paddingLeft: "10px",
    textAlign: "center",
    width: "100%",
  },
};

export default TextInput;
