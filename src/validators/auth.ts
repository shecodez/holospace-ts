import * as yup from 'yup';
//TODO: https://github.com/jquense/yup#using-a-custom-locale-dictionary

const name = yup.string().required().min(3).max(32).label('Username');
const email = yup.string().email().required().label('Email');
const password = yup.string().required().min(8).label('Password');
//const terms = yup.string().required('Accept Ts & Cs is required');

export const loginSchema = yup.object({ user: yup.object({ email, password }) }).required();

export const registerSchema = yup.object({ user: yup.object({ name, email, password }) }).required();

export const forgotPasswordSchema = yup.object({ user: yup.object({ email }) }).required();
