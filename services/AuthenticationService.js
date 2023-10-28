import { API_BASE_URL } from "../config";
import axios from "axios";

export const signUp = async (signUpData) => {
  const res = await axios
    .post(`${API_BASE_URL}/auth/signup`, {
      email: signUpData.email,
      password: signUpData.password,
      first_name: signUpData.firstName,
      last_name: signUpData.lastName,
      gender: "male",
      role: "subscriber",
    })
    .then((res) => {
      return res.message;
    });

  return res;
};

export const signIn = async (signInData) => {
  const res = await axios
  .post(`${API_BASE_URL}/auth/signin`, {
    email: signInData.email,
    password: signInData.password,
  })
  .then((res) => {
    return res;
  });

  return res;
};

export const verifyToken = async ({email, token}) => {
  const res = await axios
    .post(
      `${API_BASE_URL}/auth/verify`,

      {
        "email": email,
        "verify_code": token
      }
    )
    .then((res) => {
      return res.message;
    });

  return res;
};
