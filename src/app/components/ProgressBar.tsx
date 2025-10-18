"use client";
import { useState, useEffect } from "react";
import { Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";

interface ProgressBarProps {
  onComplete: () => void;
}

export default function ProgressBar({ onComplete }: ProgressBarProps) {
  const [progress, setProgress] = useState(0);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const progressQuotes = [
    {
      text: "Unlocking my heart for you...",
      emoji: "💖",
    },
    {
      text: "Almost there, my love...",
      emoji: "🌟",
    },
  ];

  useEffect(() => {
    const totalDuration = 4000; // 4 seconds total for progress animation
    const minimumDisplayTime = 3000; // Minimum 3 seconds to show the progress bar
    const startTime = Date.now();
    let progressCompleteTime: number;
    let animationFrameId: number;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / totalDuration) * 100, 100);

      setProgress(newProgress);

      // Update quotes at exactly 50% progress
      if (newProgress >= 50 && currentQuoteIndex === 0) {
        setCurrentQuoteIndex(1);
      }

      if (newProgress < 100) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        progressCompleteTime = Date.now();
        setIsComplete(true);

        // Calculate remaining time to meet minimum display time
        const timeElapsed = progressCompleteTime - startTime;
        const remainingTime = Math.max(minimumDisplayTime - timeElapsed, 0);

        setTimeout(() => {
          onComplete();
        }, remainingTime);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    // Cleanup function
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [onComplete]); // Removed currentQuoteIndex from dependencies

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-yellow-500 via-orange-500 to-red-600 p-4">
      <Card className="max-w-md w-full backdrop-blur-lg bg-white/20 border-yellow-200/40 shadow-2xl shadow-yellow-500/30">
        <CardBody className="gap-6 px-8 py-12">
          {/* Ultra Eye-Catching Progress Bar */}
          <div className="space-y-8">
            {/* Main Progress Bar with Maximum Visual Impact */}
            <div className="relative">
              {/* Outer Glow Effect */}
              <div className="absolute inset-0 bg-yellow-400/30 blur-2xl rounded-full scale-110 animate-pulse-fast"></div>

              {/* Progress Bar Container */}
              <div className="relative bg-white/20 rounded-full h-6 shadow-2xl shadow-yellow-500/25 border border-yellow-300/50 overflow-hidden">
                {/* Animated Gradient Fill */}
                <div
                  className="h-full rounded-full relative bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 shadow-inner shadow-yellow-200/50 transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                >
                  {/* Shine Effect */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine"></div>

                  {/* Sparkle Trail */}
                  <div className="absolute top-0 bottom-0 right-0 w-4 bg-gradient-to-l from-yellow-200 to-transparent animate-pulse"></div>
                </div>

                {/* Floating Sparkles Over Progress */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute text-yellow-200 text-sm animate-sparkle-float"
                      style={{
                        left: `${progress - 2 + i * 3}%`,
                        animationDelay: `${i * 0.1}s`,
                        filter: "drop-shadow(0 0 8px yellow)",
                      }}
                    >
                      ✨
                    </div>
                  ))}
                </div>

                {/* Completion Celebration */}
                {isComplete && (
                  <div className="absolute inset-0">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute text-yellow-300 text-lg animate-sparkle-float"
                        style={{
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.2}s`,
                          filter: "drop-shadow(0 0 12px yellow)",
                        }}
                      >
                        {i % 3 === 0 ? "✨" : i % 3 === 1 ? "🌟" : "💫"}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Percentage Display with Glow */}
              <div className="flex justify-center mt-6">
                <div className="relative">
                  <span className="text-4xl font-black text-white drop-shadow-lg bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent animate-bounce-fast">
                    {Math.round(progress)}%
                  </span>
                  <div className="absolute inset-0 text-4xl font-black text-yellow-200/30 blur-sm animate-pulse">
                    {Math.round(progress)}%
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Display with Smooth Transitions */}
            <div className="text-center min-h-[60px] flex items-center justify-center">
              <motion.div
                key={currentQuoteIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="opacity-80"
              >
                <div className="text-xl mb-1">
                  {progressQuotes[currentQuoteIndex].emoji}
                </div>
                <p className="text-white/80 text-xs italic">
                  {progressQuotes[currentQuoteIndex].text}
                </p>

                {/* Final completion message */}
                {isComplete && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-2 text-yellow-200 text-sm font-medium"
                  >
                    Loading your special wish...
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </CardBody>
      </Card>

      <style jsx global>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }
        .animate-shine {
          animation: shine 0.8s ease-in-out infinite;
        }

        @keyframes sparkle-float {
          0% {
            transform: translateY(0px) scale(0.8);
            opacity: 0;
          }
          50% {
            transform: translateY(-12px) scale(1.3);
            opacity: 1;
          }
          100% {
            transform: translateY(-24px) scale(0.8);
            opacity: 0;
          }
        }
        .animate-sparkle-float {
          animation: sparkle-float 0.6s ease-out infinite;
        }

        @keyframes pulse-fast {
          0%,
          100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }
        .animate-pulse-fast {
          animation: pulse-fast 0.5s ease-in-out infinite;
        }

        @keyframes bounce-fast {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        .animate-bounce-fast {
          animation: bounce-fast 0.3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
