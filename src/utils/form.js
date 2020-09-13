const getData = (target) => {
  const formData = new FormData(target);
  const data = {};
  for (let entry of formData.entries()) {
    const key = entry[0];
    const value = entry[1];
    data[key] = value;
  }

  return data;
};

export default {
  getData,
};
