import React, { useState } from "react";
import "../App.css";

function ImageGenerator() {
  const [prompt, setPrompt] = useState(""); 
  const [imageUrls, setImageUrls] = useState([]); 

  const generateImage = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/generate-image?prompt=${prompt}`
      );
      const data = await response.json();
      if (Array.isArray(data)) {
        console.log("Generated image URLs:", data);
        setImageUrls(data);
      } else {
        console.error("Error: response is not an array", data);
      }
    } catch (error) {
      console.error("Error generating image: ", error);
    }
  };

  return (
    <div className="image-generator-container">
      <h2>Image Generator</h2>
      <div className="prompt-input-container">
        <input
          type="text"
          placeholder="Enter a prompt for image"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="prompt-input"
        />
      </div>
      <div className="button-container">
        <button className="generate-button" onClick={generateImage}>
          Generate Image
        </button>
      </div>
      <div className="image-container">
        {imageUrls.map((url, index) => (
          <div key={index} className="image-card">
            <img src={url} alt={`Generated Image ${index + 1}`} />
          </div>
        ))}
        {[...Array(3 - imageUrls.length)].map((_, index) => (
          <div key={index + imageUrls.length} className="empty-image-slot">
            <span>Waiting for image...</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGenerator;
