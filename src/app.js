import express from "express";
import morgan from 'morgan'
import consultasRoutes from "./routes/consultas.routes.js"

const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.get('/',(req, res) => {
    res.json('Iniciado')
})

app.use(consultasRoutes)

export default app