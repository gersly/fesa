export async function fetchVenuesFromApi({
  city
}) {
  try {
    const response = await fetch('/api/venues?city=' + city);
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


export async function fetchVenueFromApi(id) {
  try {
    const response = await fetch(`/api/venues?id=${id}`);

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