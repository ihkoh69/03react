import React, { useState } from "react";

function App() {
  const todos = [
    { id: 1, text: "react 공부하기", completed: true },

    { id: 2, text: "점심먹기", completed: false },
    { id: 3, text: "스프링 공부하기", completed: false },
  ];

  const [todoList, setTodoList] = useState([...todos]);
  const [input, setInput] = useState("");

  function delelteTodo(id) {
    alert("todo " + id);

    setTodoList(
      todoList.filter((item) => {
        return item.id !== id;
      })
    );
  }

  function addTodo() {
    // alert("addTodo");
    if (input.trim() === "") {
      alert("자료를 입력하세요");
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    console.log(newTodo);

    setTodoList([newTodo, ...todoList]);
    setInput("");
  }
  return (
    <>
      <div className="container m-auto border m-3 p-3">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>
        <div className="inputItems flex justify-between m-3 p-3 gap-4">
          <input
            type="text"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            value={input}
            placeholder="할일을 입력하세요."
            className="inpTodo flex-1"
          />

          <button className="btnAdd " onClick={addTodo}>
            추가
          </button>
        </div>
        <div className="di-line border-b mb-3 "></div>
        <ul>
          {/* <li className="flex flex-1 justify-between items-center m-3 p-3 border-b">
            <span>할일1</span>
            <button className="text-red-300 text-sm">X</button>
          </li>
          <li className="flex flex-1 justify-between items-center m-3 p-3 border-b">
            <span>할일2</span>
            <button className="text-red-300 text-sm">X</button>
          </li> */}

          {todoList.map((item) => {
            return (
              <>
                <li className="flex flex-1 justify-between items-center m-3 p-3 border-b bg-blue-50">
                  <span
                    style={{
                      textDecoration: item.completed ? "line-through" : "none",
                      color: item.completed ? "lightgray" : "black",
                    }}
                  >
                    {item.text}
                  </span>
                  <button
                    className="text-red-300 text-sm"
                    onClick={() => {
                      delelteTodo(item.id);
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
