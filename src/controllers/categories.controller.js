import {pool} from '../db.js'

export const getCategories=async(req, res) => {
    const [result]=await pool.query('SELECT * from categories')
    res.json(result[0])
}