import Image from "next/image";
import { BtnArrow } from "./btn-arrow";

export async function IntroSection() {
  return (
    <section
      className="projects-section"
      style={{
        position: "relative",
        zIndex: 1,
        background: "var(--background)",
        paddingTop: 80,
        paddingBottom: 100,
      }}
    >
      {/* Headline */}
      <div
        className="section-padded"
        style={{
          position: "relative",
          zIndex: 5,
          paddingLeft: "clamp(24px, 15vw, 260px)",
          paddingRight: 32,
          marginBottom: 8,
          maxWidth: 1017 + 260,
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-zarathustra)",
            fontSize: 40,
            lineHeight: 1,
            color: "var(--foreground)",
            margin: 0,
            fontWeight: "normal",
          }}
        >
          AI can&rsquo;t build robots,{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #b3203d 0%, #d96b1d 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "inline",
            }}
          >
            but you can!
          </span>
        </h2>
      </div>

      {/* Subtext */}
      <div
        className="section-padded"
        style={{
          position: "relative",
          zIndex: 5,
          paddingLeft: "clamp(24px, 15vw, 260px)",
          paddingRight: 32,
          marginBottom: 40,
          maxWidth: 1279 + 260,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-phantom)",
            fontSize: 20,
            color: "var(--foreground)",
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          Build or design a robot (Raspberry Pi, ESP32, you name it), and we
          ship the parts and upgrades to keep it going!
        </p>
        <br></br>
        <p
          style={{
            fontFamily: "var(--font-phantom)",
            fontSize: 20,
            color: "var(--foreground)",
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          Never built a robot? Don&rsquo;t worry - there&rsquo;ll be a starter
          kit for beginners, think Blueprint Hackpad but for robotics
        </p>
      </div>

      {/* Downward wave — matches HeroSection wave height/amplitude */}
      <div
        className="wave-container"
        style={{
          position: "absolute",
          bottom: -40,
          left: 0,
          right: 0,
          lineHeight: 0,
          zIndex: 10,
          pointerEvents: "none",
        }}
      >
        {/* Back shadow layer — matches HeroSection shadow */}
        <svg
          viewBox="0 0 1920 40"
          preserveAspectRatio="none"
          style={{
            width: "100%",
            height: 40,
            display: "block",
            position: "absolute",
            bottom: 0,
          }}
        >
          <path
            d="M0,0 L0,8 C40,8 40,27 80,27 C120,27 120,8 160,8 C200,8 200,27 240,27 C280,27 280,8 320,8 C360,8 360,27 400,27 C440,27 440,8 480,8 C520,8 520,27 560,27 C600,27 600,8 640,8 C680,8 680,27 720,27 C760,27 760,8 800,8 C840,8 840,27 880,27 C920,27 920,8 960,8 C1000,8 1000,27 1040,27 C1080,27 1080,8 1120,8 C1160,8 1160,27 1200,27 C1240,27 1240,8 1280,8 C1320,8 1320,27 1360,27 C1400,27 1400,8 1440,8 C1480,8 1480,27 1520,27 C1560,27 1560,8 1600,8 C1640,8 1640,27 1680,27 C1720,27 1720,8 1760,8 C1800,8 1800,27 1840,27 C1880,27 1880,8 1920,8 L1920,0 Z"
            style={{ fill: "var(--background)" }}
          />
        </svg>
        {/* Main fill layer — 40px, amplitude 19px matching HeroSection */}
        <svg
          viewBox="0 0 1920 40"
          preserveAspectRatio="none"
          style={{ width: "100%", height: 40, display: "block" }}
        >
          <path
            d="M0,0 L0,8 C40,8 40,27 80,27 C120,27 120,8 160,8 C200,8 200,27 240,27 C280,27 280,8 320,8 C360,8 360,27 400,27 C440,27 440,8 480,8 C520,8 520,27 560,27 C600,27 600,8 640,8 C680,8 680,27 720,27 C760,27 760,8 800,8 C840,8 840,27 880,27 C920,27 920,8 960,8 C1000,8 1000,27 1040,27 C1080,27 1080,8 1120,8 C1160,8 1160,27 1200,27 C1240,27 1240,8 1280,8 C1320,8 1320,27 1360,27 C1400,27 1400,8 1440,8 C1480,8 1480,27 1520,27 C1560,27 1560,8 1600,8 C1640,8 1640,27 1680,27 C1720,27 1720,8 1760,8 C1800,8 1800,27 1840,27 C1880,27 1880,8 1920,8 L1920,0 Z"
            style={{ fill: "var(--background)" }}
          />
        </svg>
        {/* Thin stroke wave — same as HeroSection stroke, positioned at fill edge */}
        <svg
          viewBox="0 0 1920 22"
          preserveAspectRatio="none"
          style={{
            width: "100%",
            height: 22,
            display: "block",
            position: "absolute",
            top: 24,
            left: 0,
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,2 C40,2 40,18 80,18 C120,18 120,2 160,2 C200,2 200,18 240,18 C280,18 280,2 320,2 C360,2 360,18 400,18 C440,18 440,2 480,2 C520,2 520,18 560,18 C600,18 600,2 640,2 C680,2 680,18 720,18 C760,18 760,2 800,2 C840,2 840,18 880,18 C920,18 920,2 960,2 C1000,2 1000,18 1040,18 C1080,18 1080,2 1120,2 C1160,2 1160,18 1200,18 C1240,18 1240,2 1280,2 C1320,2 1320,18 1360,18 C1400,18 1400,2 1440,2 C1480,2 1480,18 1520,18 C1560,18 1560,2 1600,2 C1640,2 1640,18 1680,18 C1720,18 1720,2 1760,2 C1800,2 1800,18 1840,18 C1880,18 1880,2 1920,2"
            fill="none"
            style={{ stroke: "var(--background)" }}
            strokeWidth="2.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    </section>
  );
}
