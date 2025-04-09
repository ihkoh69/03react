import { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";

function App() {
  // const todos = [
  //   { id: 1, text: "할일 첫번째", completed: true },
  //   { id: 2, text: "할일 두번째", completed: false },
  //   { id: 3, text: "할일 세번째", completed: false },
  // ];

  // const [todoList, setTodoList] = useState([...todos]);
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const store = localStorage.getItem("todo");
    if (store) {
      setTodoList(JSON.parse(store));
    }
    console.log("useEffect");
  }, []);

  // useEffect(함수, 배열)
  // 함수 : 프로그램실행, 배열이 없으면 상태들 변화에 실행,
  // 배열이 []만 있으면 한번 실행
  // [] 안에는 변화되는 useState를 지정

  // useEffect(() => {
  //   console.log("input 변화");
  // }, [input]);
  useEffect(() => {
    console.log("todoList 변화");
    localStorage.setItem("todo", JSON.stringify(todoList));
  }, [todoList]);

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
    if (input.trim() == "") {
      alert("할일을 입력하세요.");
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
    // alert("toggleTodo " + id);
    setTodoList(
      todoList.map((item) => {
        return item.id === id ? { ...item, completed: !item.completed } : item;
      })
    );
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
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                {
                  addTodo();
                  console.log("엔터누름 " + e.key);
                }
              }
            }}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            value={input}
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
            {todoList.map((item, i) => {
              return (
                <TodoItem
                  key={i}
                  item={todoList[i]}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                />
                // <>
                //   <li className="flex justify-between items-center m-3 p-3 bg-blue-50">
                //     <div className="flex gap-3 items-center">
                //       <input
                //         type="checkbox"
                //         checked={item.completed}
                //         className="accent-blue-500 w-5 h-5"
                //       />
                //       <span
                //         onClick={() => {
                //           toggleTodo(item.id);
                //         }}
                //         style={{
                //           textDecoration: item.completed
                //             ? "line-through"
                //             : "none",
                //           color: item.completed ? "gray" : "black",
                //         }}
                //       >
                //         {item.text}
                //       </span>
                //     </div>
                //     <button
                //       onClick={() => {
                //         deleteTodo(item.id);
                //       }}
                //     >
                //       삭제
                //     </button>
                //   </li>
                // </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
