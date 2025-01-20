import { useState } from "react";
import "./Greeting.css";

function Greeting() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");

  return (
    <>
      <input
        type="text"
        value={firstName}
        onChange={(event) => setfirstName(event.target.value)}
      />
      <input
        type="text"
        value={lastName}
        onChange={(event) => setlastName(event.target.value)}
      />
      <h1>{"Hi " + firstName + ' ' + lastName}</h1>
    </>
  );
}

export default Greeting;
