"use client";
import { useState } from "react";
import Login from "./components/Login";
import ProgressBar from "./components/ProgressBar";
import Wish from "./components/Wish";
type AppState = "login" | "progress" | "wish";
export default function Home() {
  const [appState, setAppState] = useState<AppState>("login");

  const handleLoginSuccess = () => {
    setAppState("progress");
  };

  const handleProgressComplete = () => {
    setAppState("wish");
  };
  return (
    <main className="relative">
      {appState === "login" && <Login onLoginSuccess={handleLoginSuccess} />}
      {appState === "progress" && (
        <ProgressBar onComplete={handleProgressComplete} />
      )}
      {appState === "wish" && <Wish />}
    </main>
  );
}
