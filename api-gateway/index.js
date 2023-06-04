import express from 'express'
import route from './configurations/routes.js'

const app = express()

app.use(express.json())
app.use('/mymcs', route)
app.listen(3500, () => console.log('listening on localhost..'))
