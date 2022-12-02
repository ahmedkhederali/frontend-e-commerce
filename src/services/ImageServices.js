import axios from 'axios';

export const getAllImages = async () => {
    const { data } = await axios.get(`/images`);
    return data;
};

export const getImageById = async (id) => {
    const { data } = await axios.get(`/images/${id}`);
    return data;
};

export const addImage = async (url) => {
    const { data } = await axios.post(`/images`, {
        url
    });
    return data;
};

export const deleteImage = async (id) => {
    const { data } = await axios.delete(`/images/${id}`);
    return data;
};

export const getAllMiniImages = async () => {
    const { data } = await axios.get(`/minis`);
    return data;
};

export const getMiniImageById = async (id) => {
    const { data } = await axios.get(`/minis/${id}`);
    return data;
};

export const addMiniImage = async (url) => {
    const { data } = await axios.post(`/minis`, {
        url
    });
    return data;
};

export const deleteMiniImage = async (id) => {
    const { data } = await axios.delete(`/minis/${id}`);
    return data;
};

// CLOUDINARY

export const uploadImageToCloudinary = async (image) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "iggckzno");
    data.append("cloud_name", "ahmed-ali-ramdan-kheder");
    const result = await fetch(`https://api.cloudinary.com/v1_1/ahmed-ali-ramdan-kheder/image/upload`, {
        method: 'POST',
        body: data
    })
        .then(res => res.json());
    return result;
};