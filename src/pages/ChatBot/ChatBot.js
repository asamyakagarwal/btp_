import React, { useState } from 'react';
import './ChatBot.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // gpt wale
//   const API_URL = "https://api.openai.com/v1/chat/completions";
//   const API_KEY = "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";


// lamma walae
  const API_URL = "https://api.llama-api.com/chat/completions";
  const API_KEY = "LA-3a09ecdf21e941e7a854c304f0717205d1d9f4ed053549c5a4137318f8f63d35";

  const appendMessage = (sender, message) => {
    setMessages(prevMessages => [...prevMessages, { sender, text: message }]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    setIsLoading(true);
    const userInput = input.trim();
    setInput("");
    appendMessage("user", userInput);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            ...messages.map(msg => ({
              role: msg.sender === "user" ? "user" : "assistant",
              content: msg.text
            })),
            { role: "user", content: userInput }
          ],
          temperature: 0.7,
          max_tokens: 150,
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error?.message || `HTTP error! status: ${response.status}`);
      }

      const botMessage = data.choices[0]?.message?.content;
      if (botMessage) {
        appendMessage("bot", botMessage);
      } else {
        throw new Error("No response content");
      }
    } catch (error) {
      console.error("Error:", error);
      appendMessage("bot", `Error: ${error.message || "Something went wrong. Please try again."}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    
    <div className="chat-container">
        <Navbar/>
      <div className="chat-header">
        <h1>Chat with Us</h1>
      </div>

      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`message ${msg.sender === "user" ? "user-message" : "bot-message"}`}
          >
            {msg.text}
          </div>
        ))}
        {isLoading && (
          <div className="message bot-message">
            Thinking...
          </div>
        )}
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          disabled={isLoading}
        />
        <button
          onClick={sendMessage}
          disabled={isLoading}
        >
          Send
        </button>
      </div>

      <Footer/>
    </div>
  );
};

export default ChatBot;