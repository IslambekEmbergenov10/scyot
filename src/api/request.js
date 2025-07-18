import axios from "axios";

import BASE_URL from "../constants/url";
const $api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default $api;
