import DiscoverHeader from '@/components/headers/DiscoverHeader'
import PageLayout from '@/components/layouts/PageLayout'
import Footer from '@/components/navigation/Footer'
import Tabs from '@/components/navigation/Tabs'
import TopNavigation from '@/components/navigation/TopNavigation'
import EventsStack from '@/components/stack/EventsStack'
import Head from 'next/head'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { useEventsStore } from '@/store/eventsStore'
import Script from 'next/script'
import { useRouter } from 'next/navigation'
dayjs().format()

export default function EventsPage() {
  const [startingDate, setStartingDate] = useState(dayjs().subtract(1, 'day').format('YYYY-MM-DD'))
  const [endingDate, setEndingDate] = useState(dayjs().add(1, 'day').format('YYYY-MM-DD'))
  const [city, setCity] = useState("")
  const [page, setPage] = useState(0)
  const { fetchEvents, isLoading, fetchEventsNewPage } = useEventsStore()
  const router = useRouter()

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
  }, [startingDate])

  useEffect(() => {
    handleSearchNewPage()
  }, [page])

  useEffect(() => {
    if(city.length > 1) {
      router.push({
        pathname: '/city/' + city.toLowerCase()
      })
    }
  }, [city])

  return (
    <>
      <Head>
        <title>Events near me | Fesa.app</title>
        <meta name="description" content="Find events near me on Fesa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DiscoverHeader
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
