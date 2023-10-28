import { MODEL_BASE_URL } from "../config";
import axios from "axios";

export const classifyImage = async (base64Image) => {
    const res = await axios
      .post(`${MODEL_BASE_URL}/classifyImage`, {
        headers: {
          "Content-Type": "application/json",
        },
        imagen: base64Image,
        scaleWidth: 0,
        scaleHeight: 0,
      })
      .then((res) => {
        return res.data;
      });
    
    return res;
  }