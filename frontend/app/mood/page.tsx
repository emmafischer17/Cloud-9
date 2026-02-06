export default function MoodPage() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(#fefce8, #ffffff)"
    }}>
      <div style={{
        background: "white",
        padding: "24px",
        borderRadius: "16px",
        width: "100%",
        maxWidth: "500px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{ textAlign: "center" }}>🌤️ Mood Timeline</h2>
        <p style={{ textAlign: "center", color: "#555" }}>
          Emotional patterns over time
        </p>

        <ul style={{ marginTop: "16px", color: "#444" }}>
          <li>Mon — 😰 Stress</li>
          <li>Tue — 😐 Neutral</li>
          <li>Wed — 😊 Happy</li>
          <li>Thu — 😰 Stress</li>
          <li>Fri — ⚡ High Energy</li>
        </ul>

        <p style={{ marginTop: "16px", fontSize: "14px", color: "#777" }}>
          MoodCast uses AI to forecast tomorrow’s emotional state.
        </p>
      </div>
    </main>
  );
}
