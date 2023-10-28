import { MODEL_BASE_URL } from "../config";
import axios from "axios";

export const signUp = async (signUpData) => {
  signUpBody = {
    email: signUpData.email,
    password: signUpData.password,
    name: signUpData.name,
    lastName: signUpData.lastName,
    phone: signUpData.phone,
    address: signUpData.address,
  };

  const res = await axios
    .post(`${MODEL_BASE_URL}/auth/signup`, {
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        signUpBody,
      },
    })
    .then((res) => {
      return res.message;
    });

  return res;
};

export const signIn = async (signInData) => {
  signInBody = {
    email: signInData.email,
    password: signInData.password,
  };

  const res = await axios
    .post(`${MODEL_BASE_URL}/auth/signin`, {
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        signInBody,
      },
    })
    .then((res) => {
      return res.message;
    });

  return res;
};

export const verifyToken = async (token) => {
  const res = await axios
    .post(`${MODEL_BASE_URL}/auth/verify`, {
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        token,
      },
    })
    .then((res) => {
      return res.message;
    });

  return res;
};
