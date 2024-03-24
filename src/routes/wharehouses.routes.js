import { Router } from "express";
import { pool } from '../db.js'
import {getWharehouses} from '../controllers/wharehouses.controller.js'
const router=Router()

router.get('/wharehouses',getWharehouses)
router.post('/wharehouses', (req, res) => {
    res.send('creando documentos electrónicos')
})
router.put('/wharehouses', (req, res) => {
    res.send('editando documentos electrónicos')
})
router.delete('/wharehouses', (req, res) => {
    res.send('eliminando documentos electrónicos')
})
export default router