const sortAlphabetically = (array) => {
  const res = array.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  return res;
};

const filterByName = (array, name) => {
  if (!name) return array;
  const res = array.filter(
    (item) => item.name.toLowerCase().indexOf(name.toLowerCase()) > -1
  );
  return res;
};

const filterByLetter = (array, letter) => {
  if (!letter) return array;
  const res = array.filter((item) => item.name[0] === letter);
  return res;
};

export default {
  sortAlphabetically,
  filterByName,
  filterByLetter,
};
