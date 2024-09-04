import React, { useState, useEffect }
  from 'react'
import dayjs from 'dayjs' // ES 2015
import QueryDropdown from './bites/QueryDropdown'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useEventsStore } from '@/store/eventsStore'
import TopNavigation from '../navigation/TopNavigation'
dayjs().format()

export default function DiscoverHeader() {
  const [startingDate, setStartingDate] = useState(dayjs().format('YYYY-MM-DD'))
  const [endingDate, setEndingDate] = useState(dayjs().add(1, 'day').format('YYYY-MM-DD'))
  const [city, setCity] = useState("")
  const { fetchEvents } = useEventsStore()


  const handleSearch = async () => {
    console.log('searching...',
      city, startingDate, endingDate
    )
    await fetchEvents({
      city: city,
      startingDate: dayjs(startingDate).toISOString(),
      endingDate: dayjs(endingDate).toISOString()
    })
  }

  useEffect(() => {
    handleSearch()
  }, [city, startingDate])

  return (
    <>
      <div className='flex lg:pb-10 bg-black md:pb-8 flex-col grayscale-0 items-center justify-center '
        style={{
          background: `url("/banner.png")`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      >
        <TopNavigation />
        <div className='max-w-5xl md:px-8 w-full md:block hidden mt-4 space-y-4'>
          <h1 className='lg:text-4xl md:text-3xl text-2xl text-left text-white font-bold font-heading'>
            Discover events
          </h1>
          <div className='bg-white border border-neutral-300 h-10 rounded w-6/6 md:max-w-lg w-full flex'>
            <QueryDropdown
              city={city}
              setCity={setCity}
            />
            <div className='lg:w-3/6 w-3/6 flex items-center justify-center rounded'>
              <input
                className='w-full h-full px-2 border-l rounded-r p-0.5 outline-none'
                type='date'
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
          <h2 className='lg:text-5xl md:text-3xl text-2xl text-left text-white font-bold font-heading'>
            Discover events
          </h2>
          <div className='bg-white border border-neutral-300 rounded p-0.5 h-10 w-6/6 w-full flex'>
            <div className='w-full flex items-center justify-center max-h-10'>
              <QueryDropdown
                city={city}
                setCity={setCity}
              />
              <input
                className='w-3/6 h-full px-2 border-l border-neutral-300 outline-none'
                type='date'
                value={startingDate}
                onChange={(e) => setStartingDate(e.target.value)}
                defaultValue={dayjs().format('YYYY-MM-DD')}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
