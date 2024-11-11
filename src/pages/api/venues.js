import { createApiClient } from "helpers/apiClient"

const client = createApiClient()

export default async function handler(req, res) {
  const { method, query, params } = req
  console.log('Query:', query);
  const { id, name, start_date } = req.query

  if(method === 'GET') {
    if(id) {
      console.log('Getting venue with id:', id)
      const { data, error } = await client.from('venues').select(`
       name, city, country, street, tags, internal_id, id, image, website, email, phone, latitude, longitude
        `)
        .eq('internal_id', id)
        .maybeSingle()

      console.log(error)
      if(error) return res.status(400).json({ message: 'Error getting venue', data: {} })

      if(!data) return res.status(404).json({ message: 'venue not found', data: {} })

      const { data: eventsData, error: eventsError } = await client.from('events').select(`
            name, internal_id, start_date, image, min_price
            `)
        .eq('venue_id', data.id)
        .gte('start_date', start_date)
        .order('start_date', { ascending: true })
        .limit(25)

      return res.status(200).json({
        data: data,
        events: eventsData,
        message: 'venue found'
      })
    } else {
      let eventQuery = client.from('venues').select(`
        name, city, country, street, internal_id, image, website, email, phone
        `)

      if(name) {
        eventQuery = eventQuery
          .ilike('name', name)
          .limit(100)
      } else {
        eventQuery = eventQuery
          .limit(100)
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
