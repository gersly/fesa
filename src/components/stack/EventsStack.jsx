import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import Link from 'next/link';
import { useEventsStore } from '@/store/eventsStore';

export default function EventsStack() {
  const { events, isLoading } = useEventsStore()

  useEffect(() => {
  }, [events])

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2 lg:my-4 my-2">
      {isLoading ? <>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((event, index) => <div key={index}>
          <div className="rounded-md md:block hidden animate-pulse">
            <div className={`h-[180px] w-full px-4 py-5 rounded-md bg-neutral-200`} />
            <div className='py-2 space-y-1'>
              <div className='bg-neutral-200 rounded-md h-5 w-1/2' />
              <div className='bg-neutral-200 rounded-md h-7' />
              <div className='h-auto overflow-hidden w-full'>
                <div className='bg-neutral-200 h-5 w-1/3' />
                <div className='bg-neutral-200 h-5 w-1/3 rounded-md' />
              </div>
            </div>
          </div>
        </div>)}
      </> :

        <>
          {events?.length < 1 ? <p>No events found.</p> : <>
            {events?.map((event) => (
              <Link
                href={`/events/${event.internal_id}`}
                key={event.id}
                className="bg-white  flex flex-col rounded-md text-neutral-900 cursor-pointer"
              >
                <div className="rounded-md md:block hidden">
                  {/*<div className={`h-[180px] w-full px-4 py-5 rounded-md bg-neutral-100`}
                    style={{
                      backgroundImage: `url('${event.image_link || event.image || 'https://placekitten.com/500/500'}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center center'
                    }}
                  >
                    {event.trending && <span className="inline-flex items-center rounded-md bg-neutral-900 px-2.5 py-1 text-sm font-semibold text-white">
                      🔥 Trending
                    </span>}
                  </div>*/}
                  <div className='py-2 space-y-1'>
                    <p className='text-neutral-500 text-sm'>{dayjs(event.date || event.start_date).format('dddd, DD MMMM YYYY')}</p>
                    <h3 className='text-md hover:text-orange-500 font-medium'>{event.title || event.name}</h3>
                    <div className='h-auto overflow-hidden w-full space-y-2'>
                      <Link href={`/events/${event.district || event.city || 'https://placekitten.com/500/500'}`}>
                        <p className='text-sm text-neutral-700'>{event.district || event.city}</p>
                      </Link>
                      <Link href={`/organiser/${event.venues.internal_id}`}>
                        <p className='text-sm text-neutral-700 hover:text-orange-500'>{event.organisator || event.venue}</p>
                      </Link>

                      {/*<p className='text-sm h-20 text-neutral-500'>{event.description}</p>*/}
                    </div>

                  </div>
                </div>
                {/* Show on mobile */}
                <div className='grid grid-cols-5 gap-2 md:hidden'>
                  {/*<div className={`h-[140px] rounded-lg bg-neutral-100 border border-neutral-200 col-span-2`}
                    style={{
                      backgroundImage: `url('${event.image_link || event.image}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center top'
                    }}
                  >
                  </div>*/}
                  <div className='h-full w-full flex items-start justify-start flex-col col-span-3'>
                    <p className='font-medium hover:text-orange-500'>{event.title || event.name}</p>
                    <p className='text-neutral-500 text-sm'>{dayjs(event.date || event.start_date).format('dddd, DD MMMM YYYY')}</p>
                    <Link href={`/events/${event.district || event.city}`}>
                      <p className='text-sm text-neutral-700'>{event.district || event.city}</p>
                    </Link>
                    <Link href={`/organisers/${event.venues.internal_id}`}>
                      <p className='text-sm text-neutral-700 hover:text-orange-500'>{event.organisator || event.venue}</p>
                    </Link>

                    <div className='flex flex-wrap space-x-1 py-1 items-center justify-start text-xs'>
                      {!event?.trending &&
                        <span className="inline-flex items-center rounded-full border border-neutral-200 px-2 py-0.5 font-normal text-neutral-900 capitalize">
                          🔥 Trending
                        </span>
                      }

                      {event?.price === 0 ?
                        <span className="inline-flex items-center rounded-full border border-neutral-200 px-2 py-0.5 font-normal text-neutral-900 capitalize">
                          Free
                        </span>
                        :
                        <span className="inline-flex items-center rounded-full border border-neutral-200 px-2 py-0.5 font-normal text-neutral-900 capitalize">
                          Paid
                        </span>
                      }

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
