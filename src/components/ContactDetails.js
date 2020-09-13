import React, { useEffect, useState } from "react";
import colors from "../config/colors";
import useBreadcrumbs from "../hooks/useBreadcrumbs";
import useContacts from "../hooks/useContacts";
import Avatar from "./Avatar";
import Breadcrumbs from "./Breadcrumbs";
import ConnectionsPagination from "./ConnectionsPagination";
import SearchInput from "./SearchInput";
import Title from "./Title";

function ContactDetails({ contact, onSelectContact, updateConnectionList }) {
  const { getConnections } = useContacts();
  const {
    getLastStep,
    goToStep,
    addBreadcrumb,
    reset: resetBreadcrumbs,
    currentIndex,
  } = useBreadcrumbs();

  const [filter, setFilter] = useState("");

  const onSearch = (event) => {
    const name = event.target.value;
    setFilter(name);
  };

  const goTo = (index) => {
    const step = goToStep(index);
    const lastContact = step[step.length - 1];
    onSelectContact(lastContact);
  };

  const selectConnection = (contact) => {
    addBreadcrumb(contact);
    onSelectContact(contact);
  };

  useEffect(() => {
    resetBreadcrumbs();
  }, [updateConnectionList]);

  if (!contact.name) return null;
  return (
    <div>
      <div style={styles.header}>
        <Avatar src={contact.avatar} />
        <Title value={contact.name} />
        <div>
          <SearchInput onSearch={onSearch} />
        </div>
      </div>
      <div style={styles.description}>{contact.description}</div>
      <Breadcrumbs
        data={getLastStep()}
        onClick={goTo}
        currentIndex={currentIndex}
      />
      <ConnectionsPagination
        filter={filter}
        data={getConnections(contact)}
        onSelectContact={selectConnection}
      />
    </div>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  description: {
    backgroundColor: colors.light,
    borderRadius: "10px",

    marginBottom: "10px",
    padding: "20px",
  },
};

export default ContactDetails;
