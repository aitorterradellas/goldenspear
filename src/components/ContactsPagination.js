import React, { useEffect, useState } from "react";

import usePagination from "../hooks/usePagination";
import useContacts from "../hooks/useContacts";

import contactsApi from "../api/contacts";
import errorHandler from "../utils/error";
import listUtils from "../utils/list";

import LetterButton from "../components/LetterButton";
import PaginationControls from "./PaginationControls";
import SearchInput from "./SearchInput";
import ErrorMessage from "./ErrorMessage";
import constants from "../config/constants";
import ContactButton from "./ContactButton";

function ContactsPagination({ onSelectContact }) {
  const {
    create: createPagination,
    paginationApi,
    getCurrentPage,
    setCurrentPage,
    hasElements,
  } = usePagination();

  const { create: createContacts, getLetters, contacts } = useContacts();
  const [letters, setLetters] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    letter: "",
  });

  const setFirstPage = (data) => {
    const letters = getLetters(data);
    setLetters(letters);

    const firstPage = createPagination(
      data,
      constants.PAGINATION.CONTACTS_PAGE_SIZE
    );
    setCurrentPage(firstPage);
  };

  const loadContacts = async () => {
    const result = await contactsApi.getContacts();
    if (!result.ok) {
      errorHandler.print(result);
    }

    const res = createContacts(result.data);
    setFirstPage(res);
  };

  const onSearch = (event) => {
    const name = event.target.value;
    const newFilters = { name: name, letter: filters.letter };
    filter(newFilters);
  };

  const onClick = (letter) => {
    const newFilters = { name: filters.name, letter: letter };
    filter(newFilters);
  };

  const filter = (newFilters) => {
    let res = listUtils.filterByName(contacts, newFilters.name);
    res = listUtils.filterByLetter(res, newFilters.letter);
    setFirstPage(res);
    setFilters(newFilters);
  };

  useEffect(() => {
    loadContacts();
  }, []);

  return (
    <div>
      <div style={styles.searchBar}>
        <SearchInput onSearch={onSearch} />
      </div>

      <div style={styles.flexContainer}>
        <div style={styles.lettersColumn}>
          <LetterButton
            value={constants.FIRST_LETTER_SIGN}
            onClick={() => onClick("")}
          />
          {letters.map((letter, index) => (
            <div key={index}>
              <LetterButton value={letter} onClick={() => onClick(letter)} />
            </div>
          ))}
        </div>
        <div style={styles.nameColumn}>
          {getCurrentPage().map((contact, index) => (
            <ContactButton
              key={index}
              contact={contact}
              onSelectContact={onSelectContact}
            />
          ))}
          <ErrorMessage
            message={constants.ERRORS.NO_RESULTS_FOUND}
            visible={!hasElements()}
          />
          <PaginationControls visible={hasElements()} api={paginationApi} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  flexContainer: {
    display: "flex",
  },
  lettersColumn: {
    marginRight: "20px",
  },
  nameColumn: {
    width: "100%",
  },
  searchBar: {
    marginBottom: "10px",
    width: "100%",
  },
};

export default ContactsPagination;
