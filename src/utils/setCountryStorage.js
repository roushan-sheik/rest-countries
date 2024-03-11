import { getCountryStorage } from "./getCountryStorage";
export const setCountryStorage = (country) => {
  const store = getCountryStorage();
  // check duplicaket
  const ifExist = store.find((item) => item.name === country.name);
  if (ifExist) {
    return;
  } else {
    store.push(country);
  }
  const storageString = JSON.stringify(store);
  localStorage.setItem("store", storageString);
};
