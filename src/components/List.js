import React from "react";
import Todo from "./Todo";
//import styles
import "./List.css";

const List = ({ list, removeTodoListProp, editTodoListProp }) => {
  const renderedList = list.map((item) => (
    <Todo
      title={item.title}
      completed={item.completed}
      removeTodoItemProp={(e) => removeTodoListProp(item._id)}
      editTodoItemProp={(updatedItem) =>
        editTodoListProp(item._id, updatedItem)
      }
      key={item.title}
    />
  ));

  //Filter task
  const filter = (condition) => {
    // hide completed tasks
    const completedTasks = document.querySelectorAll("." + !condition);
    completedTasks.forEach((task) => {
      task.style.display = "none";
    });
    // show pending tasks
    const pendingTasks = document.querySelectorAll("." + condition);
    pendingTasks.forEach((task) => {
      if (task.style.display === "none") {
        task.style.display = "";
      }
    });
    document.querySelector("." + condition + ".divider").style.display = "none";
  };
  
  // show all tasks
  const showAll = () => {
    const task = document.querySelectorAll(".false, .true");
    task.forEach((task) => {
      if (task.style.display === "none") {
        task.style.display = "";
      }
    });
  };

  return (
    <div className="list">
      <div className="ui grid center aligned tasks">{renderedList}</div>
      <div className="filters">
        <a onClick={showAll}>Todas</a>
        <a onClick={() => filter(false)}>Pendientes</a>
        <a onClick={() => filter(true)}>Completadas</a>
      </div>
    </div>
  );
};

export default List;
