import React from "react";
import colors from "../config/colors";

function Title({ value }) {
  return <h2 style={styles.title}>{value}</h2>;
}

const styles = {
  title: {
    color: colors.dark,
  },
};

export default Title;
