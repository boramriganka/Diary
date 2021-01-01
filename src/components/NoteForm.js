import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
     
        <>
          <input
            placeholder="Add a note"
            value={input}
            onChange={handleChange}
            name="text"
            className="note-input"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="note-button">
            ADD
          </button>
        </>
      
    </form>
  );
}

export default TodoForm;
