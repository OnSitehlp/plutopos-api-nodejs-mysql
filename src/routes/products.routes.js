import { Router } from "express";
import { pool } from '../db.js'
import {getProducts,getProduct,postProduct,deleteProduct,putProduct,patchProduct} from '../controllers/products.controller.js'
const router=Router()

router.get('/productos',getProducts)
router.get('/productos/:id',getProduct)
router.post('/productos', postProduct)
router.delete('/productos/:id', deleteProduct)
router.put('/productos/:id',putProduct)
router.patch('/productos/:id',patchProduct)
export default router