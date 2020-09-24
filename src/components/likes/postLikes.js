import axios from "axios";

const postLikes = async (id) => {
  const response = await axios.post(`
                https://obscure-river-28733.herokuapp.com/recipe/like/${id}
                `);
  return response;
};

export default postLikes;
