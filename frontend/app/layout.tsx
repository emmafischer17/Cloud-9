export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        <nav style={{
          padding: "12px",
          background: "#0ea5e9",
          color: "white",
          textAlign: "center"
        }}>
          <a href="/" style={{ margin: "0 10px", color: "white" }}>Home</a>
          <a href="/ask" style={{ margin: "0 10px", color: "white" }}>Ask</a>
          <a href="/mood" style={{ margin: "0 10px", color: "white" }}>Mood</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
