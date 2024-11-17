import { useEffect, useState } from "react";
import "./Hero.css";

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Learn", "Grow", "Achieve"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length); // Cycle through words
    }, 4500); // Change word every 4 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [words.length]);

  return (
    <div className="hero_main_container">
      <div className="headlines_container">
        <div className="headline">
          <span className={`word_1  ${currentWord === 0 ? "active" : ""}`}>
            {words[0]}
          </span>
          <span className={`word_2  ${currentWord === 1 ? "active" : ""}`}>
            {words[1]}
          </span>
          <span className={`word_3  ${currentWord === 2 ? "active" : ""}`}>
            {words[2]}
          </span>
          <span className="with">with EduNova</span>
        </div>
        <p className="subheadline">
          An innovative learning platform designed for modern education. Access
          interactive courses, personalized learning paths, and real-time
          analytics to boost your learning experience.
        </p>
      </div>
      <div className="cta_buttons">
        <button className="cta_button">Start Learning Today</button>
      </div>
    </div>
  );
}
