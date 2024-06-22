import React, { useState, useEffect }
  from 'react'
import dayjs from 'dayjs' // ES 2015
import QueryDropdown from './bites/QueryDropdown'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
dayjs().format()

export default function DiscoverHeader() {
  const [startingDate, setStartingDate] = useState(dayjs().format('YYYY-MM-DD'))
  const [endingDate, setEndingDate] = useState(dayjs().add(1, 'day').format('YYYY-MM-DD'))
  const [query, setQuery] = useState("")

  useEffect(() => {
  }, [])

  return (
    <>
      <div className='flex lg:py-14 py-10 flex-col items-center justify-center bg-neutral-100'>
        <h1 className='text-4xl max-w-4xl text-center'>
          Discover events near you
        </h1>
        <div className='max-w-3xl w-full md:block hidden mt-8'>
          <div className='bg-white border border-neutral-300 h-14 rounded-full w-6/6 flex'>
            <QueryDropdown
              query={query}
              setQuery={setQuery}
            />
            <div className='lg:w-4/6 w-4/6 flex items-center justify-center'>
              <input
                className='w-1/3 h-full px-2 border-x outline-none'
                type='date'
                value={startingDate}
                onChange={(e) => setStartingDate(e.target.value)}
                defaultValue={dayjs().format('YYYY-MM-DD')}
              />
              <input
                className='w-1/3 h-full px-2 border-r outline-none'
                type='date'
                value={endingDate}
                onChange={(e) => setEndingDate(e.target.value)}
                defaultValue={dayjs().format('YYYY-MM-DD')}
              />
              <span className="w-1/3 h-full p-1 flex items-center justify-center rounded-r-full bg-white">
                <button
                  className='
              font-medium bg-neutral-900 flex items-center  justify-center space-x-2 text-white h-full w-full rounded-full hover:bg-neutral-800'>
                  <MagnifyingGlassIcon className='w-5 h-5' /><p>Search</p>
                </button>
              </span>
            </div>
          </div>
        </div>
        {/* Show on mobile */}
        <div className='max-w-3xl w-full md:hidden block mt-8 h-full p-4'>
          <div className='bg-white border border-neutral-300 rounded-lg p-1 h-full w-6/6 grid grid-col-1'>
            <div className='col-span-1 flex items-center justify-center h-14'>
              <QueryDropdown
                query={query}
                setQuery={setQuery}
              />
            </div>
            <div className='col-span-1 flex items-center justify-center h-14'>
              <input
                className='w-full h-full px-2  outline-none'
                type='date'
                value={startingDate}
                onChange={(e) => setStartingDate(e.target.value)}
                defaultValue={dayjs().format('YYYY-MM-DD')}
              />
            </div>
            <div className='col-span-1 flex items-center justify-center h-14'>
              <input
                className='w-full h-full px-2 outline-none '
                type='date'
                value={endingDate}
                onChange={(e) => setEndingDate(e.target.value)}
                defaultValue={dayjs().format('YYYY-MM-DD')}
              />
            </div>
            <div className='col-span-1 flex items-center justify-center h-14'>
              <span className="w-full h-full p-1 flex items-center justify-center  bg-white">
                <button
                  className='
              font-medium bg-neutral-900 flex items-center  justify-center space-x-2 text-white h-full w-full rounded-full hover:bg-neutral-800'>
                  <MagnifyingGlassIcon className='w-5 h-5' /><p>Search</p>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
