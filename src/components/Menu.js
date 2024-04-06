import React from "react";

const Menu = () => {
  return (
    <section className="py-32  w-full flex flex-col justify-center items-center md:flex-row md:gap-6  border-b-2 border-gray-300">
      <section id="items" className="px-6">
        <p className="text-4xl text-center">Our Menu</p>

        <section className="my-10 ">
          <p className="text-xl tracking-[5px] mb-2 font-semibold">
            Bread Basket
          </p>
          <p className="font-times text-gray-500 tracking-wide">
            Assortment of fresh baked fruit breads and muffins 5.50
          </p>
        </section>
        <section className="my-10 w-full md:w-1/2">
          <p className="text-xl tracking-[5px] mb-2 font-semibold">
            Honey Almond Granola with Fruits
          </p>
          <p className="font-times text-gray-500 tracking-wide">
            Natural cereal of honey toasted oats, raisins, almonds and dates
            7.00
          </p>
        </section>
        <section className="my-10">
          <p className="text-xl tracking-[5px] mb-2 font-semibold">
            Belgian Waffle
          </p>
          <p className="font-times text-gray-500 tracking-wide">
            Vanilla flavored batter with malted flour 7.50
          </p>
        </section>
        <section className="my-10">
          <p className="text-xl tracking-[5px] mb-2 font-semibold">
            Scrambled eggs
          </p>
          <p className="font-times text-gray-500 tracking-wide">
            Scrambled eggs, roasted red pepper and garlic, with green onions
            7.50
          </p>
        </section>
        <section className="my-10">
          <p className="text-xl tracking-[5px] mb-2 font-semibold">
            Blueberry Pancakes
          </p>
          <p className="font-times text-gray-500 tracking-wide">
            With syrup, butter and lots of berries 8.50
          </p>
        </section>
      </section>
      <section id="img-section">
        <img
          src="/menu.png"
          alt="menu"
          className="opacity-75 rounded-md px-6"
        />
      </section>
    </section>
  );
};

export default Menu;
