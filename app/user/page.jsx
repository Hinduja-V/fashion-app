"use client";
import { useState } from "react";

export default function User() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) throw new Error("Failed to fetch users");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "75px", textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h2>User List</h2>

      <button
        onClick={fetchUsers}
        style={{
          padding: "10px 20px",
          margin: "20px 0",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#f4c542",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        {loading ? "Loading..." : "Get Users"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: "10px" }}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
