import React, {useState} from "react";

function App() {
  setInterval(updateTime, 1000);

  let current = new Date().toLocaleTimeString().replace("AM","").replace("PM","");
  let [time, setTime] = useState(current);

  function updateTime(){

    let newTime = new Date().toLocaleTimeString().replace("a.m.","").replace("p.m.","");
    setTime(newTime);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick = {updateTime}>
        Get Time
        </button>
    </div>
  );
}

export default App;
