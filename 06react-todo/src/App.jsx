import React, { useState } from "react";

function App() {
  const todos = [
    { id: 1, text: "리액트 공부", completed: true },

    { id: 2, text: "점심먹기", completed: false },

    {
      id: 3,
      text: "스프링부트 공부",
      complteted: false,
    },
  ];

  const [todoList, setTodoList] = useState([...todos]);
  const [input, setInput] = useState("");

  function deleteTodo(id) {
    // alert("deleteTodo : " + id);
    setTodoList(
      todoList.filter((item) => {
        return item.id !== id;
      })
    );
  }

  function addTask() {
    if (input.trim() === "") {
      alert("할일을 입력하세요.");
      return;
    }

    alert(input);
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodoList([newTodo, ...todoList]);
    setInput("");
  }

  return (
    <>
      <div className="container todoListApp m-3 p-3 border rounded">
        <h1 className="text-center">My Todo List App</h1>
        <div className="inputItems flex justify-between items-center m-3 p-3 gap-3">
          <input
            type="text"
            className="inpTask flex-1 border m-2 p-2"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button className="bg-blue-300 text-white m-2 p-2" onClick={addTask}>
            추가
          </button>
        </div>
        <div className="divLine"></div>
        <ul>
          {/* <li className="flex flex-1 justify-between items-center m-3 p-3 bg-blue-50">
            <span style={{ textDecoration: "none" }}>할일 1</span>
            <button>X</button>
          </li>
          <li className="flex flex-1 justify-between items-center m-3 p-3 bg-blue-50">
            <span style={{ textDecoration: "line-through" }}>할일 2</span>
            <button>X</button>
          </li> */}
          {todoList.map((item) => {
            return (
              <>
                <li className="flex flex-1 justify-between items-center m-3 p-3 bg-blue-50">
                  <span
                    style={{
                      textDecoration: item.completed ? "line-through" : "none",
                    }}
                  >
                    {item.text}
                  </span>
                  <button
                    onClick={() => {
                      deleteTodo(item.id);
                    }}
                  >
                    X
                  </button>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
