import React, { useState } from "react";

function QuestionGenerator() {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [questions, setQuestions] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerateQuestions = async () => {
    if (!youtubeUrl) {
      alert("Please enter a YouTube URL.");
      return;
    }

    setLoading(true);
    setError("");

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
      setQuestions(data);
    } catch (error) {
      console.error("Error:", error);
      setError(
        "An error occurred while generating the questions. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>YouTube Transcript and Question Generator</h1>
      <input
        type="text"
        value={youtubeUrl}
        onChange={(e) => setYoutubeUrl(e.target.value)}
        placeholder="Enter YouTube URL"
      />
      <button onClick={handleGenerateQuestions} disabled={loading}>
        {loading ? "Generating..." : "Generate Questions"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <h2>Generated Questions:</h2>
      <div id="questions-output">
        <pre>{questions}</pre>
      </div>
    </div>
  );
}

export default QuestionGenerator;
