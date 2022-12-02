import axios from 'axios';

export const getAllCategories = async () => {
    const { data } = await axios.get(`/categories`);
    return data;
};

export const getCategoryByGenre = async (genre) => {
    const { data } = await axios.get(`/categories/genre/${genre}`);
    return data;
};

export const getCategoryById = async (id) => {
    const { data } = await axios.get(`/categories/${id}`);
    return data;
};

export const addCategory = async (name, genre, status) => {
    const { data } = await axios.post(`/categories`, {
        name,
        genre,
        status
    });
    return data;
};

export const updateCategory = async (id, name, genre, status) => {
    const { data } = await axios.put(`/categories/${id}`, {
        name,
        genre,
        status
    });
    return data;
};

export const deleteCategory = async (id) => {
    const { data } = await axios.delete(`/categories/${id}`);
    return data;
};