import React, { useState } from "react";
//import icons
import { BsFillFilePlusFill } from "react-icons/bs";
//import styles
import "./Form.css";

const Form = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") return;

    addTodo({ title: inputValue, completed: false });
    setInputValue("");
  };

  return (
    <form className="ui form" onSubmit={handleFormSubmit}>
      <div className="ui grid center aligned">
        <div className="row">
          <div className="column thirteen wide">
            <input
              value={inputValue}
              onChange={handleInputChange}
              type="text"
              placeholder="Ingresar tarea..."
              className="input-task"
            />
          </div>

          <div className="column three wide">
            <BsFillFilePlusFill
              fill="#490093"
              className="plus-icon"
              onClick={handleFormSubmit}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
