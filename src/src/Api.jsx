import axios from 'axios';

export const getPlan = async (day) => {
  const response = await axios.get(`/api/plan/${day}`);
  return response.data;
};

export const sendNotification = async (email, message) => {
  await axios.post('/api/notify', { email, message });
};
