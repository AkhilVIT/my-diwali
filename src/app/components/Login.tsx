"use client";
import { useState } from "react";
import { Button, Input, Card, CardBody, CardHeader } from "@heroui/react";
import { Lock, Calendar, Heart, Sparkles } from "lucide-react";

interface LoginProps {
  onLoginSuccess: () => void;
}

export default function Login({ onLoginSuccess }: LoginProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [attempts, setAttempts] = useState(0);

  const correctPassword = "04081997";

  const poeticQuotes = [
    "I don't know when Diwali starts, but I can say your born day is Diwali...",
    "The day you were born was the real festival of lights",
    "My personal Diwali began the day you entered this world",
    "You are the light that makes every day a celebration",
  ];

  const getCurrentQuote = () => {
    return poeticQuotes[attempts % poeticQuotes.length];
  };

  const handleUnlock = () => {
    if (password === correctPassword) {
      onLoginSuccess();
    } else {
      setError("The lights dimmed for a moment... try again, my Diwali");
      setAttempts((prev) => prev + 1);
      setPassword("");

      const input = document.getElementById("password-input");
      input?.classList.add("animate-shake");
      setTimeout(() => {
        input?.classList.remove("animate-shake");
      }, 500);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleUnlock();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-500 via-orange-500 to-red-600 flex items-center justify-center p-4">
      {/* Floating Diyas */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl opacity-60 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${12 + Math.random() * 8}s`,
            }}
          >
            🪔
          </div>
        ))}
      </div>

      <Card className="max-w-md w-full backdrop-blur-lg bg-white/15 border-yellow-200/30 shadow-2xl shadow-yellow-500/20">
        <CardHeader className="flex flex-col items-center pt-8">
          <div className="relative">
            <Sparkles className="w-16 h-16 text-yellow-300 mb-4 animate-pulse" />
            <Heart className="w-6 h-6 text-red-400 absolute -top-1 -right-1 animate-bounce" />
          </div>
          <h1 className="text-3xl font-bold text-white text-center mb-2 bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">
            My Personal Diwali
          </h1>
          <p className="text-white/80 text-center text-sm">
            A celebration that begins and ends with you
          </p>
        </CardHeader>

        <CardBody className="gap-6 px-8 pb-8">
          {/* Poetic Hint */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Calendar className="w-5 h-5 text-yellow-300 animate-pulse" />
              <p className="text-yellow-200 text-lg font-medium">
                The Key to My Heart:
              </p>
            </div>
            <p className="text-white/95 text-lg italic leading-relaxed bg-yellow-500/20 rounded-lg p-4 border border-yellow-400/30">
              &quot;{getCurrentQuote()}&quot;
            </p>
            <p className="text-white/70 text-sm mt-3 flex items-center justify-center gap-1">
              <Lock className="w-3 h-3" />
              Enter as DDMMYYYY
            </p>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <Input
              id="password-input"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              onKeyPress={handleKeyPress}
              placeholder="Enter the day my world lit up..."
              className="text-white"
              classNames={{
                input: [
                  "text-white",
                  "placeholder:text-yellow-100/60",
                  "text-center",
                  "text-lg",
                  "font-medium",
                ],
                inputWrapper: [
                  "bg-yellow-500/20",
                  "border-yellow-300/40",
                  "hover:bg-yellow-500/25",
                  "data-[hover=true]:bg-yellow-500/25",
                  "group-data-[focus=true]:bg-yellow-500/20",
                  "backdrop-blur-sm",
                ],
              }}
              endContent={
                <Sparkles className="w-4 h-4 text-yellow-300 animate-spin" />
              }
            />

            {error && (
              <p className="text-yellow-200 text-sm text-center animate-pulse bg-red-500/20 rounded py-2">
                {error}
              </p>
            )}
          </div>

          {/* Unlock Button */}

          <Button
            onPress={handleUnlock}
            className="font-bold relative text-lg py-2 bg-gradient-to-r from-yellow-500 to-orange-600 border-none shadow-2xl shadow-orange-500/40 text-white w-full" // Changed py-6 to py-4
            variant="shadow"
            size="lg"
            startContent={
              <Sparkles className="w-5 absolute left-1 bottom-1 h-5" />
            }
            endContent={<Heart className="w-5 absolute right-1 top-1 h-5" />}
          >
            Light Up My Heart
          </Button>

          {/* Romantic Hint after multiple attempts */}
          {attempts >= 2 && (
            <div className="text-center p-4 bg-yellow-500/10 rounded-lg border border-yellow-400/20">
              <p className="text-yellow-200 text-sm mb-1 flex items-center justify-center gap-2">
                🪔 Remember the day your light first shone upon this world...
              </p>
              <p className="text-yellow-100/70 text-xs">
                The same day my darkness found its permanent diya
              </p>
            </div>
          )}
        </CardBody>
      </Card>

      {/* Floating Sparkles Animation */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-yellow-300 opacity-70 animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${20 + Math.random() * 15}s`,
              fontSize: `${Math.random() * 10 + 10}px`,
            }}
          >
            ✨
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          75% {
            transform: translateX(5px);
          }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }

        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg) scale(1);
          }
          50% {
            transform: translateY(50vh) rotate(180deg) scale(1.1);
          }
          100% {
            transform: translateY(-100px) rotate(360deg) scale(1);
          }
        }
        .animate-float {
          animation: float linear infinite;
        }

        @keyframes float-slow {
          0% {
            transform: translateY(100vh) translateX(0px) rotate(0deg);
          }
          33% {
            transform: translateY(66vh) translateX(20px) rotate(120deg);
          }
          66% {
            transform: translateY(33vh) translateX(-20px) rotate(240deg);
          }
          100% {
            transform: translateY(-100px) translateX(0px) rotate(360deg);
          }
        }
        .animate-float-slow {
          animation: float-slow linear infinite;
        }
      `}</style>
    </div>
  );
}
