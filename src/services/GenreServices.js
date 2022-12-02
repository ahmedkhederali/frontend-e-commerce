import axios from 'axios';

export const getAllGenres = async () => {
    const { data } = await axios.get(`/genres`);
    return data;
};

export const getGenreById = async (id) => {
    const { data } = await axios.get(`/genres/${id}`);
    return data;
};

export const addGenre = async (name, status) => {
    const { data } = await axios.post(`/genres`, {
        name,
        status
    });
    return data;
};

export const updateGenre = async (id, name, status) => {
    const { data } = await axios.put(`/genres/${id}`, {
        name,
        status
    });
    return data;
};

export const deleteGenre = async (id) => {
    const { data } = await axios.delete(`/genres/${id}`);
    return data;
};