export async function fetchVenuesFromApi({
  name
}) {
  try {
    const response = await fetch('/api/venues?name=' + name);
    const data = await response.json();

    if(response.ok) {
      // Request was successful
      return data;
    } else {
      // Request failed
      return {
        success: false,
        message: 'Failed to fetch venues',
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


export async function fetchVenueFromApi(id, start_date) {
  try {
    const response = await fetch(`/api/venues?id=${id}&start_date=${start_date}`);

    const data = await response.json();

    if(response.ok) {
      // Request was successful
      return data;
    } else {
      // Request failed
      return {
        success: false,
        message: 'Failed to fetch venue',
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