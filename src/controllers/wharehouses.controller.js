import {pool} from '../db.js'

export const getWharehouses=async(req, res) => {
    const [result]=await pool.query('SELECT * from wharehouses')
    res.json(result[0])
}