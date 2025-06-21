import { useEffect, useState } from "react";

const AutoTypingText = ({ texts, speed = 150, pause = 1000 }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const currentText = texts[textIndex];

    let timeout;

    if (!isDeleting && charIndex <= currentText.length) {
      setDisplayedText(currentText.slice(0, charIndex));
      timeout = setTimeout(() => setCharIndex(charIndex + 1), speed);
    } else if (isDeleting && charIndex >= 0) {
      setDisplayedText(currentText.slice(0, charIndex));
      timeout = setTimeout(() => setCharIndex(charIndex - 1), speed / 2);
    }

    if (charIndex === currentText.length && !isDeleting) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    }

    if (charIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, speed, pause]);

  return <span>{displayedText}<span className="blinking-cursor">|</span></span>;
};

export default AutoTypingText;
