import React from "react";
import colors from "../config/colors";

function ErrorMessage({ visible, message, color = colors.black }) {
  if (!visible) return null;
  return (
    <div style={styles.error}>
      <span style={{ color: color }}>{message}</span>
    </div>
  );
}

const styles = {
  error: {
    textAlign: "center",
  },
};

export default ErrorMessage;
