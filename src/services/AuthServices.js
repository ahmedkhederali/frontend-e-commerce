import axios from 'axios';

export const Register = async (firstName, lastName, email, password, phone) =>{
    return await axios.post(`/users/register`,{
        firstName,
        lastName,
        email,
        password,
        phone
    });
};

export const Login = async (email, password)=>{
    return await axios.post(`/users/login`,{
        email,
        password
    });
};