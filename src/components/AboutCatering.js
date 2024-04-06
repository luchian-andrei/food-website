import React from "react";

const AboutCatering = () => {
  return (
    <section className="flex justify-center items-center px-4 pt-10 pb-32 border-b-2 border-gray-300 ">
      <section className="w-1/2 hidden md:flex justify-center ">
        <img
          src="/aboutCatering.png"
          alt="about"
          className="w-4/5 md:w-3/5 h-4/5 opacity-75 rounded-md "
        />
      </section>
      <section className="w-full md:1/2 mr-2">
        <p className="text-4xl m-6 tracking-[6px] text-center ">
          About Catering
        </p>
        <p className="text-center tracking-[7px] mt-7 mb-7">
          Tradition since 1889
        </p>
        <p className="font-times">
          The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor
          sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only
          use <span className="bg-stone-100 p-2">seasonal</span> ingredients.
        </p>
      </section>
    </section>
  );
};

export default AboutCatering;
