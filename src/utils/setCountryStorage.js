import { getCountryStorage } from "./getCountryStorage";
export const setCountryStorage = (country) => {
  const store = getCountryStorage();
  store.push(country);
  const storageString = JSON.stringify(store);
  localStorage.setItem("store", storageString);
};
