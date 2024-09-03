// This is the page for the events in a city

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getEventsByCity } from '@/services/events';
import { EventsStack } from '@/components/stack/EventsStack';

export default function EventsCityPage() {
  const router = useRouter();
  const { city } = router.query;
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if(city) {
      getEventsByCity(city).then(setEvents);
    }
  }, [city]);

  return (
    <div>
      <h1>Events in {city}</h1>
      <EventsStack events={events} />
    </div>
  );
}