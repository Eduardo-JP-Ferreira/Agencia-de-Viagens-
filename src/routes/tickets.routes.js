import { Router } from "express";
import { validateSchema } from "../middlewares/validadeSchema.middleware.js";
import { getTicket, postTicket } from "../controllers/tickets.controller.js";
import { postTicketObject } from "../schemas/validate.schema.js";


const ticketsRouter = Router()
ticketsRouter.get("/tickets", getTicket)
ticketsRouter.post("/tickets",validateSchema(postTicketObject), postTicket)
export default ticketsRouter