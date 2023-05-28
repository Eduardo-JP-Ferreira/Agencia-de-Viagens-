import { db } from "../database/connection.js"

export async function getCities () {
	return await db.query(`SELECT * FROM cities;`)
}

export async function postCityRep (name, state) {
	return await db.query(`SELECT * FROM cities WHERE name=$1 AND state=$2;`,[name, state])
}