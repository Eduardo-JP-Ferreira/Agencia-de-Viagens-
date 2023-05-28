import { db } from "../database/connection.js"

export async function getTickets () {
	return await db.query(`SELECT * FROM tickets;`)
}

export async function postTicketRep (originId,destinationId,departureTime,arrivalTime,cia,price) {
	return await db.query(`
    INSERT INTO tickets ("originId","destinationId","departureTime","arrivalTime",cia,price)
    VALUES ($1, $2, $3, $4, $5, $6);`,[originId,destinationId,departureTime,arrivalTime,cia,price])
}
