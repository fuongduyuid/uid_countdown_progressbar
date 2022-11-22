import axios from "axios";

const getReport = async () => {
  const result = await axios.get("/orders");
  return result.data;
};

export { getReport };
