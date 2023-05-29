import { db } from "../database/connection.js"
import { getCities, getCityByIdRep, postCityRep } from "../repositories/cities.repository.js"

export async function getCity(req, res) {
    try {
        const user = await getCities()
        res.send(user.rows)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getCityById(req, res) {
    const {id} = req.params
    try {
        const response = await getCityByIdRep(id)
        res.send(response.rows)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function postCity(req, res) {
    const {name, state} = req.body
    try {
        const user = await getCityName(name,state)
        if(user.rows[0]) return res.status(409).send("Esta cidade já existe!")
        const insert = await postCityRep(name,state)
        res.status(201).send("Created")
    } catch (err) {
        res.status(500).send(err.message)
    }
}