import React, { useState, useEffect } from "react";
import "./App.css";
import ImageGenerator from "./components/ImageGenerator";
import ChatComponent from "./components/ChatComponent";
import RecipeGenerator from "./components/RecipeGenerator";

function App() {
  const [activetab, setActivetab] = useState("image-generator");

  const handleTabChange = (tab) => {
    //alert(tab);
    setActivetab(tab);
  };

  return (
    <div className="App">
      <button
        className={`tab-button ${
          activetab === "image-generator" ? "active" : ""
        }`}
        onClick={() => handleTabChange("image-generator")}
      >
        Image Generator
      </button>

      <button
        className={`tab-button ${activetab === "chat" ? "active" : ""}`}
        onClick={() => handleTabChange("chat")}
      >
        Chat
      </button>

      <button
        className={`tab-button ${
          activetab === "recipe-generator" ? "active" : ""
        }`}
        onClick={() => handleTabChange("recipe-generator")}
      >
        Recipe Generator
      </button>

      <div>{activetab === "image-generator" && <ImageGenerator/>}</div>
      <div>{activetab === "chat" && <ChatComponent/>}</div>
      <div>{activetab === "recipe-generator" && <RecipeGenerator/>}</div>
    </div>
  );
}

export default App;
