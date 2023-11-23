import React, {useState} from "react";

function App() {
  const [submit, setSubmit] = useState("Submit")
  const [isMouseOver, setMouseOver] = useState(false)
  function handleSubmit(){
    setSubmit("Submitted");
  }

  function handleOnMouseOver(){
    setMouseOver(true);
  }

  function handleOnMouseLeave(){
    setMouseOver(false)
  }
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
      style = {{backgroundColor: isMouseOver? "black":"white"}}
      onClick={handleSubmit} 
      onMouseOver = {handleOnMouseOver}
      onMouseLeave = {handleOnMouseLeave}
      >
        {submit}</button>
    </div>
  );
}

export default App;
