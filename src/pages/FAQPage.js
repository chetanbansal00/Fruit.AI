import React, { useState } from "react";
import "./FAQPage.css";
const initialFAQs = [
  { id: 1, question: "What is an apple?", answer: "An apple is a fruit." },
  { id: 2, question: "What is a banana?", answer: "A banana is a fruit." },
];

const FAQPage = () => {
  const [faqs, setFaqs] = useState(initialFAQs);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");

  const addFaq = () => {
    setFaqs([...faqs, { id: faqs.length + 1, question: newQuestion, answer: newAnswer }]);
    setNewQuestion("");
    setNewAnswer("");
  };

  return (
    <div className="faq-container">
      <h2>FAQs</h2>
      {faqs.map((faq) => (
        <div key={faq.id}>
          <h4>{faq.question}</h4>
          <p>{faq.answer}</p>
        </div>
      ))}
      <input
        type="text"
        placeholder="New Question"
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
      />
      <input
        type="text"
        placeholder="New Answer"
        value={newAnswer}
        onChange={(e) => setNewAnswer(e.target.value)}
      />
      <button onClick={addFaq}>Add FAQ</button>
    </div>
  );
};

export default FAQPage;
