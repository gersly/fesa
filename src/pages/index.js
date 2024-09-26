import HomeHeader from '@/components/headers/HomeHeader'
import PageLayout from '@/components/layouts/PageLayout'
import Footer from '@/components/navigation/Footer'
import Tabs from '@/components/navigation/Tabs'
import TopNavigation from '@/components/navigation/TopNavigation'
import EventsStack from '@/components/stack/EventsStack'
import Head from 'next/head'
import dayjs from 'dayjs'
dayjs().format()
import { useEffect, useState } from 'react'
import { useEventsStore } from '@/store/eventsStore'

export default function Home() {

  const [startingDate, setStartingDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [endingDate, setEndingDate] = useState(dayjs().add(1, 'day').format('YYYY-MM-DD'));
  const [city, setCity] = useState("");
  const [page, setPage] = useState(0);
  const { fetchEvents, isLoading, fetchEventsNewPage } = useEventsStore();

  const validateDates = () => {
    if(dayjs(endingDate).isBefore(dayjs(startingDate))) {
      // Adjust the ending date to be the same as the starting date or later
      setEndingDate(startingDate);
    }
  };



  const handleSearch = async () => {
    // Validate dates before making the search
    validateDates();

    console.log('searching...', city, startingDate, endingDate);
    await fetchEvents({
      city: city,
      startingDate: dayjs(startingDate).toISOString(),
      endingDate: dayjs(endingDate).toISOString(),
      page: page
    });
  };

  const handleSearchNewPage = async () => {
    // Validate dates before making the search
    validateDates();

    console.log('searching...', city, startingDate, endingDate);
    await fetchEventsNewPage({
      city: city,
      startingDate: dayjs(startingDate).toISOString(),
      endingDate: dayjs(endingDate).toISOString(),
      page: page,
    });
  }

  useEffect(() => {
    handleSearch();
  }, [city, startingDate, endingDate]);

  useEffect(() => {
    handleSearchNewPage();
  }, [page]);


  return (
    <>
      <Head>
        <title>Fesa.app | Find Unique Events in The Netherlands, Belgium, and the UK.</title>
        <meta name="description" content="Discover and book the most unique events in Netherlands, Belgium, and the UK with Fesa.app. Your go-to platform for unforgettable experiences." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*<TopNavigation />*/}
      <HomeHeader
        startingDate={startingDate}
        setStartingDate={setStartingDate}
        city={city}
        setCity={setCity}
      />
      <PageLayout>
        <EventsStack />
        <button
          disabled={isLoading}
          onClick={() => setPage(page + 1)}
          className='py-2 bg-black text-white px-4 rounded w-full hover:bg-pink-500 text-sm'>
          {isLoading ? 'Loading...' : 'Load More'}
        </button>
      </PageLayout>

      <Footer />
    </>
  )
}
