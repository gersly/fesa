import { createApiClient } from "helpers/apiClient"
import { posthogClient } from "helpers/posthogClient";
const client = createApiClient()

export default async function handler(req, res) {
  const { method, query, params } = req
  const limit = 50
  console.log('Query:', query);
  const {
    id,
    startingDate,
    page = 0,
    city } = req.query

  if(method === 'GET') {
    if(id) {
      const { data, error } = await client.from('events').select(`
        id,
        internal_id,
        name,
        start_date,
        description,
        image,
        venue,
        min_price, 
        venues(name, city, country, street, internal_id, latitude, longitude, image)
        `)
        .eq('internal_id', id)
        .maybeSingle()
      if(error) return res.status(400).json({ message: 'Error getting event', data: {} })
      if(!data) return res.status(404).json({ message: 'Event not found', data: {} })
      posthogClient.capture({ distinct_id: 'event_odp_api', event: 'Event viewed', properties: { event: data, name: data.name, env: 'api', query: data.internal_id } })
      return res.status(200).json({
        data: data,
        message: 'Event found'
      })
    } else {
      let eventQuery = client.from('events').select(`
        id,
        internal_id,
        name,
        start_date,
        image,
        venue,
        min_price, 
        venues!inner(name, city, country, street, internal_id, latitude, longitude, image)
        `)

      if(city) {
        eventQuery = eventQuery
          .ilike('venues.city', `%${city}%`)
          .neq('image', 'no_image')
          .gte('start_date', startingDate)
          //.lte('end_date', endingDate)
          .order('start_date', { ascending: true })
          .range((page * limit) + 1, (page + 1) * limit)
          .limit(limit)

      } else {
        eventQuery = eventQuery
          .neq('image', 'no_image')
          .gte('start_date', startingDate)
          //.lte('end_date', endingDate)
          .order('start_date', { ascending: true })
          .range((page * limit) + 1, (page + 1) * limit)
          .limit(limit)
      }

      const { data, error } = await eventQuery

      if(error) return res.status(400).json({ message: 'Error getting events', data: [], error: error })
      posthogClient.capture({ distinct_id: 'event_serp_api', event: 'Events found', properties: { count: data.length, query: query, env: 'api' } })
      return res.status(200).json({
        data: data,
        message: 'Events found'
      })
    }
  }
}
