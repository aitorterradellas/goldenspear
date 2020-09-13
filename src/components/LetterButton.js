import React from "react";
import colors from "../config/colors";

function LetterButton({ value, onClick }) {
  return (
    <button className="button" style={styles.letter} onClick={onClick}>
      {value}
    </button>
  );
}

const styles = {
  letter: {
    backgroundColor: colors.secondary,
    border: "none",
    borderRadius: "100px",
    color: colors.white,
    height: "30px",
    marginBottom: "5px",
    width: "30px",
  },
};

export default LetterButton;
