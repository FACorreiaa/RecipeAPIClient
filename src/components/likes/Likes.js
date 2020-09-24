import React from "react";
import { BsHeartFill } from "react-icons/bs";

import postLikes from "./postLikes.js";
const Likes = ({ id, value }) => {
  return (
    <BsHeartFill
      likes={id}
      color="red"
      size={18}
      onClick={() => postLikes(id)}
    />
  );
};

export default Likes;
