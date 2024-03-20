import React, { useState } from "react";

const Contact = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [username, setUsername] = useState('');
  const [previousEntries, setPreviousEntries] = useState([]);
  const [customCounts, setCustomCounts] = useState([]);
  const [newFillerWord, setNewFillerWord] = useState('');
  const [showInput, setShowInput] = useState(true);

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
  };
  const save = () => {
    const newEntry = {
      name: username,
      umCount: count,
      ahCount: count1,
      likeCount: count2,
      otherCounts: customCounts.map(item => ({ word: item.word, count: item.count }))
    };
  
    setPreviousEntries((prevEntries) => [...prevEntries, newEntry]);
    setCount(0);
    setCount1(0);
    setCount2(0);
    setUsername('');
    setCustomCounts([]);
    setNewFillerWord('');
    setShowInput(true); // Set showInput to true after saving
  };
  const addCustomCount = () => {
    if (newFillerWord.trim() !== '') {
      setCustomCounts((prevCounts) => [
        ...prevCounts,
        { word: newFillerWord, count: 1 }
      ]);
      setNewFillerWord('');
      setShowInput(false);
    }
  };

  const incrementCustomCount = (index) => {
    setCustomCounts((prevCounts) =>
      prevCounts.map((item, i) =>
        i === index ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const handleNewFillerWordChange = (event) => {
    setNewFillerWord(event.target.value);
  };

  return (
    <div>
    <div class="counter-container">
  <div class="um">
    <h1>Um Counter:</h1>
    <h2 id="count-el">{count}</h2>
    <button onClick={increment} class="um-button">Um Bhanyo</button>
  </div>

  <div class="um">
    <h1>Ah Counter:</h1>
    <h2 id="count-el">{count1}</h2>
    <button onClick={increment1} class="um-button">Ah Bhanyo</button>
  </div>

  <div class="um">
    <h1>Like Counter:</h1>
    <h2 id="count-el">{count2}</h2>
    <button onClick={increment2} class="um-button">Like Bhanyo</button>
  </div>

  <div class="um custom">
    <h1>Custom Counter:</h1>
    {customCounts.map((item, index) => (
      <div key={index}>
        <h2>{item.word} Counter:</h2>
        <h2 id="count-el">{item.count}</h2>
        <button onClick={() => incrementCustomCount(index)} className="um-button">
          {item.word} Bhanyo
        </button>
      </div>
    ))}
    {showInput && (
      <div class="custom">
        <input
          type="text"
          className="custom-word"
          value={newFillerWord}
          onChange={handleNewFillerWordChange}
          required
        />
        <button class="plus-button"onClick={addCustomCount}>+</button>
      </div>
    )}
  </div>
</div>


      <div class="group">      
        <input 
          type="text" 
          class="uname"
          onChange={handleUsernameChange}
          value={username} 
          required
        />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Name of Speaker</label>
        <button id="save-btn" onClick={save}>SAVE</button>
      </div>

      <table class="rep-table">
        <tr>
          <th class="text-left">Speaker</th>
          <th class="text-left">Um</th>
          <th>Ah</th>
          <th>Like</th>
          <th>Others</th>        
        </tr>
        {previousEntries.map((entry, index) => (
          <tr key={index}>
            <td>{entry.name}</td>
            <td>{entry.umCount}</td>
            <td>{entry.ahCount}</td>
            <td>{entry.likeCount}</td>
            <td>
              {entry.otherCounts.map((item, idx) => (
                <div key={idx}>
                  {item.word}: {item.count}
                </div>
              ))}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Contact;
