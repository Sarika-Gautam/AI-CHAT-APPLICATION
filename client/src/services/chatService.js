import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/chat`;

export const createChat = (token) => {
  return axios.post(
    API,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getChats = (token) => {
  return axios.get(API, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getSingleChat = (token, chatId) => {
  return axios.get(`${API}/${chatId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const sendMessage = (token, chatId, content) => {
  return axios.post(
    `${API}/message`,
    { chatId, content },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const deleteChat = (token, chatId) => {
  return axios.delete(`${API}/${chatId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};