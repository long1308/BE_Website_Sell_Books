import Joi from "joi";
export const productSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "Name không được để trống",
    "any.required": "Trường Name này là bắt buộc",
    "string.base": "Name phải là 1 string",
  }),
  author: Joi.string().required().messages({
    "string.empty": "Author không được để trống",
    "any.required": "Trường Author này là bắt buộc",
    "string.base": "Author phải là 1 string",
  }),
  price: Joi.number().required().messages({
    "string.empty": "Price không được để trống",
    "any.required": "Trường Price này là bắt buộc",
    "number.base": "Price phải là 1 số",
  }),
  priceSale: Joi.number().messages({
    "number.base": "priceSale phải là 1 số",
  }),
  description: Joi.string().required().messages({
    "string.empty": "description không được để trống",
    "any.required": "Trường description này là bắt buộc",
    "string.base": "description phải là 1 string",
  }),
  image: Joi.array().required().messages({
    "string.empty": "image không được để trống",
    "any.required": "Trường image này là bắt buộc ",
    "string.base": "image phải là 1 string",
  }),
  hot_sale: Joi.number(),
  description_short: Joi.string(),
  featured: Joi.boolean(),
  isNew: Joi.boolean(),
  isVisible: Joi.boolean(),
  rating: Joi.number().messages({
    "number.base": "Rating phải là 1 số",
  }),
  quantity: Joi.number().messages(),
  inventoryStatus: Joi.string(),
  categoryId: Joi.string().required().messages({
    "string.empty": "categoryId không được để trống",
    "any.required": "Trường categoryId này là bắt buộc",
    "string.base": "categoryId phải là 1 string",
  }),
});
export const categorySchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "Category không được để trống",
    "any.required": "Trường Category này là bắt buộc",
    "string.base": "Category phải là 1 String",
  }),
});
