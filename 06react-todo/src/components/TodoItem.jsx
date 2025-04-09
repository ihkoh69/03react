import React, { useState } from "react";

function TodoItem({ item, toggleTodo, deleteTodo }) {
  return (
    <>
      <li className="flex justify-between items-center m-3 p-3 bg-blue-50">
        <div className="flex gap-3 items-center">
          <input
            type="checkbox"
            onChange={() => {
              toggleTodo(item.id);
            }}
            checked={item.completed}
            className="accent-blue-500 w-5 h-5"
          />
          <span
            onClick={() => {
              toggleTodo(item.id);
            }}
            style={{
              textDecoration: item.completed ? "line-through" : "none",
              color: item.completed ? "gray" : "black",
            }}
          >
            {item.text}
          </span>
        </div>
        <button
          onClick={() => {
            deleteTodo(item.id);
          }}
        >
          삭제
        </button>
      </li>
    </>
  );
}

export default TodoItem;
