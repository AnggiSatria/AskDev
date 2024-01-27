import axios from "axios";

export const API = axios.create({
  baseURL:
    process.env.REACT_APP_SERVER_URL ||
    "https://smiling-handbag-crab.cyclic.cloud/api/v1/",
});

export const API2 = axios.create({
  baseURL:
    process.env.REACT_APP_SERVER_URL ||
    "https://rawg-video-games-database.p.rapidapi.com/",
});

export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};
