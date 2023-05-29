import { db } from "../database/connection.js"

export async function getHotels () {
	return await db.query(`SELECT * FROM hotels;`)
}

export async function getHotelByCityIdRep (cityId) {
	return await db.query(`SELECT * FROM hotels WHERE "cityId"=$1;`,[cityId])
}
export async function getHotelByIdRep (id) {
	return await db.query(`SELECT * FROM hotels WHERE "id"=$1;`,[id])
}
export async function postHotelRep (name,cityId,description,pricePerDay,image) {
	return await db.query(`
    INSERT INTO hotels (name,"cityId",description,"pricePerDay",image)
    VALUES ($1, $2, $3, $4, $5);`,[name, cityId,description,pricePerDay,image])
}

export async function postCommodityRep (name,hotelId) {
	return await db.query(`
    INSERT INTO commodities (name,"hotelId")
    VALUES ($1, $2);`,[name, hotelId])
}

export async function getCommodityByIdRep (id) {
	return await db.query(`SELECT * FROM commodities WHERE "hotelId"=$1;`,[id])
}