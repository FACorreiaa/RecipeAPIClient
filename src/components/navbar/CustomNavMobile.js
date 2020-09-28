import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import IconGroup from "./IconGroup";
const CustomNavDesktop = () => {
  return (
    <Navbar
      variant="dark"
      expand="lg"
      style={{ textAlign: "center", backgroundColor: "#272727" }}
    >
      <Navbar.Brand
        href="#home"
        style={{
          color: "#ffffff",
          fontSize: "x-large",
          fontFamily: "roboto",
          textAlign: "center",
        }}
      >
        Recipe List
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        style={{ color: "#ffffff" }}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <IconGroup />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavDesktop;
