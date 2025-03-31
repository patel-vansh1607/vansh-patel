import { useState, useEffect } from "react";
import "../styles/TypeWriter.css"

const Typewriter = ({ texts, period = 2000 }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(200);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      setText((prev) =>
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );
      
      setTypingSpeed(isDeleting ? 100 : 200 - Math.random() * 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), period);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, texts, period]);

  return (
    <h1>
      <a href="#" className="typewrite">
        <span className="wrap">{text}</span>
      </a>
    </h1>
  );
};

const TypeWriterr = () => {
  return <Typewriter texts={["Hi, I'm Si.", "I am Creative.", "I Love Design.", "I Love to Develop."]} period={2000} />;
};

export default TypeWriterr;
