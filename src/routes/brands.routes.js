import { Router } from "express";
import { pool } from '../db.js'
import {getBrands} from '../controllers/brands.controller.js'
const router=Router()

router.get('/brands',getBrands)
router.post('/brands', (req, res) => {
    res.send('creando documentos electrónicos')
})
router.put('/brands', (req, res) => {
    res.send('editando documentos electrónicos')
})
router.delete('/brands', (req, res) => {
    res.send('eliminando documentos electrónicos')
})
export default router