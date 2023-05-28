import { Router } from "express";
import { validateSchema } from "../middlewares/validadeSchema.middleware.js";
import { getHotel, getHotelById, postHotel } from "../controllers/hotels.controller.js";
import { postHotelObject } from "../schemas/validate.schema.js";

const hotelsRouter = Router()
hotelsRouter.get("/hotels", getHotel)
hotelsRouter.get("/hotels/:cityId", getHotelById)
hotelsRouter.post("/hotels",validateSchema(postHotelObject), postHotel)
export default hotelsRouter