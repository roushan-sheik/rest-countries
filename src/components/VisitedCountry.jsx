import React from "react";

const VisitedCountry = ({ allVisited, getNameToDltVisited }) => {
  return (
    <div>
      {/* visited country  */}
      <div className="py-4">
        <h2 className="text-lg font-semibold">
          Visited Country: {allVisited.length}
        </h2>
        <div className="grid  grid-cols-1 lg:grid-cols-4">
          {allVisited.map((country) => {
            const { name, avatar, region, population } = country;
            return (
              <div key={name} className="flex gap-2 items-center">
                <div className="h-[80px] w-[100px] rounded-md:">
                  <img
                    className="h-full w-full rounded-md"
                    src={avatar}
                    alt=""
                  />
                </div>
                <div className="py-2 ">
                  <h2 className="text-sm font-bold">Name: {name}</h2>
                  <p>Region: {region}</p>
                  <p>Population: {population}</p>
                  <button
                    onClick={() => getNameToDltVisited(name)}
                    className="bg-red-500 rounded-lg px-2 py-1  text-sm text-white duration-300 active:scale-95"
                  >
                    delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VisitedCountry;
