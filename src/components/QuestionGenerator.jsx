import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./QuestionGenerator.css"; // Import the updated CSS file

function QuestionGenerator() {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [answers, setAnswers] = useState({});

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

      const data = await response.json(); // Expecting JSON response from server

      // Access the 'questions' field (adjust if the structure is different)
      const formattedQuestions = data.questions
        .split("\n")
        .filter((q) => q.trim());

      // Set questions with default MCQ options
      const questionsWithOptions = formattedQuestions.map((question) => ({
        question,
        options: ["Option A", "Option B", "Option C", "Option D"], // Default options for now
      }));

      setQuestions(questionsWithOptions);
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

  const handleAnswerChange = (questionIndex, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: answer,
    }));
  };

  const handleSubmitAnswers = () => {
    console.log("User answers:", answers);
    // You can send the user's answers to the server here
    toast.success("Answers submitted!");
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
        {questions.map((questionData, index) => (
          <div key={index}>
            <p>
              {index + 1}. {questionData.question}{" "}
              {/* Access questionData.question */}
            </p>
            <div>
              {questionData.options.map((option, optionIndex) => (
                <div key={optionIndex}>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    onChange={() => handleAnswerChange(index, option)}
                  />
                  {option}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {questions.length > 0 && (
        <button onClick={handleSubmitAnswers} className="submit-button">
          Submit Answers
        </button>
      )}
    </div>
  );
}

export default QuestionGenerator;
