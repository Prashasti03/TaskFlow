import api from "./api";

export const checkBackendHealth = () => {
  return api.get("/health");
};