import axios from "axios";

const postComments = async (id, body) => {
  console.log("body", body);
  if (!body) return;
  const response = await axios.post(
    `https://obscure-river-28733.herokuapp.com/recipe/comment/${id}`,
    body
  );
  return response;
};

export default postComments;
