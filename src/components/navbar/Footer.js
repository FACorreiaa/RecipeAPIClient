import React from "react";
import Navbar from "react-bootstrap/Navbar";

import IconGroup from "./IconGroup";
const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="bottom">
      <IconGroup />
    </Navbar>
  );
};

export default Footer;
