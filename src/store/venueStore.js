import { fetchVenueFromApi, fetchVenuesFromApi } from 'helpers/requests/venues'
import { create } from 'zustand'

// Create a store for venues and also store the query used to fetch the venue.
// Also store the current/active venue if a user clicks on a venue.
export const useVenuesStore = create((set) => ({
  venues: [],
  query: {},
  activeVenue: {},
  isLoading: true,
  setActiveVenue: (venue) => set({ activeVenue: venue }),
  setVenues: (venues) => set({ venues }),
  setQuery: (query) => set({ query }),
  fetchVenue: async (id, start_date) => {
    const { data, events, error } = await fetchVenueFromApi(id, start_date)
    if(error) return { error: error }
    set({ activeVenue: { ...data, events } })
    return { data: data }
  },
  fetchVenues: async (body) => {
    const { data, error } = await fetchVenuesFromApi(body)
    if(error) {
      console.error('Error:', error)
      set({ venues: [] })
      set({ isLoading: false })
    } else {
      set({ venues: data })
      set({ isLoading: false })
    }
  },

}))
