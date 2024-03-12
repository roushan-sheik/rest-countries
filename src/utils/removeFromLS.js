import { getCountryStorage } from "./getCountryStorage";
import { setCountryStorage } from "./setCountryStorage";
export function removeFromLS(name) {
  const store = getCountryStorage();
  const sliceCountry = store.filter((item) => item.name !== name);
  sliceCountry.map((country) => {
    setCountryStorage(country);
  });
}
