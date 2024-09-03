// This is the page for the events in a city

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
//import { getEventsByCity } from '@/services/events';
import EventsStack from '@/components/stack/EventsStack';

export default function EventsCityPage() {
  const router = useRouter();
  const { city } = router.query;
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if(city) {
      //getEventsByCity(city).then(setEvents);
      console.log(city);
      setEvents([
        {
          title: 'Event 1',
          description: 'Description 1',
          date: '2021-01-01',
          image: 'https://via.placeholder.com/150',
        },
      ]);
    }
  }, [city]);

  return (
    <div>
      <h1>Events in {city}</h1>
      <EventsStack events={events} />
    </div>
  );
}