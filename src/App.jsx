import React from "react";
import Countries from "./components/Countries";
const App = () => {
  const URL = "https://restcountries.com/v3.1/all";
  // store data to state
  const [countries, setCountries] = React.useState([]);
  // fetch data from url
  const getCountries = async () => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  React.useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className="w-[90%] mx-auto bg-gray-50 ">
      <Countries countries={countries} />
    </div>
  );
};

export default App;
