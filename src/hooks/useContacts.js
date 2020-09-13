import { useContext } from "react";
import listUtils from "../utils/list";
import ContactsContext from "../utils/context";

const useContacts = () => {
  const { contacts, setContacts } = useContext(ContactsContext);

  const addContact = (item) => {
    return {
      name: item.name,
      description: item.description,
      id: item.id,
      connections: item.connections,
      avatar: item.avatar,
    };
  };

  const create = (data) => {
    if (!data) return;
    let res = [];
    for (let item of data) {
      res.push(addContact(item));
    }

    res = listUtils.sortAlphabetically(res);

    setContacts(res);
    return res;
  };

  const getLetters = (array) => {
    let letters = [];
    for (let item of array) {
      const firstLetter = item.name[0];
      if (!letters.includes(firstLetter)) letters.push(firstLetter);
    }

    return letters;
  };

  const getConnections = (contact) => {
    const connectionIds = contact.connections;
    let res = [];
    for (let id of connectionIds) res.push(contacts[id]);

    res = listUtils.sortAlphabetically(res);

    return res;
  };

  return {
    create,
    contacts,
    getLetters,
    getConnections,
  };
};

export default useContacts;
