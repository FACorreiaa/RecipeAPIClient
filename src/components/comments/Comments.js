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
      variant="dark"
      size="lg"
    >
      Submit comment
    </Button>
  );
};

export default CommentsButton;
