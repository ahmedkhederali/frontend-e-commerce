import axios from 'axios';

export const getAllOrders = async () => {
    const { data } = await axios.get(`/orders`);
    return data;
};

export const getOrderById = async (id) => {
    const { data } = await axios.get(`/orders/${id}`);
    return data;
};

export const getOrdersByStatus = async (status) => {
    const { data } = await axios.get(`/orders/status/${status}`);
    return data;
};

export const getOrdersByUserId = async (id) => {
    const { data } = await axios.get(`/orders/user/${id}`);
    return data;
};

export const addOrder = async (products, buyer, address,productsWithAmount) => {
    const { data } = await axios.post(`/orders`, {
        products,
        buyer,
        address,
        productsWithAmount
    });
    return data;
};

export const updateOrderStatus = async (id, status, prepare, onWay, delivered, cancel) => {
    const { data } = await axios.put(`/orders/${id}`, {
        status,
        prepare,
        onWay,
        delivered,
        cancel
    });
    return data;
};

export const deleteOrder = async (id) => {
    const { data } = await axios.delete(`/orders/${id}`);
    return data;
};