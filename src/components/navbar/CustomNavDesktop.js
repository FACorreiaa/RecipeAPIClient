import React from "react";
import Navbar from "react-bootstrap/Navbar";
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
        Recipe List
      </Navbar.Brand>
      <div>
        <IconGroup />
      </div>
    </Navbar>
  );
};

export default CustomNavDesktop;
