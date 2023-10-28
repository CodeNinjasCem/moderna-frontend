import { API_BASE_URL } from "../config";
import axios from "axios";

export const getPopularProducts = async () => {
  const res = await axios.get(`${API_BASE_URL}/product/getAll`).then((res) => {
    return res.data.data.products;
  });

  return res;
};
