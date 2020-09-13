import React from "react";
import colors from "../config/colors";

function ContactButton({ contact, onSelectContact }) {
  return (
    <div
      className="button"
      style={styles.button}
      onClick={() => onSelectContact(contact, true)}
    >
      {contact.name}
    </div>
  );
}

const styles = {
  button: {
    backgroundColor: colors.light,
    borderRadius: "50px",
    fontSize: "14px",
    marginBottom: "5px",
    padding: "5px",
    textAlign: "center",
  },
};

export default ContactButton;
