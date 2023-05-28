import joi from "joi";

export const postCityObject = joi.object({
    name: joi.string().required(),
    state: joi.string().required().length(2),
  })
export const postHotelObject = joi.object({
    name: joi.string().required(),
    cityId: joi.number().required(),
    description: joi.string().required(),
    pricePerDay: joi.number().required().positive(),
    image: joi.string().required()
  })

export const postTicketObject = joi.object({
    originId: joi.number().required(),
    destinationId: joi.number().required(),
    departureTime: joi.string().required(),
    arrivalTime: joi.string().required(),
    cia: joi.string().required(),
    price: joi.number().required()
  })