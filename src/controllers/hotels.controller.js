import { db } from "../database/connection.js"
import { getCommodityByIdRep, getHotelByCityIdRep, getHotelByIdRep, getHotels, postCommodityRep, postHotelRep } from "../repositories/hotels.repository.js"

export async function getHotelByCityId(req, res) {
    const {cityId} = req.params
    try {
        const response = await getHotelByCityIdRep(cityId)
        res.send(response.rows)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getHotelById(req, res) {
    const {id} = req.params
    try {
        const response = await getHotelByIdRep(id)
        res.send(response.rows)
    } catch (err) {
        res.status(500).send(err.message)
    }
}
export async function getHotel(req, res) {
    try {
        const response = await getHotels()
        res.send(response.rows)
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

export async function postCommodity(req, res) {
    const {name,hotelId} = req.body
    try {
        const insert = await postCommodityRep(name,hotelId)
        res.status(201).send("Created")
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getCommodityById(req, res) {
    const {id} = req.params
    try {
        const response = await getCommodityByIdRep(id)
        res.send(response.rows)
    } catch (err) {
        res.status(500).send(err.message)
    }
}