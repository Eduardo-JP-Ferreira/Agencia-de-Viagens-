import { db } from "../database/connection.js"
import { getTicketByIdRep, getTicketIdRep, getTickets, postTicketRep } from "../repositories/tickets.repository.js"


export async function getTicket(req, res) {
    try {
        const response= await getTickets()
        res.send(response.rows)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getTicketById(req, res) {
    const {destinationId} = req.params
    try {
        const response = await getTicketByIdRep(destinationId)
        res.send(response.rows)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getTicketId(req, res) {
    const {id} = req.params
    try {
        const response = await getTicketIdRep(id)
        res.send(response.rows)
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