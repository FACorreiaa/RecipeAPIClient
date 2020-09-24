import React from "react";
import { BsHeart } from "react-icons/bs";
import useLikes from "./useLikes.js";

const Likes = ({ id }) => {
  const likes = useLikes(id);
  return (
    <BsHeart
      likes={id}
      color="red"
      size={18}
      onClick={() => console.log(likes)}
    />
  );
};

export default Likes;
