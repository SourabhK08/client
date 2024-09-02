import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LinkContainer from "react-router-bootstrap/LinkContainer";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import { auth } from "../firebase"; // Import Firebase auth
import { signOut } from "firebase/auth"; // Import signOut

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current route
  const user = auth.currentUser;

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login"); // Redirect to login page after logout
    } catch (error) {
      console.error("Logout error: ", error);
    }
  };

  // Check if the current route is login or sign-up
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/sign-up";

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <h6 className="text-light">Logo here</h6>

          <Nav className="ms-auto">
            {user && !isAuthPage ? (
              <>
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                  <Nav.Link>About Us</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contact">
                  <Nav.Link>Contact Us</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/policy">
                  <Nav.Link>Terms & Conditions</Nav.Link>
                </LinkContainer>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </>
            ) : (
              !isAuthPage && (
                <>
                  <LinkContainer to="/sign-up">
                    <Nav.Link>Sign Up</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                </>
              )
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
