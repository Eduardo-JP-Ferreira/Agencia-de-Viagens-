import { Router } from "express";
import { validateSchema } from "../middlewares/validadeSchema.middleware.js";
import { getCommodityById, getHotel, getHotelByCityId, getHotelById, postCommodity, postHotel } from "../controllers/hotels.controller.js";
import { postCommodityObject, postHotelObject } from "../schemas/validate.schema.js";

const hotelsRouter = Router()
hotelsRouter.get("/hotels", getHotel)
hotelsRouter.get("/hotels/:cityId", getHotelByCityId)
hotelsRouter.get("/hotels/view/:id", getHotelById)
hotelsRouter.post("/hotels",validateSchema(postHotelObject), postHotel)
hotelsRouter.post("/commodities",validateSchema(postCommodityObject),postCommodity)
hotelsRouter.get("/commodities/:id", getCommodityById)
export default hotelsRouter