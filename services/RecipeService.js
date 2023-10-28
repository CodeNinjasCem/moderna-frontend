import { API_BASE_URL } from "../config";
import axios from "axios";

export const getRecommendedRecepiesByName = async (name) => {
  const res = await axios
    .get(`${API_BASE_URL}/recipe/recommended/${name}`)
    .then((res) => {
      return res.data.data;
    });

  return res;
};

export const getPopularRecepies = async () => {
  const res = await axios
    .get(`${API_BASE_URL}/recipe/popular`)
    .then((res) => {
      return res.data.data;
    });

  return res;
};
