"use client";
import { useEffect, useRef } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Auto-play music when component mounts
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          audioRef.current.volume = 0.3; // Set volume to 30%
          await audioRef.current.play();
        } catch (error) {
          console.log("Autoplay prevented by browser:", error);
          // Fallback: play on user interaction
          const handleUserInteraction = () => {
            if (audioRef.current) {
              audioRef.current.play();
            }
            document.removeEventListener("click", handleUserInteraction);
            document.removeEventListener("touchstart", handleUserInteraction);
          };

          document.addEventListener("click", handleUserInteraction);
          document.addEventListener("touchstart", handleUserInteraction);
        }
      }
    };

    playAudio();
  }, []);

  return (
    <audio ref={audioRef} loop autoPlay className="hidden">
      <source src="/lovebgm.mpeg" type="audio/mpeg" />
      <source src="/lovebgm.mpeg" type="audio/mp4" />
      Your browser does not support the audio element.
    </audio>
  );
}
