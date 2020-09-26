import React from "react";
import Navbar from "react-bootstrap/Navbar";
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
    </Navbar>
  );
};

export default CustomNavDesktop;
