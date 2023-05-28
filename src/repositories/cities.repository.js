import { db } from "../database/connection.js"

export async function getCities () {
	return await db.query(`SELECT * FROM cities;`)
}

export async function getCityName(name, state) {
	return await db.query(`SELECT * FROM cities WHERE name=$1 AND state=$2;`,[name, state])
}

export async function postCityRep(name, state) {
	return await db.query(`
	INSERT INTO cities (name, state)
	VALUES ($1, $2);`,[name, state])
}