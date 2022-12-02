import axios from 'axios';

export const getAllReports = async () => {
    const { data } = await axios.get(`/reports`);
    return data;
};

export const getReportById = async (id) => {
    const { data } = await axios.get(`/reports/${id}`);
    return data;
};

export const getReportByUserId = async (id) => {
    const { data } = await axios.get(`/reports/user/${id}`);
    return data;
};

export const addReport = async (orderId, userId, content) => {
    const { data } = await axios.post(`/reports`, {
        orderId,
        userId,
        content
    });
    return data;
};

export const updateReport = async ({ id, orderId, userId, content, status }) => {
    const { data } = await axios.put(`/reports/${id}`, {
        orderId,
        userId,
        content,
        status
    });
    return data;
};

export const deleteReport = async (id) => {
    const { data } = await axios.delete(`/reports/${id}`);
    return data;
};