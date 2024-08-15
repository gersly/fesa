import { useVenuesStore } from '@/store/venueStore'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'

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
  }, [])

  return (
    <>

      <div className='flex lg:py-14 py-10 flex-col 
      items-center justify-center bg-neutral-100'>
        <h1 className='lg:text-4xl text-2xl max-w-4xl text-center tracking-tight'>
          Discover venues and organisers near you
        </h1>
        <div className='max-w-3xl w-full md:block hidden mt-8'>
          <div className='bg-white border border-neutral-300 h-14 rounded-full w-6/6 flex'>


          </div>
        </div>
        {/* Show on mobile */}
        <div className='max-w-3xl w-full md:hidden block mt-8 h-full p-4'>
          <div className='bg-white border border-neutral-300 rounded-lg p-1 h-full w-6/6 grid grid-col-1'>

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
