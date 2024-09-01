import { useVenuesStore } from '@/store/venueStore'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import QueryDropdown from './bites/QueryDropdown'

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
      <div className='flex lg:py-6 md:py-4 py-2 flex-col 
      items-center justify-center bg-neutral-100'>
        <div className='max-w-5xl md:px-8 w-full md:block hidden mt-4 space-y-4'>
          <h1 className='lg:text-3xl text-xl max-w-3xl text-left tracking-tight font-bold'>
            Discover venues near you
          </h1>
          <div className='max-w-3xl w-full md:block hidden mt-2'>
            <div className='bg-white border border-neutral-300 h-12 rounded w-6/6 flex max-w-xl p-0.5'>
              <QueryDropdown
                city={city}
                setCity={setCity}
              />
            </div>
          </div>
        </div>
        {/* Show on mobile */}
        <div className='max-w-3xl w-full md:hidden block h-full p-2'>
          <h1 className='lg:text-4xl text-2xl max-w-3xl text-center tracking-tight font-bold my-1'>
            Discover events near you
          </h1>
          <div className='bg-white border border-neutral-300 rounded p-0.5 h-full w-6/6 grid grid-col-2'>

            <div className='col-span-2 flex items-center justify-center h-10'>
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
