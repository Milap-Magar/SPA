import Joi from "joi";

export const registerUserSchema = Joi.object({
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
