"use client";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../Redux/todoSlice";

export default function TodosPage() {
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");

  const handleAdd = () => {
    if (!newTodo.trim()) return;
    dispatch(addTodo(newTodo));
    setNewTodo("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1> Todo List</h1>
      <div style={{ marginBottom: "1.5rem" }}>
        <input
          type="text"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          placeholder="Enter a todo..."
          style={{ padding: "0.5rem", width: "250px", marginRight: "0.5rem" }}
        />
        <button
          onClick={handleAdd}
          style={{ padding: "0.5rem 1rem", background: "#0070f3", color: "#fff" }}
        >
          Add
        </button>
      </div>

      {todos.length === 0 ? (
        <p>No todos yet. Add one above!</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {todos.map((todo, index) => (
            <li key={index} style={{ marginBottom: "0.5rem" }}>
              {todo}{" "}
              <button onClick={() => dispatch(removeTodo(todo))}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
