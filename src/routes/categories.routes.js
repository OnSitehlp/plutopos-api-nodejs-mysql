import { Router } from "express";
import { pool } from '../db.js'
import {getCategories} from '../controllers/categories.controller.js'
const router=Router()

router.get('/categories',getCategories)
router.post('/categories', (req, res) => {
    res.send('creando documentos electrónicos')
})
router.put('/categories', (req, res) => {
    res.send('editando documentos electrónicos')
})
router.delete('/categories', (req, res) => {
    res.send('eliminando documentos electrónicos')
})
export default router