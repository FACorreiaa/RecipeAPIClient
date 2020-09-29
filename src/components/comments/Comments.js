import React from "react";
import postComments from "./postComments.js";
import Button from "react-bootstrap/Button";

const CommentsButton = ({ id, body }) => {
  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        postComments(id, body);
      }}
      style={{
        color: "#FFFFFF",
        backgroundColor: "rgb(60, 64, 67)",
      }}
      size="lg"
      variant="outline-none"
    >
      Submit comment
    </Button>
  );
};

export default CommentsButton;
