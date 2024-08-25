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

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

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
                  {" "}
                  {/* Container is used to wrap components */}
                  <AboutUs />
                </Container>
              }
            ></Route>

            <Route
              path="/contact"
              element={
                <Container>
                  <ContactUs />
                </Container>
              }
            ></Route>

            <Route
              path="/policy"
              element={
                <Container>
                  <Policy />
                </Container>
              }
            ></Route>
          </Routes>

          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
