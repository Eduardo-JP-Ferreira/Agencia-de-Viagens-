import { db } from "../database/connection.js"

export async function getHotels () {
	return await db.query(`SELECT * FROM hotels;`)
}

export async function getHotelByIdRep (cityId) {
	return await db.query(`SELECT * FROM hotels WHERE "cityId"=$1;`,[cityId])
}

export async function postHotelRep (name,cityId,description,pricePerDay,image) {
	return await db.query(`
    INSERT INTO hotels (name,"cityId",description,"pricePerDay",image)
    VALUES ($1, $2, $3, $4, $5);`,[name, cityId,description,pricePerDay,image])
}