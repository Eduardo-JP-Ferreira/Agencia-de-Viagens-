import { db } from "../database/connection.js"
import { getTickets, postTicketRep } from "../repositories/tickets.repository.js"


export async function getTicket(req, res) {
    try {
        const user = await getTickets()
        res.send(user.rows)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function postTicket(req, res) {
    const {originId,destinationId,departureTime,arrivalTime,cia,price} = req.body
    try {
        const insert = await postTicketRep(originId,destinationId,departureTime,arrivalTime,cia,price)
        res.status(201).send("Created")
    } catch (err) {
        res.status(500).send(err.message)
    }
}