"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "#fff",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <section style={{ padding: "120px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "3.5rem", marginBottom: "20px", fontWeight: "bold" }}>
          Fashion That Inspires
        </h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "700px", margin: "0 auto", color: "#ddd" }}>
          Discover your unique style with our latest seasonal collections. From everyday essentials to bold statements.
        </p>
        <Link href="/products">
          <button
            style={{
              marginTop: "40px",
              backgroundColor: "#f4c542",
              color: "#000",
              padding: "14px 34px",
              fontSize: "1.1rem",
              fontWeight: "600",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            🛍️ Shop Now
          </button>
        </Link>
      </section>
      <section style={{ padding: "60px 20px", backgroundColor: "rgba(74, 53, 53, 0.6)", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.3rem", marginBottom: "20px" }}>About Fashiva</h2>
        <p style={{ color: "#ddd", maxWidth: "800px", margin: "0 auto", lineHeight: "1.7" }}>
          At <strong>Fashiva</strong>, fashion is a way to express who you are. Our collections bring out confidence, creativity, and individuality.
        </p>
      </section>
      <section style={{ padding: "60px 20px", backgroundColor: "rgba(255,255,255,0.1)", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.2rem", marginBottom: "25px" }}>Featured Collections</h2>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "30px" }}>
          <CategoryCard title="Women's Fashion" img="women2.jpg" />
          <CategoryCard title="Men's Collection" img="men.jpg" />
          <CategoryCard title="Accessories" img="accessories.jpg" />
          <CategoryCard title="Footwear" img="footwear.jpg" />
        </div>
      </section>
      <section style={{ textAlign: "center", padding: "80px 20px", background: "rgba(0,0,0,0.75)" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>Ready to Upgrade Your Look?</h2>
        <p style={{ maxWidth: "650px", margin: "0 auto 30px", color: "#ccc", lineHeight: "1.6" }}>
          Browse our premium outfits, accessories, and shoes — designed to keep you stylish every season.
        </p>
        <Link href="/products">
          <button style={{ backgroundColor: "#f4c542", color: "#000", padding: "14px 32px", borderRadius: "6px", border: "none", fontWeight: "600", fontSize: "1rem", cursor: "pointer" }}>
            🛒 Start Shopping
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "25px", backgroundColor: "rgba(0,0,0,0.9)", fontSize: "0.9rem", color: "#ccc" }}>
        <p>© {new Date().getFullYear()} <strong>Fashiva</strong> — Designed with heart for Fashioners.</p>
      </footer>
    </div>
  );
}
function CategoryCard({ title, img }) {
  return (
    <div
      style={{
        width: "260px",
        backgroundColor: "rgba(255,255,255,0.1)",
        borderRadius: "10px",
        overflow: "hidden",
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        transition: "transform 0.3s ease",
      }}
      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img src={img} alt={title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
      <h3 style={{ margin: "15px 0", color: "#f4c542" }}>{title}</h3>
    </div>
  );
}
