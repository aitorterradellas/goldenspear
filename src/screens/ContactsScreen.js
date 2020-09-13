import React, { useState } from "react";
import useAuth from "../auth/useAuth";

import ContactsContext from "../utils/context";
import ContactsPagination from "../components/ContactsPagination";
import ContactDetails from "../components/ContactDetails";
import constants from "../config/constants";
import Title from "../components/Title";
import Dropdown from "../components/Dropdown";

function ContactsScreen() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState([]);
  const [updateConnectionList, setUpdateConnectionList] = useState(false);

  const { user, logOut } = useAuth();

  const onChange = (event) => {
    if (event.target.value === constants.DROPDOWN_VALUES.LOGOUT) {
      logOut();
    }
  };

  const onSelectContact = (data, fromContactList) => {
    setSelectedContact(data);
    if (fromContactList) {
      setUpdateConnectionList(!updateConnectionList);
    }
  };

  const dropdownOptions = [
    { title: user.name, value: constants.DROPDOWN_VALUES.USER },
    {
      title: constants.CONTACTS_SCREEN.LOGOUT_TITLE,
      value: constants.DROPDOWN_VALUES.LOGOUT,
    },
  ];

  return (
    <ContactsContext.Provider value={{ contacts, setContacts }}>
      <div style={styles.container}>
        <div style={styles.header}>
          <Title value={constants.CONTACTS_SCREEN.MAIN_TITLE} />
          <Dropdown options={dropdownOptions} onChange={onChange} />
        </div>
        <div style={styles.leftColumn}>
          <ContactsPagination onSelectContact={onSelectContact} />
        </div>
        <div style={styles.rightColumn}>
          <ContactDetails
            updateConnectionList={updateConnectionList}
            contact={selectedContact}
            onSelectContact={onSelectContact}
          />
        </div>
      </div>
    </ContactsContext.Provider>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  leftColumn: {
    width: "30%",
    float: "left",
  },
  rightColumn: {
    width: "65%",
    float: "right",
  },
  title: {
    display: "inline",
  },
};

export default ContactsScreen;
