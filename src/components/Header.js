import React from "react";

const Header = () => {
  return (
    <section className="flex justify-between fixed bg-white opacity-100 z-10 items-center top-0 text-center p-1 w-full text-md text shadow-xl overflow-hidden">
      <p className="hover:bg-gray-300  p-3 ">Gourmet au Catering</p>
      <section className="hidden md:flex justify-center items-center p-0 gap-6 mx-6 ">
        <p className="hover:bg-gray-300 p-3  ">About</p>
        <p className="hover:bg-gray-300 p-3 ">Menu</p>
        <p className="hover:bg-gray-300 p-3 ">Contact</p>
      </section>
    </section>
  );
};

export default Header;
