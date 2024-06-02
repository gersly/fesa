export async function fetchEvents() {
  try {
    const response = await fetch('/api/events');
    const data = await response.json();

    if(response.ok) {
      // Request was successful
      return data;
    } else {
      // Request failed
      return {
        success: false,
        message: 'Failed to fetch events',
        data: data.data
      };
    }
  } catch(error) {
    // Network error or other issue
    return {
      success: false,
      message: 'An error occurred',
      error: error.message
    };
  }
}


export async function fetchEvent(id) {
  try {
    const response = await fetch(`/api/events?id=${id}`);

    const data = await response.json();

    if(response.ok) {
      // Request was successful
      return data;
    } else {
      // Request failed
      return {
        success: false,
        message: 'Failed to fetch event',
        data: data.data
      };
    }
  } catch(error) {
    // Network error or other issue
    return {
      success: false,
      message: 'An error occurred',
      error: error.message
    };
  }
}

// Path: helpers/requests/fetchEvents.js