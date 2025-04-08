import React, { useState } from "react";

function App() {
  const todos = [
    { id: 1, text: "할일1", completed: true },
    { id: 2, text: "할일2", completed: false },
    { id: 3, text: "할일3", completed: false },
  ];

  const [todoList, setTodoList] = useState([...todos]);
  const [input, setInput] = useState("");

  function deleteTodo(id) {
    setTodoList(
      todoList.filter((item) => {
        // return item.id !== id ? item : null;
        return item.id !== id;
      })
    );
  }

  function addTask() {
    if (input.trim() === "") {
      alert("할일을 입력하세요");
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodoList([newTodo, ...todoList]);
    setInput("");
  }

  function toggleTodo(id) {
    setTodoList(
      todoList.map((item) => {
        return item.id === id ? { ...item, completed: !item.completed } : item;
      })
    );
  }

  return (
    <>
      <div className="container w-[500px] m-auto border rounded mt-12 p-5">
        <h1 className="text-center">My Todo App</h1>
        <div className="flex justify-between items-center m-3 p-3 gap-3 border">
          <input
            type="text"
            placeholder="할일을 입력하세요."
            className="flex-1 border"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            value={input}
          />
          <button
            className="text-white bg-blue-300 rounded-sm m-2 p-1"
            onClick={addTask}
          >
            추가
          </button>
        </div>
        <div>
          <ul className="">
            {todoList.map((item) => {
              return (
                <>
                  <li className="flex justify-between border-b bg-blue-50 m-3 p-3 rounded">
                    <span
                      onClick={() => {
                        toggleTodo(item.id);
                      }}
                      style={{
                        textDecoration: item.completed
                          ? "line-through"
                          : "none",
                        color: item.completed ? "gray" : "black",
                      }}
                    >
                      {item.text}
                    </span>
                    <button
                      onClick={() => {
                        deleteTodo(item.id);
                      }}
                    >
                      x
                    </button>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
