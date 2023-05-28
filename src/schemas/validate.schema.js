import joi from "joi";

export const postCityObject = joi.object({
    name: joi.string().required(),
    state: joi.string().required().length(2),
  })
export const postHotelObject = joi.object({
    name: joi.string().required(),
    cityId: joi.number().required(),
    description: joi.string().required(),
    pricePerDay: joi.number().required(),
    image: joi.string().required()
  })