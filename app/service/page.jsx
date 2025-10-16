"use client";

export default function Service() {
  const services = [
    { title: "Personal Styling", desc: "One-on-one fashion advice to fit your style.", icon: "👗" },
    { title: "Custom Orders", desc: "Bespoke clothing and accessories made for you.", icon: "✂️" },
    { title: "Fast Delivery", desc: "Quick and reliable delivery for your outfits.", icon: "🚚" },
    { title: "Wardrobe Consultation", desc: "Refresh your wardrobe with expert tips.", icon: "🧥" },
    { title: "Gift Packages", desc: "Perfect fashion gifts for your loved ones.", icon: "🎁" },
    { title: "Fashion Events", desc: "Exclusive access to fashion shows & events.", icon: "🎉" },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "60px 20px", textAlign: "center" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>Our Services</h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "700px", margin: "0 auto 50px" }}>
        Explore our fashion services designed to make your style journey seamless and enjoyable.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "30px",
        }}
      >
        {services.map((s, idx) => (
          <div
            key={idx}
            style={{
              border: "1px solid #ccc",
              borderRadius: "12px",
              padding: "30px 20px",
              textAlign: "center",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <div style={{ fontSize: "3rem", marginBottom: "15px" }}>{s.icon}</div>
            <h3 style={{ marginBottom: "10px", color: "#f4c542" }}>{s.title}</h3>
            <p style={{ color: "#555", fontSize: "0.95rem" }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
