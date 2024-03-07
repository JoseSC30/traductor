import { Router } from "express"
const router = Router()

import * as consultas from '../controllers/consultas.controller.js'

router.get('/consultas', consultas.saludo)
router.post('/consultas', consultas.traducir)

export default router