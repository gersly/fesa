import { useVenuesStore } from '@/store/venueStore'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import QueryDropdown from './bites/QueryDropdown'
import TopNavigation from '../navigation/TopNavigation'

export default function OrganisersHeader() {

  const [city, setCity] = useState("")
  const { fetchVenues } = useVenuesStore()

  const handleSearch = async () => {
    console.log('searching...',
      city
    )
    await fetchVenues({
      city: city,
    })
  }

  useEffect(() => {
    handleSearch()
  }, [city])

  return (
    <>
      <div className='flex lg:pb-10 bg-black md:pb-8 flex-col grayscale-0 items-center justify-center '
      //style={{
      //  background: `url("${backgrounds[3]}")`,
      //  backgroundPosition: 'center center',
      //  backgroundSize: 'cover',
      //}}
      >
        <TopNavigation />
        <div className='max-w-5xl md:px-8 w-full md:block hidden mt-4 space-y-4'>
          <h1 className='lg:text-4xl md:text-3xl text-2xl text-left text-white font-bold font-heading'>
            Discover venues
          </h1>
          <div className='bg-white border border-neutral-300 h-10 rounded w-6/6 md:max-w-lg w-full flex'>
            <QueryDropdown
              city={city}
              setCity={setCity}
            />
          </div>
        </div>
        {/* Show on mobile */}
        <div className='max-w-3xl w-full md:hidden h-full px-2 py-4 space-y-2 flex flex-col items-start justify-end'>
          <h2 className='lg:text-5xl md:text-3xl text-2xl text-left text-white font-bold font-heading'>
            Discover venues
          </h2>
          <div className='bg-white border border-neutral-300 rounded p-0.5 h-10 w-6/6 w-full flex'>
            <div className='w-full flex items-center justify-start max-h-10'>
              <QueryDropdown
                city={city}
                setCity={setCity}
              />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
