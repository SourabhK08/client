import React, { useState } from "react";

const VideoUploader = () => {
  const [videoBase64, setVideoBase64] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      // Read the file as a data URL
      reader.readAsDataURL(file);

      reader.onload = () => {
        const base64Video = reader.result;

        setVideoBase64(base64Video); // Set the Base64 video string to state
        console.log("Base64 video:", base64Video);

        // Generate the preview image from the video
        createPreviewImage(base64Video);
      };

      reader.onerror = (error) => {
        console.error("Error reading file:", error);
      };
    } else {
      console.error("No file selected");
    }
  };

  const createPreviewImage = (base64Video) => {
    const videoElement = document.createElement("video");
    videoElement.src = base64Video;

    videoElement.onloadeddata = () => {
      // Set the canvas size to match the video dimensions
      const canvas = document.createElement("canvas");
      canvas.width = videoElement.videoWidth;
      canvas.height = videoElement.videoHeight;

      // Draw the video frame onto the canvas
      const ctx = canvas.getContext("2d");
      ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

      // Convert the canvas to a Base64 image
      const base64Image = canvas.toDataURL("image/png");
      setPreviewImage(base64Image); // Set the preview image to state
    };

    videoElement.currentTime = 5; // Seek to 5 seconds in the video for the preview image
  };

  const handleSubmit = async () => {
    if (!videoBase64) {
      console.error("No video available for submission.");
      return;
    }

    try {
      // Sending the Base64 video data to the server
      const response = await fetch("http://localhost:8000/generate-questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ videoBase64 }),
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error uploading video:", error);
    }
  };

  return (
    <div>
      <h1>Upload a Video</h1>
      <input type="file" accept="video/*" onChange={handleVideoUpload} />
      {previewImage && (
        <div>
          <h2>Preview Image</h2>
          <img src={previewImage} alt="Preview" />
        </div>
      )}
      <button onClick={handleSubmit}>Submit Video</button>
    </div>
  );
};

export default VideoUploader;
