import React from "react";

const Massage = ({ text }: { text: string }) => {
  return (
    <div className="App-msg">
      <p>{text}</p>
    </div>
  );
};

export default Massage;
