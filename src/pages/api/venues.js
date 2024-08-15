import { createApiClient } from "helpers/apiClient"

const client = createApiClient()

export default async function handler(req, res) {
  const { method, query, params } = req
  console.log('Query:', query);
  const { id, city } = req.query

  if(method === 'GET') {
    if(id) {
      const { data, error } = await client.from('venues').select(`
       name, city, country, street, internal_id, latitute, longitude
        `)
        .eq('internal_id', id).maybeSingle()
      if(error) return res.status(400).json({ message: 'Error getting venue', data: {} })
      if(!data) return res.status(404).json({ message: 'venue not found', data: {} })
      return res.status(200).json({
        data: data,
        message: 'venue found'
      })
    } else {
      let eventQuery = client.from('venues').select(`
        name, city, country, street, internal_id, latitude, longitude
        `)

      if(city) {
        eventQuery = eventQuery
          .eq('city', city)
          .limit(30)
      } else {
        eventQuery = eventQuery
          .limit(30)
      }

      const { data, error } = await eventQuery

      if(error) return res.status(400).json({ message: 'Error getting venues', data: [], error: error })
      return res.status(200).json({
        data: data,
        message: 'venues found'
      })
    }
  }
}
