import React, { useState } from "react";
import "../App.css";

function ChatComponent() {
  const [prompt, setPrompt] = useState("");
  const [chatResponse, setChatResponse] = useState("");

  const askAi = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/ask-ai?prompt=${prompt}`
      );
      const data = await response.text();
      console.log("Prompt entered", data);
      setChatResponse(data);
    } catch (error) {
      console.error("Error generating image: ", error);
    }
  };

  return (
    <div className="chat-component-container">
      <h2>Chat with AI</h2>
      <div className="chat-input-container">
        <input
          type="text"
          placeholder="Enter a prompt for the AI"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="chat-input"
        />
      </div>
      <div className="chat-button-container">
        <button className="chat-button" onClick={askAi}>
          Ask AI
        </button>
      </div>
      <div className="chat-output-container">
        <pre className="chat-response">{chatResponse}</pre>
      </div>
    </div>
  );
}

export default ChatComponent;
