import cote from 'cote'

const reqOrder = async (req, res) => {
  const orderRequester = new cote.Requester({ name: 'order requester', key: 'orders' })
  const deliverRequester = new cote.Requester({ name: 'delivery requester', key: 'deliveries' })

  const order = await orderRequester.send({ type: 'create order', order: req.body })
  const delivery = await deliverRequester.send({ type: 'create delivery', order })

  res.send({ order, delivery })
}

export { reqOrder }
