import OpenAI from "openai"
import 'dotenv/config'

const apiKey = process.env.OPENAI_API_KEY
const openai = new OpenAI({ apiKey})

async function traduciendo(consulta) {
    try {
        const respuesta = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                // { role: 'system', content: 'Dame la palabra y el idioma al que quieres traducir'},
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
    console.log("MENSAJE RECIBIDO: "+req.body.mensaje)
    console.log(req.body)
    const palabraIdioma = req.body.mensaje
    const texto = "A continuacion voy a enviarte unos parametros. La primera palabra es la que quiero traducir, y la segunda palabra el idioma al que quiero traducir. Tu respuesa sera SOLAMENTE LA PALABRA TRADUCIDA. Por ejemplo si te mando 'hola,ingles', tu respuesta sera 'hello'. Estos son los parametros "+palabraIdioma
    const mensaje = await traduciendo(texto)
    console.log(mensaje)
    // console.log(req.body.mensaje)
    res.json(mensaje)
}

export const saludo = (req, res) => {
    console.log("Saludos")
    res.json("Saludos Dos")
}