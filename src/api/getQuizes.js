const getQuizes = () => {
  return fetch("db/js-quize.json").then((response) => response.json());
};

export default getQuizes;
