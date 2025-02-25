import { createApiClient } from "helpers/apiClient"

const client = createApiClient()

export default async function handler(req, res) {
  if(req.method === 'GET') {
    const { data, error } = await client.from('event_list_ads').select('*')
    if(error) {
      return res.status(400).json(error)
    }
    return res.status(200).json(data)
  }
}