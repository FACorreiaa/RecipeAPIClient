import React, { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import postLikes from "./postLikes.js";

const Likes = ({ id, value }) => {
  const render = function () {
    if (value > 0)
      return (
        <BsHeartFill
          likes={id}
          color="red"
          size={18}
          onClick={() => postLikes(id)}
        />
      );
    else
      return (
        <BsHeartFill
          likes={id}
          color="red"
          size={18}
          onClick={() => postLikes(id)}
        />
      );
  };
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
