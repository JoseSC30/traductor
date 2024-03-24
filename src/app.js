import express from "express";
import morgan from 'morgan'
import consultasRoutes from "./routes/consultas.routes.js"

const app = express()
const port = process.env.PORT || 3000

app.use(morgan('dev'))
app.use(express.json())

app.get('/',(req, res) => {
    res.json('Iniciado')
})

app.use(consultasRoutes)

app.listen(port)

export default app