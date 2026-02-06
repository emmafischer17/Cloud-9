"use client";

import { useState } from "react";

export default function VoiceRecorder() {
  const [recording, setRecording] = useState(false);

  return (
    <div style={{ marginTop: "16px", textAlign: "center" }}>
      <button
        onClick={() => setRecording(!recording)}
        style={{
          padding: "10px",
          background: recording ? "#ef4444" : "#22c55e",
          color: "white",
          borderRadius: "8px",
          border: "none"
        }}
      >
        {recording ? "Stop Recording" : "Record Voice Note"}
      </button>

      {recording && (
        <p style={{ fontSize: "12px", color: "#666" }}>
          🎙️ Listening...
        </p>
      )}
    </div>
  );
}
