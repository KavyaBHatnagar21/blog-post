import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav } from "react-bootstrap";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="fixed-top">
      <Navbar bg="white" expand="lg">
        <Container>
          <Link to="/" className="text-reset text-decoration-none">
            <Navbar.Brand href="#">
              <AccountBalanceWalletIcon /> Kavya's Journal
            </Navbar.Brand>
          </Link>
          <div className="d-flex justify-content-end ">
            <Link to="/admin" className="text-reset text-decoration-none ">
              <Nav >
                <Nav.Link className="text-muted" href="#home">Admin</Nav.Link>
              </Nav>
            </Link>
            <Link to="/about" className="text-reset text-decoration-none ">
              <Nav >
                <Nav.Link className="text-muted" href="#home">About</Nav.Link>
              </Nav>
            </Link>
            <Link to="/login" className="text-reset text-decoration-none">
              <Nav >
                <Nav.Link className="text-muted" href="#home">Sign In</Nav.Link>
              </Nav>
            </Link>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
