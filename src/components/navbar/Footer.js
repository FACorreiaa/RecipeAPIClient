import React from "react";
import { ImTwitter } from "react-icons/im";
import { RiFacebookCircleFill } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import IconGroup from "./IconGroup";
const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="bottom">
      <IconGroup />
    </Navbar>
  );
};

export default Footer;
