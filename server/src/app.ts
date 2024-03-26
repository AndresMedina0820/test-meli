import express from 'express'
import cors from 'cors';
import { routerApi } from './routes/index'

const app = express()
app.use(express.json())

const PORT = 3000

app.use(cors())
// app.use((_req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*')
//   res.setHeader('Access-Control-Allow-Credentials', 'true')
//   res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE')
//   res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers')
//   res.setHeader('Cache-Control', 'no-cache')
//   next()
// })

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

// Routes
routerApi(app)
