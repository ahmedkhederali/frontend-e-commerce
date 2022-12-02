import axios from 'axios';

export const getAllComments = async () => {
    const { data } = await axios.get(`/comments`);
    return data;
};

export const getCommentById = async (id) => {
    const { data } = await axios.get(`/comments/${id}`);
    return data;
};

export const getCommentByAuthorId = async (id) => {
    const { data } = await axios.get(`/comments/author/${id}`);
    return data;
};

export const getCommentByProductId = async (id) => {
    const { data } = await axios.get(`/comments/product/${id}`);
    return data;
};

export const addComment = async (productId, comment, author) => {
    const { data } = await axios.post(`/comments`, {
        for: productId,
        comment,
        author
    });
    return data;
};

export const updateComment = async (id, productId, comment, author) => {
    const { data } = await axios.put(`/comments/${id}`, {
        for: productId,
        comment,
        author
    });
    return data;
};

export const deleteComment = async (id) => {
    const { data } = await axios.delete(`/comments/${id}`);
    return data;
};