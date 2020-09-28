import React from "react";
import Navbar from "react-bootstrap/Navbar";
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
      <div>
        <IconGroup />
      </div>
    </Navbar>
  );
};

export default CustomNavDesktop;
