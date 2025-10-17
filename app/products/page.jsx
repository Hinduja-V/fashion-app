"use client";
import { useState } from "react";
const products = [
  { id: 1, name: "Red Dress", price: 1200, img: "/Red Dress.jpg" },
  { id: 2, name: "Men's Jacket", price: 1800, img: "/Men's Jacket.jpg" },
  { id: 4, name: "Handbag", price: 1500, img: "/handbag.jpg" },
  { id: 5, name: "Watch", price: 2500, img: "/watch.jpg" },
  { id: 7, name: "Jeans", price: 1300, img: "/jeans.jpg" },
  { id: 8, name: "Shirt", price: 1100, img: "/shirt.jpg" },
  { id: 9, name: "Boots", price: 2000, img: "/boots.jpg" },
  { id: 10, name: "Scarf", price: 700, img: "/scarf.jpg" },
];

export default function Products() {
  const [cart, setCart] = useState([]);

  const addToCart = (p) => setCart((c) => [...c, p]);
  const removeFromCart = (id) => setCart((c) => c.filter((i) => i.id !== id));
  const total = cart.reduce((sum, i) => sum + i.price, 0);

  return (
    <div style={{ padding: "60px 20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Products</h1>
      <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "18px", marginBottom: "40px" }}>
        Explore our high-quality products tailored to your needs.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginBottom: "50px",
        }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={p.img}
              alt={p.name}
              style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }}
            />
            <h3>{p.name}</h3>
            <p style={{ fontWeight: "bold" }}>₹ {p.price}</p>
            <button
              onClick={() => addToCart(p)}
              style={{
                padding: "10px 20px",
                marginTop: "10px",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "#f4c542",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Your Cart</h2>
        {cart.length === 0 ? (
          <p style={{ textAlign: "center", color: "#555" }}>Cart is empty.</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #ccc",
                  padding: "8px 0",
                }}
              >
                <span>{item.name}</span>
                <span>₹ {item.price}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    padding: "5px 10px",
                    border: "none",
                    borderRadius: "4px",
                    backgroundColor: "#25abffff",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
            <h3 style={{ textAlign: "right", marginTop: "15px" }}>Total: ₹ {total}</h3>
          </div>
        )}
      </div>
    </div>
  );
}
