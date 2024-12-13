import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import Link from 'next/link';
import { useVenuesStore } from '@/store/venueStore';


export default function VenuesStack() {
  const { venues, isLoading } = useVenuesStore();

  useEffect(() => {
  }, [venues])

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 sm:grid-cols-2 lg:my-4 my-2">
      {isLoading ? <>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((event, index) => <div key={index}>
          <div className="rounded md:block hidden animate-pulse">
            <div className={`h-[180px] w-full px-4 py-5 rounded bg-neutral-200`} />
            <div className='py-2 space-y-1'>
              <div className='bg-neutral-200 rounded h-5 w-1/2' />
              <div className='bg-neutral-200 rounded h-7' />
              <div className='h-auto overflow-hidden w-full'>
                <div className='bg-neutral-200 h-5 w-1/3' />
                <div className='bg-neutral-200 h-5 w-1/3 rounded' />
              </div>
            </div>
          </div>
        </div>)}
      </> :
        <>
          {venues?.length < 1 ? <p>No venues found.</p> : <>
            {venues?.map((venue) => (
              <Link
                href={`/venues/${venue.internal_id}`}
                key={venue.id}
                className="bg-white  flex flex-col rounded text-neutral-900 cursor-pointer
                 hover:border-neutral-200 border border-white p-1"
              >
                <div className="rounded md:block hidden">
                  <div className={`h-[180px] w-full px-4 py-5 rounded bg-neutral-100`}
                    style={{
                      backgroundImage: `url('${venue.image || 'https://placekitten.com/500/500'}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center center'
                    }}
                  >
                    {venue.trending && <span className="inline-flex items-center rounded bg-neutral-900 px-2.5 py-1 text-sm font-semibold text-white">
                      🔥 Trending
                    </span>}
                  </div>
                  <div className='py-2 space-y-1'>
                    <h3 className='text-md hover:text-pink-500 font-bold'>{venue.name}</h3>
                    <div className='h-auto overflow-hidden w-full flex items-start justify-between flex-col'>
                      <p className='text-sm text-neutral-700 capitalize'>{venue.street || venue.city}</p>
                      {/*<p className='text-sm text-neutral-700 capitalize'>{venue.country}</p>*/}

                    </div>
                  </div>
                </div>
                <div className="rounded md:hidden block">
                  <div className={`h-[180px] w-full px-4 py-5 rounded bg-neutral-100`}
                    style={{
                      backgroundImage: `url('${venue.image_link || venue.image || 'https://placekitten.com/500/500'}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center center'
                    }}
                  >
                    {venue.trending && <span className="inline-flex items-center rounded bg-neutral-900 px-2.5 py-1 text-sm font-semibold text-white">
                      🔥 Trending
                    </span>}
                  </div>
                  <div className='py-2 space-y-1'>
                    <h3 className='text-md hover:text-pink-500 font-bold'>{venue.name}</h3>
                    <div className='h-auto overflow-hidden w-full space-y-1'>
                      <p className='text-sm text-neutral-700 capitalize'>{venue.city}</p>
                      <p className='text-sm text-neutral-700 capitalize'>{venue.country}</p>
                      {/*<Link href={`/organiser/${venue.internal_id}`}>
                        <p className='text-sm text-neutral-700 hover:text-pink-500'>See events</p>
                      </Link>*/}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </>}
        </>}
    </div>
  )
}