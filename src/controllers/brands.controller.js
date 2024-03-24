import {pool} from '../db.js'

export const getBrands=async(req, res) => {
    const [result]=await pool.query('SELECT * from brands')
    res.json(result[0])
}