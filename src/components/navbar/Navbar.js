import React from "react";
import { ImTwitter } from "react-icons/im";
import { RiFacebookCircleFill } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { useMediaQuery } from "@react-hook/media-query";
import IconGroup from "./IconGroup";
const CustomNav = () => {
  const matches = useMediaQuery("only screen and (max-width: 420px)");

  return (
    /*
    
    <Container>
      <Navbar bg="dark" variant="dark" expand="md">
        <Navbar.Brand href="">
          <img
            alt=""
            src="/logo192.png"
            width="48"
            height="48"
            className="d-inline-block align-top"
          />{" "}
          Recipe List
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{ textAlign: "right" }}
        >
          <Nav style={{ textAlign: "right" }}>
            <IconGroup />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
    */
    <>
      {matches ? (
        <Container>
          <Navbar bg="dark" variant="dark" expand="md">
            <Navbar.Brand href="">
              <img
                alt=""
                src="/logo192.png"
                width="48"
                height="48"
                className="d-inline-block align-top"
              />{" "}
              Recipe List
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              style={{ textAlign: "right" }}
            >
              <Nav style={{ textAlign: "right" }}>
                <IconGroup />
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      ) : (
        <Container>
          <div>Recipe List</div>
          <IconGroup />
        </Container>
      )}
    </>
  );
};

export default CustomNav;
