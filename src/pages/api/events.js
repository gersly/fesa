import { createApiClient } from "helpers/apiClient"

const client = createApiClient()

export default async function handler(req, res) {
  const { method, query, params } = req
  console.log('Query:', query);
  console.log('Params:', params);
  const { id } = req.query

  if(method === 'GET') {
    if(id) {
      const { data, error } = await client.from('eventsdb').select(`*`).eq('id', id).maybeSingle()
      if(error) return res.status(400).json({ message: 'Error getting event', data: {} })
      if(!data) return res.status(404).json({ message: 'Event not found', data: {} })
      return res.status(200).json({
        data: data,
        message: 'Event found'
      })
    } else {
      const { data, error } = await client.from('eventsdb').select(`*`)
      if(error) return res.status(400).json({ message: 'Error getting events', data: [] })
      return res.status(200).json({
        data: data,
        message: 'Events found'
      })
    }
  }
}
