import "./App.css";
import { Container } from "react-bootstrap";
import { Route, Routes, useLocation } from "react-router-dom";
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
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // Get the current route

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 30);

    return () => clearTimeout(timer);
  }, []);

  // Check if the current route is login or sign-up
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/sign-up";

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
        <>
          {!isAuthPage && <NavBar />}{" "}
          {/* Render NavBar only if not on login or sign-up page */}
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
                <PrivateRoute>
                  <Container>
                    <VideoUploader />
                  </Container>
                </PrivateRoute>
              }
            />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Container>
                    <QuestionGenerator />
                  </Container>
                </PrivateRoute>
              }
            />
          </Routes>
          {!isAuthPage && <Footer />}{" "}
          {/* Render Footer only if not on login or sign-up page */}
        </>
      )}
    </>
  );
}

export default App;
