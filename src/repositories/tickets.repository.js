import { db } from "../database/connection.js"

export async function getTickets () {
	return await db.query(`SELECT * FROM tickets;`)
}
export async function getTicketByIdRep (destinationId) {
	return await db.query(`
    SELECT tickets.*, dest_cities.name AS "destinationName", orig_cities.name AS "originName"
    FROM tickets
    JOIN cities AS dest_cities ON tickets."destinationId" = dest_cities.id
    JOIN cities AS orig_cities ON tickets."originId" = orig_cities.id
    WHERE tickets."destinationId" = $1;
`, [destinationId]);


}
export async function postTicketRep (originId,destinationId,departureTime,arrivalTime,cia,price) {
	return await db.query(`
    INSERT INTO tickets ("originId","destinationId","departureTime","arrivalTime",cia,price)
    VALUES ($1, $2, $3, $4, $5, $6);`,[originId,destinationId,departureTime,arrivalTime,cia,price])
}
