import OpenAI from "openai"
import 'dotenv/config'

const apiKey = process.env.OPENAI_API_KEY
const prompt = process.env.MI_PROMPT
const openai = new OpenAI({ apiKey})

async function traduciendo(consulta) {
    try {
        const respuesta = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'user', content: consulta}
            ]
        })
        return respuesta.choices[0].message.content
    } catch (error) {
        console.error('Error al obtener respuesta:', error)
        return 'Error al procesar la consulta.'
    }
}

export const traducir = async (req, res) => {
    const texto = prompt + req.body.mensaje
    const mensaje = await traduciendo(texto)
    res.json(mensaje)
}

export const saludo = (req, res) => {
    console.log("Saludos")
    res.json("Saludos RES")
}