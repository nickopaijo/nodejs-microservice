import express from 'express'
import { reqOrder } from '../requester/order.js'

const route = express.Router()

route.post('/order', reqOrder)

export default route
