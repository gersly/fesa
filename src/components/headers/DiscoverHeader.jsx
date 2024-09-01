import React, { useState, useEffect }
  from 'react'
import dayjs from 'dayjs' // ES 2015
import QueryDropdown from './bites/QueryDropdown'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useEventsStore } from '@/store/eventsStore'
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
      <div className='flex lg:py-6 md:py-4 py-2 flex-col 
      items-center justify-center bg-neutral-100'>
        <div className='max-w-5xl md:px-8 w-full md:block hidden mt-4 space-y-4'>
          <h1 className='lg:text-3xl text-xl max-w-3xl text-left tracking-tight font-bold'>
            Discover events near you
          </h1>
          <div className='max-w-3xl w-full md:block hidden mt-2'>
            <div className='bg-white border border-neutral-300 h-12 rounded-md w-6/6 flex max-w-xl p-0.5'>
              <QueryDropdown
                city={city}
                setCity={setCity}
              />
              <div className='lg:w-3/6 w-3/6 flex items-center justify-center rounded-r-md'>
                <input
                  className='w-full h-full px-2 border-l outline-none'
                  type='date'
                  value={startingDate}
                  onChange={(e) => setStartingDate(e.target.value)}
                  defaultValue={dayjs().format('YYYY-MM-DD')}
                />
                {/*<input
                className='w-1/2 h-full px-2 border-r outline-none rounded-r-full'
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
        </div>
        {/* Show on mobile */}
        <div className='max-w-3xl w-full md:hidden block h-full p-2'>
          <h1 className='lg:text-4xl text-2xl max-w-3xl text-center tracking-tight font-bold my-1'>
            Discover events near you
          </h1>
          <div className='bg-white border border-neutral-300 rounded-md p-0.5 h-full w-6/6 grid grid-col-2'>

            <div className='col-span-2 flex items-center justify-center h-10'>
              <QueryDropdown
                city={city}
                setCity={setCity}
              />
              <input
                className='w-full h-full px-2  outline-none'
                type='date'
                value={startingDate}
                onChange={(e) => setStartingDate(e.target.value)}
                defaultValue={dayjs().format('YYYY-MM-DD')}
              />
              {/*<input
                className='w-full h-full px-2 outline-none '
                type='date'
                value={endingDate}
                onChange={(e) => setEndingDate(e.target.value)}
                defaultValue={dayjs().format('YYYY-MM-DD')}
              />*/}
            </div>
            {/*<div className='col-span-2 flex items-center justify-center h-14'>
              <span className="w-full h-full p-1 flex items-center justify-center  bg-white">
                <button
                  onClick={() => handleSearch()}
                  className='
              font-medium bg-neutral-900 flex items-center  justify-center space-x-2 text-white h-full w-full rounded-full hover:bg-neutral-800'>
                  <MagnifyingGlassIcon className='w-5 h-5' /><p>Search</p>
                </button>
              </span>
            </div>*/}
          </div>
        </div>
      </div>
    </>
  )
}
