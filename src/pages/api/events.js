import { createApiClient } from "helpers/apiClient"

const client = createApiClient()

export default async function handler(req, res) {
  const { method } = req

  if(method === 'GET') {
    const { data, error } = await client.from('eventsdb').select(`*`)
    if(error) return res.status(400).json({ message: 'Error getting events', data: [] })
    res.status(200).json({
      data: data,
      message: 'Events found'
    })
  }
}
