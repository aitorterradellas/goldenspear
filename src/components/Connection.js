import React from "react";
import colors from "../config/colors";
import Avatar from "./Avatar";

function Connection({ connection, onSelectContact }) {
  return (
    <div
      className="button"
      style={styles.container}
      onClick={() => onSelectContact(connection)}
    >
      <Avatar src={connection.avatar} />
      <div style={styles.name}>{connection.name}</div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: colors.light,
    borderRadius: "10px",
    float: "left",
    height: "150px",
    margin: "10px",
    marginLeft: "0px",
    padding: "10px",
    paddingTop: "20px",
    textAlign: "center",
    width: "15%",
  },
  name: {
    fontWeight: "bold",
    marginTop: "10px",
    fontSize: "14px",
  },
};

export default Connection;
