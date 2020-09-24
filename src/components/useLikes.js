import { useState, useEffect } from "react";
import axios from "axios";

const useLikes = (id) => {
  const [like, setLike] = useState();

  useEffect(() => {
    (async (id) => {
      console.log(id);
      if (!id) return;
      const response = await axios.post(`
                https://obscure-river-28733.herokuapp.com/recipe/like/${id}
                `);
      setLike(response.data);
    })(like);
  }, [id]);
  console.log("like" + like);

  return like;
};

export default useLikes;
