import React from "react";

const Person = ({ person, index }) => {
  return (
    <div
      key={index}
      className="w-[300px] h-[200px] bg-[#f90] mt-[10px] mb-[10px] m-[10px]"
    >
      <h1> {person.name}</h1>
      <h2>{person.age}</h2>
      <h3>{person.adresa}</h3>
    </div>
  );
};

export default Person;
