import React, { useState } from "react";
import "./TranslatorPage.css";
const TranslatorPage = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleTranslate = () => {
    // Dummy translation logic
    setOutput(`Translation of "${input}" to regional language`);
  };

  return (
    <div className="translator-container">
      <h2>Fruit Translator</h2>
      <input
        type="text"
        placeholder="Enter text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleTranslate}>Translate</button>
      <p>{output}</p>
    </div>
  );
};

export default TranslatorPage;
