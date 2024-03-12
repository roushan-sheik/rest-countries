import React from "react";
import { getCountryStorage } from "../utils/getCountryStorage";
import { removeFromLS } from "../utils/removeFromLS";
import { setCountryStorage } from "../utils/setCountryStorage";
import Country from "./Country";
import Hero from "./Hero";
import VisitedCountry from "./VisitedCountry";

const Countries = ({ countries }) => {
  const [visitedCountry, setVisitedCountry] = React.useState([]);
  // get visited country form child by props

  function getVisitedCountry(country) {
    // set to  locale storage
    setCountryStorage(country);
    // get store from locale storage
    // console.log({ visitedCountry });
    // const store = getCountryStorage();
    // console.log(store);
    // setVisitedCountry([...store]);
    //NOTE -  way 2
    setVisitedCountry([...visitedCountry, country]);
  }

  React.useEffect(() => {
    const myStore = getCountryStorage();
    setVisitedCountry([...myStore]);
  }, []);

  //* NOTE- Delete visited country by name from local storage;
  function getNameToDltVisited(name) {
    removeFromLS(name);
    const myStore = getCountryStorage();
    setVisitedCountry([...myStore]);
  }
  return (
    <section>
      {/* header  */}
      <div>
        <Hero />
      </div>
      {/* {Visited countery} */}
      <div>
        {
          <VisitedCountry
            allVisited={visitedCountry}
            getNameToDltVisited={getNameToDltVisited}
          />
        }
      </div>
      {/* country  */}
      <div className="  grid grid-cols-1 lg:grid-cols-3 gap-6 mx-auto ">
        {countries.map((country) => (
          <Country
            getVisitedCountry={getVisitedCountry}
            country={country}
            key={country.name.common}
          />
        ))}
      </div>
    </section>
  );
};

export default Countries;
