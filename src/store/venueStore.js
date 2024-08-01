import { create } from 'zustand'

// Create a store for venues and also store the query used to fetch the venue.
// Also store the current/active venue if a user clicks on a venue.
export const useVenuesStore = create((set) => ({
  venues: [],
  query: {},
  activeVenue: {},
  setActiveVenue: (venue) => set({ activeVenue: venue }),
  setVenues: (venues) => set({ venues }),
  setQuery: (query) => set({ query })
}))
