import React from "react";
import { getCountryStorage } from "../utils/getCountryStorage";
const Country = ({ country, getVisitedCountry }) => {
  const [visited, setVisited] = React.useState(false);

  function handleVisitClick() {
    const obj = {
      avatar: country?.flags?.png,
      name: country?.name?.common,
      region: country?.region,
      population: country?.population,
    };
    const store = getCountryStorage();
    const checkDuplickate = store.find(
      (item) => item.name === country?.name?.common
    );
    if (checkDuplickate) {
      alert("Already visited! Visit another country.");
      return;
    } else {
      getVisitedCountry(obj);
      setVisited(!visited);
    }
  }

  return (
    <div
      className={
        visited
          ? "bg-slate-300 rounded-md p-6 shadow-md"
          : "bg-white rounded-md p-6 shadow-md"
      }
    >
      {/* img box  */}
      <div className="h-[200px] rounded-md:">
        <img
          className="h-full w-full rounded-md"
          src={country?.flags?.png}
          alt=""
        />
      </div>
      {/* content box  */}
      <div className="py-4 ">
        <h2 className="text-xl font-bold">Name: {country?.name?.common}</h2>
        <h3>Official: {country?.name?.official}</h3>
        <p>Region: {country?.region}</p>
        <p>Flag: {country?.flag}</p>
        <p>Population: {country?.population}</p>
        <p>Area: {country?.area}</p>
        <p>Car driving Side: {country?.car?.side}</p>
        <div>{country?.languages?.eng}</div>
      </div>
      <button
        onClick={handleVisitClick}
        className={
          visited
            ? "bg-gray-500 rounded-lg px-8 py-2 text-xl text-white duration-300 active:scale-95"
            : "bg-sky-500 rounded-lg px-8 py-2 text-xl text-white duration-300 active:scale-95"
        }
      >
        {visited ? "Visited" : "Visit Now"}
      </button>
    </div>
  );
};

export default Country;
