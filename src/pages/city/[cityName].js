// This is the page for the events in a city

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
//import { getEventsByCity } from '@/services/events';
import EventsStack from '@/components/stack/EventsStack';
import Head from 'next/head';
import PageLayout from '@/components/layouts/PageLayout';
import TopNavigation from '@/components/navigation/TopNavigation';
import dayjs from 'dayjs';
import { useEventsStore } from '@/store/eventsStore';

export default function EventsCityPage() {
  const router = useRouter();
  const { cityName } = router.query;
  const [city, setCity] = useState(cityName);
  const [endingDate, setEndingDate] = useState(dayjs().add(1, 'day').toISOString());
  const [page, setPage] = useState(0);
  const [startingDate, setStartingDate] = useState(new Date().toISOString());
  const { fetchEvents, isLoading, events, fetchEventsNewPage } = useEventsStore()

  const handleSearch = async () => {
    await fetchEvents({
      city: city,
      startingDate: dayjs(startingDate).toISOString(),
      endingDate: dayjs(endingDate).toISOString()
    })
  }

  const handleSearchNewPage = async () => {

    await fetchEventsNewPage({
      city: city,
      startingDate: dayjs(startingDate).toISOString(),
      endingDate: dayjs(endingDate).toISOString(),
      page: page,
    })
  }

  useEffect(() => {
    handleSearch()
  }, [city, startingDate])

  useEffect(() => {
    handleSearchNewPage()
  }, [page])

  return (
    <div>
      <Head>
        <title>Events in {cityName} | Fesa.app</title>
        <meta name="description" content={`Find events in ${cityName} today`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex lg:pb-10 bg-black md:pb-8 flex-col grayscale-0 items-center justify-center '
        style={{
          //background: `url("/banner.png")`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      >
        <TopNavigation />
        <div className='max-w-5xl md:px-8 w-full md:block hidden mt-4 space-y-4'>
          <h1 className='lg:text-4xl md:text-3xl text-2xl text-left capitalize text-white font-bold font-heading'>
            Discover events in {cityName}
          </h1>
          <div className='bg-white border border-neutral-300 h-10 rounded w-6/6 md:max-w-lg w-full flex'>
            <div className='w-full flex items-center justify-center rounded'>
              <input
                className='w-full h-full px-2 border-l rounded-0 p-0.5 outline-none'
                type='date'
                placeholder={`${dayjs().format('YYYY-MM-DD')}`}
                value={startingDate}
                onChange={(e) => setStartingDate(e.target.value)}
                defaultValue={dayjs().format('YYYY-MM-DD')}
              />
              {/*<input
                className='w-1/2 h-full px-2 border-r outline-none rounded-r-md'
                type='date'
                value={endingDate}
                onChange={(e) => setEndingDate(e.target.value)}
                defaultValue={dayjs().format('YYYY-MM-DD')}
              />*/}
              {/*<span className="w-1/3 h-full p-1 flex items-center justify-center rounded-r-full bg-white">
                <button
                  onClick={() => handleSearch()}
                  className='
              font-medium bg-neutral-900 flex items-center  justify-center space-x-2 text-white h-full w-full rounded-full hover:bg-neutral-800'>
                  <MagnifyingGlassIcon className='w-5 h-5' /><p>Search</p>
                </button>
              </span>*/}
            </div>
          </div>
        </div>
        {/* Show on mobile */}
        <div className='max-w-3xl w-full md:hidden h-full px-2 py-4 space-y-2 flex flex-col items-start justify-end'>
          <h2 className='lg:text-5xl md:text-3xl text-2xl text-left text-white font-bold font-heading capitalize'>
            Discover events in {cityName}
          </h2>
          <div className='bg-white border border-neutral-300 rounded p-0.5 h-10 w-6/6 w-full flex'>
            <div className='w-full flex items-center justify-center max-h-10'>
              <input
                className='w-full h-full px-2 border-0 border-neutral-300 outline-none'
                type='date'
                value={startingDate}
                placeholder={`${dayjs().format('YYYY-MM-DD')}`}
                onChange={(e) => setStartingDate(e.target.value)}
                defaultValue={dayjs().format('YYYY-MM-DD')}
              />
            </div>
          </div>
        </div>
      </div>
      <PageLayout>
        <EventsStack />
        <button
          disabled={isLoading}
          onClick={() => setPage(page + 1)}
          className='py-2 bg-black text-white px-4 rounded w-full hover:bg-pink-500 text-sm'>
          {isLoading ? 'Loading...' : 'Load More'}
        </button>
      </PageLayout>
    </div>
  );
}