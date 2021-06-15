import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav } from "react-bootstrap";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import icon from "./google.png";
import { actionTypes } from './../reducer';
import { useStateValue } from './../StateProvider'
import { auth, provider } from './../firebase';

function Header() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [{ user }, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      })
      .catch((err) => alert(err.message));
  };

  const signOut = () => {
    auth
      .signOut()
      .then((result) => {
        console.log("logged out");
        console.log("user after logging out", user);
        dispatch({
          type: actionTypes.SIGN_OUT,
          user: null,
        })
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="fixed-top">
      <Navbar bg="white" expand="lg">
        <Container>
          <Link to="/" className="text-reset text-decoration-none">
            <Navbar.Brand href="#">
              <AccountBalanceWalletIcon /> Kavya's Journal
            </Navbar.Brand>
          </Link>

          <Navbar id="basic-navbar-nav" className="d-flex justify-content-end">


            <Link to="/admin" className="text-reset text-decoration-none ">
              <Nav >
                {user?.email === "bhatnagarkavya16@gmail.com" &&
                  <Nav.Link className="text-muted" href="#home">Admin</Nav.Link>
                }
              </Nav>
            </Link>

            <Link to="/about" className="text-reset text-decoration-none ">
              <Nav >
                <Nav.Link className="text-muted" href="#home">About</Nav.Link>
              </Nav>
            </Link>


            {!user ? (
              <Nav >
                <Nav.Link className="text-muted" href="#home" onClick={handleShow}>Sign In</Nav.Link>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <img src={icon} alt="" height="30px" />
                  </Modal.Header>
                  <Modal.Body>Click on the button below to sign in!</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={signIn}>
                      Sign In
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Nav>
            ) : (
              <Nav.Link className="text-muted" href="#home" onClick={signOut}>Sign Out</Nav.Link>
            )}

          </Navbar>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
