export default function AskMemory() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(#f0f9ff, #ffffff)"
    }}>
      <div style={{
        background: "white",
        padding: "24px",
        borderRadius: "16px",
        width: "100%",
        maxWidth: "500px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{ textAlign: "center" }}>🧠 Ask Cloud9</h2>
        <p style={{ textAlign: "center", color: "#555" }}>
          Ask anything about your past thoughts
        </p>

        <input
          placeholder="What did I say about my chemistry test?"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "12px"
          }}
        />

        <button
          style={{
            marginTop: "12px",
            width: "100%",
            padding: "10px",
            background: "#0ea5e9",
            color: "white",
            border: "none",
            borderRadius: "8px"
          }}
        >
          Ask
        </button>

        <div style={{
          marginTop: "16px",
          background: "#f8fafc",
          padding: "12px",
          borderRadius: "8px"
        }}>
          <strong>Answer:</strong>
          <p style={{ color: "#444" }}>
            (Cloud9 will answer here)
          </p>
        </div>
      </div>
    </main>
  );
}
