import axios from 'axios';

export const getAllRatings = async () => {
    const { data } = await axios.get(`/ratings`);
    return data
};

export const getRatingById = async (id) => {
    const { data } = await axios.get(`/ratings/${id}`);
    return data;
};

export const getRatingByOwnerId = async (ownerId) => {
    const { data } = await axios.get(`/ratings/owner/${ownerId}`);
    return data;
};

export const getRatingByProductId = async (productId) => {
    const { data } = await axios.get(`/ratings/product/${productId}`);
    return data;
}

export const addRating = async (product, rating, owner) => {
    const { data } = await axios.post(` /ratings`, {
        for: product,
        rating,
        owner
    });
    return data;
};

export const updateRating = async (id, product, rating, owner) => {
    const { data } = await axios.put(`/ratings/${id}`, {
        for: product,
        rating,
        owner
    });
    return data;
};

export const deleteRating = async (id) => {
    const { data } = await axios.delete(`/ratings/${id}`);
    return data;
};