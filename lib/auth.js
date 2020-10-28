import axios from "axios";

axios.defaults.withCredentials = true;

export const LoginUser = async ({ email, password }) => {
  const { data } = await axios.post("/api/login", { email, password });
  console.log(data);
};

export const GetUserProfile = async () => {
  const { data } = await axios.get("api/profile");
  return data;
};
