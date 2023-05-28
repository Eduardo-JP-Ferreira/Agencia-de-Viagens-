import { Router } from "express";
import citiesRouter from "./cities.routes.js";
import hotelsRouter from "./hotels.routes.js";

const router = Router()
router.use(citiesRouter)
router.use(hotelsRouter)

export default router