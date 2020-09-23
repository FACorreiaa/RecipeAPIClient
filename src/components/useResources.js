import { useState, useEffect } from "react";
import axios from "axios";

const useResources = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://peaceful-cove-64859.herokuapp.com/recipe"
      );

      setResources(response.data);
    })();
  }, []);

  return resources;
};

export default useResources;
