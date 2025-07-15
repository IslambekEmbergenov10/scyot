import $api from "../request";

const login = async (username, password) => {
  const response = await $api.post("/api/v1/auth-user/login", { username, password });

  if (response.status === 200) {
    localStorage.setItem("token", response.data.access_token);
    localStorage.setItem("refresh_token", response.data.refresh_token);
  }

  return response.data;
};

const logout = async () => {
  const response = await $api.post("/auth/logout");

  if (response.status === 200) {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh_token");
  }

  return response.data;
  
};

const refreshToken = async () => {
  const response = await $api.post("/auth/refresh");

  if (response.status === 200) {
    localStorage.setItem("token", response.data.access_token);
  }
};

export { login, logout, refreshToken };





