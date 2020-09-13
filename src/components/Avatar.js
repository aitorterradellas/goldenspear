import React from "react";

function Avatar({ src }) {
  return <img style={styles.avatar} src={src} alt="Avatar" />;
}

const styles = {
  avatar: {
    width: "50px",
    height: "50px",
    borderRadius: "100px",
  },
};

export default Avatar;
