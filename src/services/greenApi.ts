import axios from 'axios';

import API_URL from '../consts/api';

type SendMessageParams = {
  chatId: string;
  message: string;
};

export const sendMessage = async (
  { chatId, message }: SendMessageParams,
  idInstance: string,
  apiTokenInstance: string
) => {
  try {
    const response = await axios.post(
      `${API_URL}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
      {
        chatId,
        message,
      }
    );

    return response.data;
  } catch (e) {
    throw e;
  }
};

export const receiveNotification = async (
  idInstance: string,
  apiTokenInstance: string
) => {
  try {
    const response = await axios.get(
      `${API_URL}/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`,
    );

    return response.data;
  } catch (e) {
    throw e;
  }
};

export const deleteNotification = async (
  receiptId: number,
  idInstance: string,
  apiTokenInstance: string
) => {
  try {
    const response = await axios.delete(
      `${API_URL}/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`,
    );

    if (!response.data) return;
    return response.data;
  } catch (e) {
    throw e;
  }
};