import "./App.css";
import CardCamponent from "./Components/CardComponent";
import Counter from "./Components/CounterLogic";
import { useState } from "react";
import Person from "./Components/Person";

function App() {
  const [userName, setUserName] = useState("");
  const [myPerson, setMyPerson] = useState([
    {
      name: "Nikola",
      age: 25,
      adresa: "Rogatica",
    },
    {
      name: "Tihomir",
      age: 24,
      adresa: "Mostar",
    },
    {
      name: "Marko",
      age: 27,
      adresa: "Mostar",
    },
  ]);
  return (
    <>
      <div className="container mx-auto flex justify-between">
        {" "}
        {myPerson.map((person, index) => {
          return <Person person={person} key={index} />;
        })}{" "}
      </div>
    </>
  );
}

export default App;
