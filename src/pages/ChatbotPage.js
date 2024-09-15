import React, { useState } from "react";
import "./ChatbotPage.css";
const fruits = [
  { id: 1, name: "Apple", details: "Apples are nutritious fruits." },
  { id: 2, name: "Banana", details: "Bananas are a good source of potassium." },
  { id: 3, name: "Orange", details: "Oranges are rich in Vitamin C." },
];

const ChatbotPage = () => {
  const [selectedFruit, setSelectedFruit] = useState(null);

  return (
    <div className="chatbot-container">
      <h2>Fruit Chatbot</h2>
      <div className="fruit-list">
        {fruits.map((fruit) => (
          <div key={fruit.id} onClick={() => setSelectedFruit(fruit)}>
            <h3>{fruit.name}</h3>
          </div>
        ))}
      </div>
      {selectedFruit && (
        <div className="fruit-details">
          <h3>{selectedFruit.name}</h3>
          <p>{selectedFruit.details}</p>
        </div>
      )}
    </div>
  );
};

export default ChatbotPage;
