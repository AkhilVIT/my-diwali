"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import MusicPlayer from "./MusicPlayer";

export default function Wish() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      src: "/pics/1760768897729.jpg",
      title: "My First Glimpse of Forever",
      subtitle: "The moment my world found its colors",
      message:
        "From the very first moment, I knew you were someone extraordinary. Your presence doesn't just light up a room—it lights up my entire existence. In your eyes, I found a home I never knew I was searching for.",
    },
    {
      src: "/pics/1760768897745.jpg",
      title: "The Smile That Lights My Soul",
      subtitle: "Brighter than a thousand sunrises",
      message:
        "Your smile is my favorite sight in this world. It has the power to turn my worst days into beautiful memories. Every time you smile, I feel like the luckiest person alive to witness such pure joy.",
    },
    {
      src: "/pics/1760768897756.jpg",
      title: "Windows to Our Future",
      subtitle: "In your eyes, I see our forever",
      message:
        "They say eyes are the windows to the soul, and yours show me a future filled with love, laughter, and endless possibilities. In your gaze, I see all the tomorrows I want to experience with you.",
    },
    {
      src: "/pics/1760768897765.jpg",
      title: "Magic in the Ordinary",
      subtitle: "You turn moments into miracles",
      message:
        "You have this incredible ability to find beauty in the simplest moments. With you, every ordinary day feels like a celebration, every quiet moment feels like a precious memory in the making.",
    },
    {
      src: "/pics/1760768897776.jpg",
      title: "My Guiding Light",
      subtitle: "The flame that never fades",
      message:
        "In the darkness, you are my constant light. In confusion, you are my clarity. In uncertainty, you are my certainty. You are the anchor that keeps me grounded and the star that guides me home.",
    },
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "rgb(254 252 232)",
      "rgb(255 251 235)",
      "rgb(255 247 237)",
      "rgb(254 242 242)",
      "rgb(255 241 242)",
      "rgb(254 252 232)",
    ]
  );

  return (
    <motion.div
      ref={containerRef}
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50"
      style={{ backgroundColor }}
    >
      <MusicPlayer />
      {/* Heartbeat Pulse Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Central Heartbeat Pulse */}
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-red-200/20 via-transparent to-transparent"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Diya Flame Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`flame-${i}`}
            className="absolute w-2 h-2 rounded-full"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 1.5 + Math.random(),
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
            style={{
              left: `${20 + i * 6}%`,
              top: `${30 + i * 4}%`,
              background: "radial-gradient(circle, #fbbf24, #f59e0b, #dc2626)",
            }}
          />
        ))}

        {/* Floating Rangoli Patterns */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`rangoli-${i}`}
            className="absolute text-3xl opacity-10"
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + i * 10}%`,
            }}
          >
            {i % 2 === 0 ? "🪔" : "🎆"}
          </motion.div>
        ))}

        {/* Heartbeat Waves */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`wave-${i}`}
            className="absolute border-2 border-red-300/30 rounded-full"
            animate={{
              scale: [1, 3],
              opacity: [0.6, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeOut",
            }}
            style={{
              width: "100px",
              height: "100px",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}

        {/* Love Pulse Dots */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`pulse-${i}`}
            className="absolute w-1 h-1 rounded-full bg-pink-400"
            animate={{
              scale: [0, 3, 0],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Beating Hearts */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`heart-${i}`}
            className="absolute text-xl"
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.3, 0.7, 0.3],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
            style={{
              left: `${15 + i * 15}%`,
              top: `${70 + i * 5}%`,
              color:
                i % 3 === 0 ? "#ef4444" : i % 3 === 1 ? "#f97316" : "#f59e0b",
            }}
          >
            ❤️
          </motion.div>
        ))}

        {/* Golden Sparkles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute text-lg"
            animate={{
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              color: "#fbbf24",
            }}
          >
            ✨
          </motion.div>
        ))}
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 z-50 shadow-lg"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Current Title */}
      <motion.div
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="bg-black/30 backdrop-blur-lg rounded-full px-6 py-2 border border-white/30 shadow-lg">
          <p className="text-white text-sm font-light tracking-wider">
            {images[currentImage]?.title.toUpperCase()}
          </p>
        </div>
      </motion.div>

      {/* Image Sections */}
      {images.map((image, index) => (
        <ImageSection
          key={index}
          image={image}
          index={index}
          total={images.length}
          onView={() => setCurrentImage(index)}
        />
      ))}

      {/* Final Diya Section */}
      <RealisticDiyaSection />
    </motion.div>
  );
}

// Rest of the components remain exactly the same as before...
// [ImageSection, TypewriterText, RealisticDiyaSection components stay unchanged]

function ImageSection({
  image,
  index,
  total,
  onView,
}: {
  image: { src: string; title: string; subtitle: string; message: string };
  index: number;
  total: number;
  onView: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px", amount: 0.4 });
  const textInView = useInView(textRef, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  function getAspectRatio(index: number): string {
    // Based on your provided image dimensions:
    // 2160x3240, 1014x1297, 1014x1562, 1073x1004, 732x557

    switch (index) {
      case 0: // 2160x3240 -> 2:3 ratio
        return "2/3";
      case 1: // 1014x1297 -> ~3:4 ratio
        return "3/4";
      case 2: // 1014x1562 -> ~2:3 ratio
        return "2/3";
      case 3: // 1073x1004 -> ~1:1 ratio
        return "1/1";
      case 4: // 732x557 -> ~4:3 ratio
        return "4/3";
      default:
        return "3/4"; // Fallback ratio
    }
  }
  function getMaxHeight(index: number): string {
    switch (index) {
      case 0: // 2160x3240 -> 2:3 ratio
        return "85vh";
      case 1: // 1014x1297 -> ~3:4 ratio
        return "85vh";
      case 2: // 1014x1562 -> ~2:3 ratio
        return "85vh";
      case 3: // 1073x1004 -> ~1:1 ratio
        return "60vh";
      case 4: // 732x557 -> ~4:3 ratio
        return "60vh";
      default:
        return "85vh"; // Fallback ratio
    }
  }
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);

  if (isInView) {
    onView();
  }

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center p-6 lg:p-8 gap-8 lg:gap-12 relative"
    >
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={isInView ? { opacity: 0.2 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div
          className={`w-full h-full ${
            index === 0
              ? "bg-yellow-200"
              : index === 1
              ? "bg-orange-200"
              : index === 2
              ? "bg-pink-200"
              : index === 3
              ? "bg-red-200"
              : "bg-amber-200"
          }`}
        />
      </motion.div>

      {/* Image Container */}
      <motion.div
        className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-lg border border-white/40"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        // Scroll reveal animation
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.8,
            delay: index * 0.2, // Staggered animation based on index
          },
        }}
        viewport={{
          once: true,
          margin: "-50px", // Starts animation when 50px from viewport
        }}
      >
        <motion.img
          src={image.src}
          alt={image.title}
          className="w-full h-auto"
          style={{
            // Responsive height control
            maxHeight: getMaxHeight(index),

            // Dynamic aspect ratio based on image dimensions
            aspectRatio: getAspectRatio(index),

            // Optimal image rendering
            objectFit: "cover",
            objectPosition: "center",
            // Performance optimization
            // loading: "lazy",
            // decoding: "async",
          }}
          // Additional scroll reveal for image specifically
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
            transition: {
              duration: 1.2,
              delay: index * 0.2 + 0.3,
              ease: "easeOut",
            },
          }}
          viewport={{ once: true }}
          // Smooth scale on hover
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 1.5 }}
        />

        {/* Gradient overlay for better text readability */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.8,
              delay: index * 0.2 + 0.5,
            },
          }}
          viewport={{ once: true }}
        />
      </motion.div>

      {/* Text Message Container */}
      <motion.div
        ref={textRef}
        className="flex-1 max-w-2xl"
        initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
        animate={
          textInView
            ? { opacity: 1, x: 0 }
            : { opacity: 0, x: index % 2 === 0 ? 50 : -50 }
        }
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 lg:p-8 shadow-2xl border border-white/60">
          <motion.div
            className="text-4xl mb-4 text-center lg:text-left"
            initial={{ scale: 0, rotate: -180 }}
            animate={
              textInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
            }
            transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
          >
            {index === 4 ? "🔥" : "💫"}
          </motion.div>

          <TypewriterText text={image.message} delay={0.8} />
        </div>
      </motion.div>

      {/* Progress Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <span className="text-gray-700 text-sm font-medium bg-white/50 backdrop-blur-sm rounded-full px-3 py-1">
          {index + 1} of {total}
        </span>
        <div className="flex gap-2">
          {Array.from({ length: total }).map((_, i) => (
            <motion.div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                i === index
                  ? "bg-gradient-to-r from-orange-500 to-red-500 scale-125 shadow-lg"
                  : "bg-white/60"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      } else {
        setIsComplete(true);
      }
    }, 30);

    return () => clearTimeout(timeout);
  }, [currentIndex, isInView, text]);

  return (
    <div ref={ref}>
      <motion.p
        className="text-gray-700 text-lg lg:text-xl leading-relaxed font-light min-h-[200px] lg:min-h-[150px]"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay }}
      >
        {displayText}
        {!isComplete && (
          <motion.span
            className="inline-block w-0.5 h-6 bg-orange-500 ml-1 align-middle"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity }}
          />
        )}
      </motion.p>
    </div>
  );
}

function RealisticDiyaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const [showFace, setShowFace] = useState(false);

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center p-6 lg:p-8 relative"
    >
      {/* Enhanced Background for Final Section */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/60 via-orange-100/70 to-rose-100/60" />

      {/* Final Section Special Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Heartbeat Pulse for Final Section */}
        <motion.div
          className="absolute inset-0 bg-radial from-red-300/20 via-transparent to-transparent"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Golden Confetti */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`confetti-${i}`}
            className="absolute text-lg"
            animate={{
              y: [0, -100],
              x: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: "120%",
              color: "#fbbf24",
            }}
          >
            {i % 3 === 0 ? "✨" : i % 3 === 1 ? "🌟" : "💫"}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Realistic Diya */}
        <motion.div
          className="relative mx-auto mb-16 w-80 h-60 lg:w-96 lg:h-72"
          initial={{ scale: 0.7, opacity: 0, y: 100 }}
          animate={
            isInView
              ? { scale: 1, opacity: 1, y: 0 }
              : { scale: 0.7, opacity: 0, y: 100 }
          }
          transition={{ duration: 1.2, type: "spring" }}
          onAnimationComplete={() => setTimeout(() => setShowFace(true), 500)}
        >
          {/* Diya Oil with Reflection */}
          <motion.div
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-48 h-4 bg-yellow-200/60 rounded-full blur-sm"
            animate={{
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />

          {/* Diya Body */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-56 h-40 bg-gradient-to-b from-yellow-600 via-yellow-700 to-yellow-800 rounded-t-full shadow-2xl" />

          {/* Diya Base */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 h-10 bg-yellow-900 rounded-full shadow-xl" />

          {/* Enhanced Realistic Flame */}
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
            {/* Outer Glow */}
            <motion.div
              className="absolute -inset-12 bg-gradient-to-b from-yellow-200/30 via-orange-300/40 to-red-400/30 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Main Flame Container */}
            <motion.div
              className="relative w-16 h-40 lg:w-20 lg:h-48"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.9, 1, 0.9],
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Flame Shadow Layer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-red-500/60 via-orange-400/70 to-yellow-300/80 rounded-full blur-md"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Middle Flame Layer */}
              <motion.div
                className="absolute inset-1 bg-gradient-to-b from-orange-400/90 via-yellow-300/95 to-yellow-200 rounded-full blur-[1px]"
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Inner Flame Core */}
              <motion.div
                className="absolute inset-2 bg-gradient-to-b from-yellow-200 to-yellow-100 rounded-full"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.9, 1, 0.9],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Bright Center */}
              <motion.div
                className="absolute inset-3 bg-gradient-to-b from-white to-yellow-50 rounded-full blur-[1px]"
                animate={{
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Flame Tips - for realistic flicker effect */}
              <motion.div
                className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-6 bg-yellow-300 rounded-full blur-[2px]"
                animate={{
                  y: [0, -3, 0],
                  opacity: [0.7, 1, 0.7],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Face with 0.9 Transparency (less transparent) */}
              {showFace && (
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 0.9, // Increased to 0.9 transparency
                    y: [-2, 2, -2],
                  }}
                  transition={{
                    duration: 1,
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <img
                    src="/pics/1760768897776.jpg"
                    alt="My eternal flame"
                    className="w-full h-full object-cover"
                  />
                  {/* Reduced overlay opacity to make face more visible */}
                  <div className="absolute inset-0 bg-yellow-200/20 mix-blend-overlay" />
                </motion.div>
              )}
            </motion.div>

            {/* Small floating embers */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`ember-${i}`}
                className="absolute w-1 h-1 bg-yellow-300 rounded-full blur-[1px]"
                animate={{
                  y: [0, -15, 0],
                  x: [0, Math.random() * 10 - 5, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.7,
                  ease: "easeOut",
                }}
                style={{
                  left: `${50 + (Math.random() * 20 - 10)}%`,
                  bottom: "10%",
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Final Message with Typewriter */}
        <motion.div
          className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/60"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 50, scale: 0.9 }
          }
          transition={{ duration: 1, delay: 0.5 }}
        >
          <TypewriterText
            text="You are not just a part of my life; you are the light that makes my life worth living. Like this eternal diya flame, your love illuminates my darkest moments and guides me toward happiness. Every day with you feels like Diwali—filled with light, love, and the promise of forever. You are my greatest blessing, my constant joy, and the beautiful flame that will forever burn in my heart."
            delay={0.8}
          />

          <motion.p
            className="text-2xl lg:text-3xl text-orange-600 font-medium mt-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            Happy Diwali, my eternal flame 💖
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
