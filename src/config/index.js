require("dotenv").config();

const appConfig = {
  appUrl: "https://car-rental-api-zrfp.onrender.com",
  token: localStorage.getItem("token") || "",
  authToken: () => localStorage.getItem("token") || "",
};
export default appConfig;
