import React from "react";

const CardCamponent = ({ userName, bg, setUserName }) => {
  function handleChangeName() {
    setUserName("Nikolica");
  }
  return (
    <div>
      <h1
        className="w-[200px] h-[300px] mb-[10px] mt-[10px] text-center uppercase rounded-lg"
        style={{ backgroundColor: bg }}
      >
        {userName}
      </h1>
      <button onClick={handleChangeName}>Change Name</button>
    </div>
  );
};

export default CardCamponent;
