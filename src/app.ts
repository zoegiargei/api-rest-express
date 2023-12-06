import express, { Express } from 'express'
import { PORT } from './configs/port'

const app: Express = express()
app.disable('x-powered-by')
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(PORT, () : void => {
    console.log(`Server listening on PORT http://localhost:${PORT}`)
})