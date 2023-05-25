import { db } from "../database/connection.js"

export async function get(req, res) {
    try {
        
    } catch (err) {
        res.status(500).send(err.message)
    }
}