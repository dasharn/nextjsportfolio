import React, { useEffect, useState } from "react";
import Terminal from "../components/Terminal";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [text, setText] = useState("");
  const phrases = [ "Welcome to my coding website","type help to start","Feel free to explore"];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  useEffect(() => {
    const typeText = () => {
      const currentPhrase = phrases[phraseIndex];
      if (isDeleting) {
        setText(currentPhrase.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setText(currentPhrase.substring(0, charIndex + 1));
        charIndex++;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => {
          isDeleting = true;
        }, 1000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }

      const typingSpeed = isDeleting ? 50 : 150; // Adjust the typing speed here
      setTimeout(typeText, typingSpeed);
    };

    typeText();
  }, []);

  return (
    <div className={styles.container}>
      <h1>
        Dasharn:$ <span className={styles.help}>{text}</span>
      </h1>

      <Terminal />

      {/* The rest of your code... */}
    </div>
  );
}