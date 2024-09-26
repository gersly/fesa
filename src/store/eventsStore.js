import { fetchEventFromApi, fetchEventsFromApi } from 'helpers/requests/events'
import { create } from 'zustand'

// Create a store for events and also store the query used to fetch the event.
// Also store the current/active event if a user clicks on an event.
export const useEventsStore = create((set) => ({
  events: [],
  query: {},
  activeEvent: {},
  savedEvents: [],
  isLoading: true,
  setActiveEvent: (event) => set({ activeEvent: event }),
  setEvents: (events) => set({ events }),
  setQuery: (query) => set({ query }),
  setSavedEvents: (events) =>
    set({ savedEvents: events }, () => {
      localStorage.setItem('savedEvents', JSON.stringify(events))
    }
    ),
  getSavedEvents: () => {
    const savedEvents = localStorage.getItem('savedEvents')
    if(savedEvents) {
      set({ savedEvents: JSON.parse(savedEvents) })
    }
  },
  fetchEvent: async (id) => {
    const { data, error } = await fetchEventFromApi(id)
    if(error) return { error: error }
    set({ activeEvent: data })
    return { data: data }
  },
  fetchEvents: async (body) => {
    set({ isLoading: true })
    const { data, error } = await fetchEventsFromApi(body)
    console.log('Data from fetch:', data)
    if(error) {
      console.error('Error:', error)
      set({ events: [] })
      setTimeout(() => {
        set({ isLoading: false })
      }, 1000);
    } else {
      set({ events: data })
      setTimeout(() => {
        set({ isLoading: false })
      }, 1000)
    }
  },
  fetchEventsNewPage: async (body) => {
    set({ isLoading: true })

    const { data, error } = await fetchEventsFromApi(body)
    if(error) {
      console.error('Error:', error)
      set({ events: [] })
      setTimeout(() => {
        set({ isLoading: false })
      }, 1000);
    } else {
      if(body.page === 0) {
        set({ events: data })
      } else {
        set((state) => ({
          // Append the new events to the existing events
          events: [...state.events, ...data],
          query: body,
        }))
      }
      setTimeout(() => {
        set({ isLoading: false })
      }, 1000)
    }
  }

}))
