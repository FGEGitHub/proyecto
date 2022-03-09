import express  from "express"
import cors from 'cors'
//importamos la bd
import db from './database/db.js'
//importamos enrutador
import blogRoutes from './routes/routes.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/blogs',blogRoutes)

try {
    await db.authenticate()
    console.log('conexion exitosa')
} catch (error) {
    console.log(`El error de la conexion es: ${error}`)}

/* 
app.get('/', (req,res)=>{ 
    res.send('Hola')

}) */
app.listen(8000,()=>{
console.log('Puerto 8000') })