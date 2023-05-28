import { Router } from "express";
import { getCity, postCity } from "../controllers/cities.controller.js";
import { validateSchema } from "../middlewares/validadeSchema.middleware.js";
import { postCityObject } from "../schemas/validate.schema.js";


const citiesRouter = Router()
citiesRouter.get("/city", getCity)
citiesRouter.post("/city",validateSchema(postCityObject), postCity)
export default citiesRouter