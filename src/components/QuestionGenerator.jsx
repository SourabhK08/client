import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./QuestionGenerator.css"; // Import the updated CSS file

function QuestionGenerator() {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const isValidYoutubeUrl = (url) => {
    const youtubeRegex =
      /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
    return youtubeRegex.test(url);
  };

  const handleGenerateQuestions = async () => {
    if (!youtubeUrl) {
      toast.error("Please enter a YouTube URL.");
      return;
    }

    if (!isValidYoutubeUrl(youtubeUrl)) {
      toast.error("Invalid YouTube URL. Please enter a valid YouTube link.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:8000/generate-transcript",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ youtube_url: youtubeUrl }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to generate questions.");
      }

      const data = await response.json();
      const formattedQuestions = data.split("\n").filter((q) => q.trim());
      setQuestions(formattedQuestions);
      toast.success("Questions generated successfully!");
    } catch (error) {
      console.error("Error:", error);
      toast.error(
        "An error occurred while generating the questions. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <ToastContainer />
      <h1>YouTube Transcript and Question Generator</h1>
      <input
        type="text"
        value={youtubeUrl}
        onChange={(e) => setYoutubeUrl(e.target.value)}
        placeholder="Enter YouTube URL"
        className="input-url"
      />
      <button
        onClick={handleGenerateQuestions}
        disabled={loading}
        className="generate-button"
      >
        {loading ? "Generating..." : "Generate Questions"}
      </button>
      <h2>Generated Questions:</h2>
      <div id="questions-output" className="questions-output">
        {questions.map((question, index) => (
          <p>{question}</p>
          // <p key={index}>
          //   {index + 1}. {question}
          // </p>
        ))}
      </div>
    </div>
  );
}

export default QuestionGenerator;
