import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import PreLoader from "./components/PreLoader";
import NavBar from "./components/NavBar";
import AboutUs from "./components/AboutUs";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 30);

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
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
