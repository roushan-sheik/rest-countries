import { getCountryStorage } from "./getCountryStorage";
import { setCountryStorage } from "./setCountryStorage";
export function removeFromLS(name) {
  const store = getCountryStorage();
  localStorage.clear();
  const sliceCountry = store.filter((item) => item.name !== name);
  console.log(sliceCountry);
  sliceCountry.map((country) => {
    setCountryStorage(country);
  });
}
