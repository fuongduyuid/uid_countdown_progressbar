import axios from "axios";

const { REACT_APP_SERVER_URL_ENV } = process.env;
const ipAddress =
  process.env.NODE_ENV === "development"
    ? "localhost"
    : REACT_APP_SERVER_URL_ENV || "localhost";
const port = 3001;
axios.defaults.baseURL = `http://${ipAddress}:${port}/api/v1`;
