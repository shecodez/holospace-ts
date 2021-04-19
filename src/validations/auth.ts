import * as yup from 'yup';

const name = yup.string().required().min(3).max(64).label('Name');
const email = yup.string().email().required().label('Email');
const password = yup.string().required().min(8).label('Password');

export const loginSchema = yup.object({ user: yup.object({ email, password }) }).required();

export const registerSchema = yup.object({ user: yup.object({ name, email, password }) }).required();

export const forgotPasswordSchema = yup.object({  email }).required();
