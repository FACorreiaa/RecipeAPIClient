import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import IconGroup from "./IconGroup";
const CustomNavDesktop = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      style={{ textAlign: "center" }}
    >
      <Navbar.Brand
        href="#home"
        style={{
          color: "white",
          fontSize: "x-large",
          fontFamily: "roboto",
          textAlign: "center",
        }}
      >
        React-Bootstrap
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <IconGroup />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavDesktop;
