import React from "react";
import { ImTwitter } from "react-icons/im";
import { RiFacebookCircleFill } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";
const IconGroup = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <a
        target="_blank"
        href="https://twitter.com/FACorreiaa"
        rel=" noopener noreferrer"
      >
        <ImTwitter color="rgb(0, 123, 255)" size="24px" />
      </a>
      <a
        target="_blank"
        href="https://www.facebook.com/Nandooo316"
        rel=" noopener noreferrer"
      >
        <RiFacebookCircleFill color="rgb(66,103,178)" size="24px" />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/fernando-correia-ab018079/"
        rel=" noopener noreferrer"
      >
        {" "}
        <SiLinkedin color="rbg(40,103,178)" size="24px" />
      </a>
      <a
        target="_blank"
        href="https://www.instagram.com/fernandotcorreia/"
        rel=" noopener noreferrer"
      >
        {" "}
        <FiInstagram colot="rbg(253,29,29)" size="24px" />
      </a>
    </div>
  );
};

export default IconGroup;
