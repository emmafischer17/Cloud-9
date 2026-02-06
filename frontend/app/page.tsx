export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(#e0f2fe, #ffffff)"
    }}>
      <div style={{
        background: "white",
        padding: "24px",
        borderRadius: "16px",
        width: "100%",
        maxWidth: "500px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
      }}>
        <h1 style={{ textAlign: "center" }}>☁️ Cloud9</h1>
        <p style={{ textAlign: "center", color: "#555" }}>
          Your second brain for real life
        </p>

        <textarea
          placeholder="What's on your mind?"
          style={{
            width: "100%",
            height: "120px",
            marginTop: "12px",
            padding: "10px"
          }}
        />

        <button
          style={{
            marginTop: "12px",
            width: "100%",
            padding: "10px",
            background: "#38bdf8",
            color: "white",
            border: "none",
            borderRadius: "8px"
          }}
        >
          Save Memory
        </button>
      </div>
    </main>
  );
}
