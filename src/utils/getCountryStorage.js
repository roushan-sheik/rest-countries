export const getCountryStorage = () => {
  const countries = localStorage.getItem("store");
  let store = [];
  if (countries) {
    store = JSON.parse(countries);
  }
  return store;
};
