import joi from "joi";

export const authSchema = joi.object({
    name: joi.string().required(),
    image: joi.string().uri().required()
});