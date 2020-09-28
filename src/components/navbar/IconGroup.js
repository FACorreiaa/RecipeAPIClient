import React from "react";
import { ImTwitter } from "react-icons/im";
import { RiFacebookCircleFill } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";
const IconGroup = () => {
  return (
    <div
      style={{
        color: "#FFFFFF",
        fontSize: "large",
        fontFamily: "roboto",
        textAlign: "left",
      }}
    >
      {" "}
      Follow me on Social media: &nbsp;&nbsp;
      <a
        target="_blank"
        href="https://twitter.com/FACorreiaa"
        rel=" noopener noreferrer"
      >
        <ImTwitter color="#ffffff" size="24px" />
      </a>
      <a
        target="_blank"
        href="https://www.facebook.com/Nandooo316"
        rel=" noopener noreferrer"
      >
        <RiFacebookCircleFill color="#ffffff" size="24px" />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/fernando-correia-ab018079/"
        rel=" noopener noreferrer"
      >
        {" "}
        <SiLinkedin color="#ffffff" size="24px" />
      </a>
      <a
        target="_blank"
        href="https://www.instagram.com/fernandotcorreia/"
        rel=" noopener noreferrer"
      >
        {" "}
        <FiInstagram color="#ffffff" size="24px" />
      </a>
    </div>
  );
};

export default IconGroup;
