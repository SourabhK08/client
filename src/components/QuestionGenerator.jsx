import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./QuestionGenerator.css"; // Import the updated CSS file

function QuestionGenerator() {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const [answers, setAnswers] = useState({}); // Track user's answers
  const [mcqQuestionObject, setMcqQuestionObject] = useState([]);
  const [showGeneratedText, setShowGeneratedText] = useState(false); // Control generated text visibility

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

      const data = await response.json(); // expecting JSON response from server

      // Removing any numbering from open-ended questions
      const formattedQuestions = data.questions
        .split("\n")
        .map((q) => q.replace(/^\d+\.\s*/, "")) // Remove leading numbers
        .filter((q) => q.trim()); // Filter out empty strings

      // Parsing MCQs and answers
      const mcQuestions = data.mcq.split("\n").filter((q) => q.trim());
      let mcqQuestionObject = [];
      for (let i = 0; i < mcQuestions.length; i++) {
        let question = mcQuestions[i];
        let options = [
            mcQuestions[i + 1],
            mcQuestions[i + 2],
            mcQuestions[i + 3],
            mcQuestions[i + 4],
          ],
          ans = mcQuestions[i + 5];
        i += 5;

        mcqQuestionObject.push({
          question: question,
          options: options,
          answer: ans,
        });
      }

      console.log("MCQs:", mcqQuestionObject);

      setMcqQuestionObject(mcqQuestionObject);
      setQuestions(formattedQuestions);
      setShowGeneratedText(true); // Display the text after generating questions
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

      {/* Display generated text after button click */}
      {showGeneratedText && (
        <>
          <h2>Generated Open Ended Questions:</h2>
          <div id="questions-output" className="questions-output">
            {questions.map((questionData, index) => (
              <div key={index}>
                <p>
                  {index + 1}. {questionData} {/* Simple numbering, no "Q" */}
                </p>
              </div>
            ))}
          </div>

          <h2>Generated MCQs:</h2>
          <div id="mcq-output" className="questions-output">
            {mcqQuestionObject.map((questionData, index) => (
              <div key={index}>
                <p>
                  {index + 1}. {questionData.question}
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

          {/* Submit Button for Answers */}
          {questions.length > 0 && (
            <button onClick={handleSubmitAnswers} className="submit-button">
              Submit Answers
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default QuestionGenerator;
