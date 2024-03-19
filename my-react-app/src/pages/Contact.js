import React, { useState } from "react";

const Contact = () => {
  const [count, setCount] = useState(0);
  const [previousEntries, setPreviousEntries] = useState("");

  const [count1, setCount1] = useState(0);
  const [previousEntries1, setPreviousEntries1] = useState("");

  const [count2, setCount2] = useState(0);
  const [previousEntries2, setPreviousEntries2] = useState("");

  const [username, setUsername] = useState('');
  const [previousName, setPreviousName] = useState("");

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const increment1 = () => {
    setCount1((prevCount1) => prevCount1 + 1);
  };

  const increment2 = () => {
    setCount2((prevCount2) => prevCount2 + 1);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const save = () => {
    let countStr = count + " - ";
    let countStr1 = count1 + " - ";
    let countStr2 = count2 + " - ";

    setPreviousEntries((prevEntries) => prevEntries + countStr);
    setPreviousEntries1((prevEntries1) => prevEntries1 + countStr1);
    setPreviousEntries2((prevEntries2) => prevEntries2 + countStr2);

    setPreviousName((prevName) => prevName + username + " | ");
    setCount(0);
  };

  return (
    <div>
    <div class="flex-wrap1">
        <div class="um">
      <h1 >Um Counter:</h1>
      <h2 id="count-el">{count}</h2>
      <button onClick={increment} class="um-button">Um Bhanyo</button>
      
      </div>
      
      <div class="um">
      <h1 >Ah Counter:</h1>
      <h2 id="count-el">{count1}</h2>
      <button onClick={increment1} class="um-button">Ah Bhanyo</button>
      
      </div>
      <div class="um">
      <h1>Like Counter:</h1>
      <h2 id="count-el">{count2}</h2>
      <button onClick={increment2} class="um-button">Like Bhanyo</button>
      
      </div>

            </div>

            <div class="group">      
            <input type="text" class="uname"
            onChange={handleUsernameChange}
            value={username} required/>

            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Name of Speaker</label>
            <button id="save-btn" onClick={save}>SAVE</button>

    </div>


      <p>Speaker: {previousName}</p>

      <p>Um Counts: {previousEntries}</p>
      <p>Ah Counts: {previousEntries1}</p>
      <p>Like Counts: {previousEntries2}</p>



    </div>
  );
};

export default Contact;
