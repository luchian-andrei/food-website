import React from "react";

const Contact = () => {
  return (
    <section className="w-11/12 flex flex-col justify-start px-4 py-4 gap-6">
      <p className="pt-16 pb-5 text-4xl">Contact</p>
      <p className="font-times tracking-normal">
        We offer full-service catering for any event, large or small. We
        understand your needs and we will cater the food to satisfy the biggerst
        criteria of them all, both look and taste. Do not hesitate to contact
        us.
      </p>
      <p className="font-times font-semibold text-xl text-blue-950 opacity-70 tracking-wide">
        Catering Service, 42nd Living St, 43043 New York, NY
      </p>
      <p className="font-times tracking-normal">
        You can also contact us by phone 00553123-2323 or email
        catering@catering.com, or you can send us a message here:
      </p>
      <form className="flex flex-col gap-6">
        <input
          type="text"
          required
          className="p-4 border-b-2 border-gray-300 font-times tracking-wide"
          placeholder="Name"
        />
        <input
          type="number"
          required
          className="p-4 border-b-2 border-gray-300 font-times tracking-wide"
          placeholder="How many people"
        />
        <input
          type="datetime-local"
          required
          className="p-4 border-b-2 border-gray-300 font-semibold"
          value="2020-11-16 20:00"
        />
        <input
          type="text"
          required
          className="p-4 border-b-2 border-gray-300 font-times tracking-wide"
          placeholder="Message \ Special requirements"
        />
        <button
          type="submit"
          className="bg-stone-200 hover:bg-gray-300 w-2/5 p-2  font-times tracking-wide"
        >
          SEND MESSAGE
        </button>
      </form>
    </section>
  );
};

export default Contact;
