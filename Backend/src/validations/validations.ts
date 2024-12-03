import Joi from "joi";
import { RegisterUserInput } from "../types";

export const registerUserSchema = Joi.object<RegisterUserInput>({
  email: Joi.string().email().required().messages({
    "string.email": "Please enter a valid email address.",
    "any.required": "Email is required.",
  }),
  password: Joi.string().min(6).required().messages({
    "string.min": "Password must be at least 6 characters long.",
    "any.required": "Password is required.",
  }),
  role: Joi.string().valid("user", "admin").required().messages({
    "any.only": "Role must be either 'user' or 'admin'.",
    "any.required": "Role is required.",
  }),
  name: Joi.string().min(2).required().messages({
    "string.min": "Name must be at least 2 characters long.",
    "any.required": "Password is required.",
  }),
  address: Joi.string().required().messages({
    "any.required": "Address is required.",
  }),
  phone: Joi.string()
    .pattern(/^\d{10}$/)
    .required()
    .messages({
      "string.pattern.base": "Phone number must be exactly 10 digits.",
      "any.required": "Phone number is required.",
    }),
});
