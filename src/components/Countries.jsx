import React from "react";
import { getCountryStorage } from "../utils/getCountryStorage";
import { setCountryStorage } from "../utils/setCountryStorage";
import Country from "./Country";
import VisitedCountry from "./VisitedCountry";

const Countries = ({ countries }) => {
  const [visitedCountry, setVisitedCountry] = React.useState([]);
  // get visited country form child by props

  function getVisitedCountry(country) {
    // set to  locale storage
    setCountryStorage(country);
    // get store from locale storage
    console.log({ visitedCountry });
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

  return (
    <section>
      {/* header  */}
      <dir className="py-6 flex flex-col justify-center gap-6 items-center">
        <h2 className="text-3xl font-bold">All Countries To Visit</h2>
        <div className="flex gap-4 items-center">
          <input
            className="rounded-lg border border-[#1B8EF8] px-4 py-2 text-[#1B8EF8] ring-offset-2 duration-300 focus:outline-none focus:ring-2"
            type="text"
            placeholder="Search...."
          />
          <button className="rounded-lg bg-sky-500 px-8 py-2 text-xl text-white duration-300 active:scale-95">
            Search
          </button>
        </div>
      </dir>
      {/* {Visited countery} */}
      <div>{<VisitedCountry allVisited={visitedCountry} />}</div>
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
