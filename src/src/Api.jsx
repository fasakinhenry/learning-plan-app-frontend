const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getPlan = async (day) => {
    const response = await axios.get(`${API_BASE_URL}/api/plan/${day}`);
    return response.data;
};

export const sendNotification = async (email, message) => {
    await axios.post(`${API_BASE_URL}/api/notify`, { email, message });
};
