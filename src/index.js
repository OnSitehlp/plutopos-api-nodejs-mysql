//https://www.youtube.com/watch?v=3dSkc-DIM74
import express from 'express'
import { pool } from './db.js'
import productsRoutes from './routes/products.routes.js'
import categoriesRoutes from './routes/categories.routes.js'
import brandsRoutes from './routes/brands.routes.js'
import wharehousesRoutes  from './routes/wharehouses.routes.js'
import './config.js'
const app = express()

app.use(express.json())
app.get('/ping', async(req,res)=>{
   const [result]=await pool.query('SELECT * from products')
    res.json(result[0]);
});




app.use('/api',productsRoutes);
app.use('/api',categoriesRoutes);
app.use('/api',brandsRoutes);
app.use('/api',wharehousesRoutes);

 app.use((req,res,next)=>{
res.status(404).json({
    message:"End point not found"
})
    
}) 

app.listen(3000)
console.log('Servidor escuchando en puerto 3000')