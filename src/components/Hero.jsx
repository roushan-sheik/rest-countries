import React from "react";

const Hero = () => {
  return (
    <>
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
    </>
  );
};

export default Hero;
