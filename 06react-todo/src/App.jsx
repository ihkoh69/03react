import React, { useState } from "react";

function App() {
  const todos = [
    { id: 1, text: "할일 첫번째", completed: true },
    { id: 2, text: "할일 두번째", completed: false },
    { id: 3, text: "할일 세번째", completed: false },
  ];

  const [todoList, setTodoList] = useState([...todos]);

  function deleteTodo(id) {
    // alert("deleteTodo : " + id);

    setTodoList(
      todoList.filter((item) => {
        return item.id !== id;
        // return item.id !== id ? item : null;
      })
    );
  }

  function addTodo() {
    alert("addTodo");
  }

  function toggleTodo(id) {
    alert("toggleTodo " + id);
  }

  return (
    <>
      <div className="container m-5 border rounded p-5">
        <h1 className="text-center">My TodoList App</h1>
        <div className="flex justify-between items-center m-2 p-2 gap-2 border">
          <input
            type="text"
            placeholder="할일을 입력하세요"
            className="flex-1 border p-2 m-2"
          />
          <button
            className="bg-blue-300 text-white rounded m-2 p-2"
            onClick={addTodo}
          >
            추가
          </button>
        </div>
        <div className="dLine border-b mt-5 mb-5"></div>
        <div>
          <ul>
            {todoList.map((item) => {
              return (
                <>
                  <li className="flex justify-between items-center m-3 p-3 bg-blue-50">
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
                      X
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
