import React, { useState } from "react";
//import icons
import {
  BsFillTrashFill,
  BsPencil,
  BsFillCheckCircleFill,
  BsCircle,
} from "react-icons/bs";

const Todo = ({ title, completed, removeTodoItemProp, editTodoItemProp }) => {
  //to edit the tasks
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(title);
  //saves a temporary value of the original data of a task
  const [tempValue, setTempValue] = useState(title);
  //to mark completed tasks
  const [completedState, setCompleted] = useState(completed);

  //event that shows the div that allows editing tasks
  const handleDivDoubleClick = () => {
    setIsEditing(true);
  };

  //event that saves changes to a task in the database when the ENTER key is pressed
  //or abort the action by pressing the ESC key
  const handleInputKeyDown = (e) => {
    const key = e.keyCode;
    //to update
    if (key === 13) {
      editTodoItemProp({ title: tempValue });
      setValue(tempValue);
      setIsEditing(false);
      //to cancel
    } else if (key === 27) {
      setTempValue(value);
      setIsEditing(false);
    }
  };

  //updates its status when a task's values were updated
  const handleInputOnChange = (e) => {
    setTempValue(e.target.value);
  };

  //event that checks or unchecks a task
  const handleButtonClick = () => {
    setCompleted((oldCompleted) => {
      const newState = !oldCompleted;
      editTodoItemProp({ completed: newState });
      return newState;
    });
  };

  //HTML
  return (
    <>
      <div className="row" style={{paddingBottom: "0.5rem", paddingTop: "0.5rem"}}>
        <div className="column one wide">
          {/* shows the icon according to task status */}
          {completedState ? (
            <BsFillCheckCircleFill
              onClick={handleButtonClick}
              fill="#490093"
              style={{ fontSize: "1.5rem" }}
            />
          ) : (
            <BsCircle
              onClick={handleButtonClick}
              fill="#490093"
              style={{ fontSize: "1.5rem" }}
            />
          )}
        </div>
        {/* shows a text with the description of the task or an input to edit the task */}
        {isEditing ? (
          <div className="column seven wide">
            {/* input that allows editing and saving changes */}
            <div className="ui transparent input fluid">
              <input
                onChange={handleInputOnChange}
                onKeyDown={handleInputKeyDown}
                autoFocus={true}
                value={tempValue}
                className="ui medium left aligned header"
              />
            </div>
          </div>
        ) : (
          <div
            className="column seven wide"
            onDoubleClick={handleDivDoubleClick}
          >
            {/*text with the description of the task, if the task is finished a lighter colored text is shown */}
            <div
              className={
                "ui medium left aligned header grey" +
                (completedState ? " ui disabled header" : "")
              }
            >
              {value}
            </div>
          </div>
        )}
        {/* shows the icon to edit tasks */}
        <div className="column one wide">
          <BsPencil
            onClick={handleDivDoubleClick}
            fill="#490093"
            style={{ fontSize: "1.5rem" }}
          />
        </div>

        {/* shows the icon to delete tasks */}
        <div className="column one wide">
          <BsFillTrashFill
            onClick={removeTodoItemProp}
            fill="#490093"
            style={{ fontSize: "1.5rem" }}
          />
        </div>
      </div>
      <div
        className="column ten wide"
        style={{ borderBottom: "0.75px solid #490093", padding: "0" }}
      ></div>
    </>
  );
};

export default Todo;
