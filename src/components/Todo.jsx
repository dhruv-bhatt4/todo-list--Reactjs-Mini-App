import React, { useState } from "react";

const Todo = (props) => {
  const [inputText, setInputText] = useState("");
  const handleEnterPress = (e) => {
    if (inputText !== "")
        if (e.keyCode === 13) {
             props.addList(inputText);
            setInputText("");
     
    }
  };
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter Your Todo"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        onKeyDown={handleEnterPress}
      />
      <button
        className="add-btn"
        onClick={() => {
          props.addList(inputText);
          setInputText("");
        }}
      >
        +
      </button>
    </div>
  );
};

export default Todo;
