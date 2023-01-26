import React, { useState, useEffect } from "react";
import todos from "./apis";

import Form from "./components/Form";
import Section from "./components/Section";
import List from "./components/List";
import Footer from "./components/Footer";

import "./App.css";

const appTitle = "To-Do List";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await todos.get("/todos");
      setTodoList(data);
    }

    fetchData();
  }, []);

  const addTodo = async (item) => {
    const { data } = await todos.post("/todos", item);
    setTodoList((oldList) => [...oldList, data]);
  };

  const removeTodo = async (id) => {
    await todos.delete(`/todos/${id}`);
    setTodoList((oldList) => oldList.filter((item) => item._id !== id));
  };

  const editTodo = async (id, item) => {
    await todos.put(`/todos/${id}`, item);
  };

  return (
    <div className="content">
      <div style={{width: "100%"}}>
        {/* <img class="ui centered big image" src="https://www.nippon.com/es/ncommon/contents/guide-to-japan/143942/143942.jpg" width={"100%"} alt=""
                style={{ zIndex: -10 }} /> */}
        <Section>
          <h1>{appTitle}</h1>
        </Section>

        <Section>
          <Form addTodo={addTodo} />
        </Section>

        <Section>
          <List
            editTodoListProp={editTodo}
            removeTodoListProp={removeTodo}
            list={todoList}
          />
        </Section>
        <Footer />
      </div>
    </div>
  );
};

export default App;
