"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${form.name}, we received your message!`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ padding: "60px 20px", fontFamily: "Arial, sans-serif", maxWidth: "700px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Get in Touch</h1>
      <p style={{ textAlign: "center", marginBottom: "40px" }}>
        Have questions or feedback? Fill out the form below or contact us directly.
      </p>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {["name", "email"].map((field) => (
          <input
            key={field}
            type={field === "email" ? "email" : "text"}
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={form[field]}
            onChange={handleChange}
            required
            style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc" }}
          />
        ))}
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows="6"
          style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc", resize: "none" }}
        />
        <button
          type="submit"
          style={{ padding: "12px", borderRadius: "8px", border: "none", backgroundColor: "#f4c542", cursor: "pointer", fontWeight: "bold" }}
        >
          Send Message
        </button>
      </form>

      <div style={{ marginTop: "50px", textAlign: "center", color: "#555" }}>
        <p>Email: support@fashiva.com</p>
        <p>Phone: +91-XXXXXXXXXX</p>
        <p>Follow us on social media: Instagram | Facebook | Shopping App</p>
      </div>
    </div>
  );
}
