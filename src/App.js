import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import PreLoader from "./components/PreLoader";
import NavBar from "./components/NavBar";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Policy from "./components/Policy";
import Footer from "./components/Footer";
import SignUpForm from "./components/SignUpForm";
import Login from "./components/Login";
import VideoUploader from "./components/VideoUploader";
import QuestionGenerator from "./components/QuestionGenerator";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 30); // This is a very short delay; adjust as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PreLoader />
        </div>
      ) : (
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/about"
              element={
                <Container>
                  <AboutUs />
                </Container>
              }
            />
            <Route
              path="/contact"
              element={
                <Container>
                  <ContactUs />
                </Container>
              }
            />
            <Route
              path="/policy"
              element={
                <Container>
                  <Policy />
                </Container>
              }
            />
            <Route
              path="/sign-up"
              element={
                <Container>
                  <SignUpForm />
                </Container>
              }
            />
            <Route
              path="/login"
              element={
                <Container>
                  <Login />
                </Container>
              }
            />

            <Route
              path="/video"
              element={
                <Container>
                  <VideoUploader />
                </Container>
              }
            />

            <Route
              path="/"
              element={
                <Container>
                  <QuestionGenerator />
                </Container>
              }
            />
          </Routes>

          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
