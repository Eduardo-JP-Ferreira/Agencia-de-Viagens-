import { db } from "../database/connection.js"
import { getHotelByIdRep, getHotels, postHotelRep } from "../repositories/hotels.repository.js"

export async function getHotelById(req, res) {
    const {cityId} = req.params
    try {
        const user = await getHotelByIdRep(cityId)
        res.send(user.rows)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getHotel(req, res) {
    try {
        const user = await getHotels()
        res.send(user.rows)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function postHotel(req, res) {
    const {name,cityId,description,pricePerDay,image} = req.body
    try {
        const insert = await postHotelRep(name,cityId,description,pricePerDay,image)
        res.status(201).send("Created")
    } catch (err) {
        res.status(500).send(err.message)
    }
}