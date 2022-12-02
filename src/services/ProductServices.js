import axios from 'axios';

export const getAllProducts = async () => {
    const { data } = await axios.get(`/products`);
    return data;
};

export const getProductById = async (id) => {
    const { data } = await axios.get(`/products/${id}`);
    return data;
};

export const getProductByPrice = async (lowest, uppest) => {
    const { data } = await axios.post(`/products/query/price`, {
        lowest,
        uppest
    });
    return data;
};

export const getProductByCategoryId = async (id) => {
    const { data } = await axios.get(`/products/category/${id}`);
    return data;
};

export const getProductByColor = async (color, lowest, uppest) => {
    const { data } = await axios.post(`/products/color/${color}`
     ,{lowest,uppest}
    );
    return data;
};

export const getProductByGender = async (gender, lowest, uppest) => {
    const { data } = await axios.post(`/products/gender/${gender}`
       ,{lowest,uppest}
    );
    return data;
};

export const getProductByStatus = async (status) => {
    const { data } = await axios.get(`/products/status/${status}`);
    return data;
};

export const getProductBySearch = async (search) => {
    const { data } = await axios.get(`/products/search/${search}`);
    return data;
};

export const getProductsByQueries = async (lowest, uppest, gender, color) => {
    const { data } = await axios.post(`/products/query/full`, {
        lowest,
        uppest,
        gender,
        color
    });
    return data;
};

export const addProduct = async (imageUrl,name, color, sizes, description, category, gender, price,stock) => {
    const { data } = await axios.post(`/products`, {
        imageUrl,
        name,
        color,
        sizes,
        description,
        category,
        gender,
        price,
        stock 
    });
    return data;
};

export const updateProduct = async (id, name, description, price,stock) => {
    const { data } = await axios.put(`/products/${id}`, {
        name,
        description,
        price,
        stock
    });
    return data;
};

export const updateProductStock = async (id,amount) => {
    const { data } = await axios.patch(`/products/updatebystock`, {
        id,
        amount
    });
    return data;
};



export const deleteProduct = async (id) => {
    const { data } = await axios.delete(`/products/${id}`);
    return data;
};