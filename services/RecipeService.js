import { API_BASE_URL } from "../config";
import axios from "axios";

export const getRecommendedRecepiesByName = async (name) => {
  const res = await axios
    .get(`${API_BASE_URL}/recipe/recommended/${name}`)
    .then((res) => {
      return res.data;
    });

  return res;
};
