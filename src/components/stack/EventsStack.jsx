import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import Link from 'next/link';
import { useEventsStore } from '@/store/eventsStore';

export default function EventsStack() {
  const { events, isLoading } = useEventsStore()

  useEffect(() => {
  }, [events])

  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-3 sm:grid-cols-2 lg:my-4 my-2 min-h-[500px]">
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
          {/* Show on mobile */}
          <div className='grid grid-cols-7 gap-2 md:hidden animate-pulse'>
            <div className={`h-[94px] px-1 rounded-md bg-neutral-200 col-span-3`} />
            <div className='h-full w-full flex items-start justify-start flex-col col-span-4  space-y-1'>
              <div className='bg-neutral-200 h-5 w-full rounded' />
              <div className='bg-neutral-200 h-5 w-2/3 rounded' />
              <div className='bg-neutral-200 h-5 w-1/3 rounded' />
            </div>
          </div>
        </div>)}
      </> :
        <>
          {events?.length < 1 ? <p>No events found.</p> : <>
            {events?.map((event) => (
              <Link
                href={`/events/${event.internal_id}`}
                key={event.internal_id}
                className="bg-white flex flex-col rounded-md text-neutral-900 cursor-pointer"
              >
                <div className="rounded-md md:block hidden">
                  <div className={`h-[160px] w-full px-4 py-5 rounded-md bg-neutral-100 border border-neutral-200`}
                    style={{
                      backgroundImage: `url('${event.image_link || event.image}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center center'
                    }}
                  >
                    {event.trending && <span className="inline-flex items-center rounded-md bg-neutral-900 px-2.5 py-1 text-sm font-semibold text-white">
                      🔥 Trending
                    </span>}
                  </div>
                  <div className='py-2 space-y-1'>
                    <p className='text-neutral-500 text-xs'>{dayjs(event.date || event.start_date).format('dddd, DD MMMM YYYY')}</p>
                    <h3 className='text-sm hover:text-orange-500 font-semibold'>{event.title || event.name}</h3>
                    <div className='h-auto overflow-hidden w-full space-y-1'>
                      <Link href={`/events/${event.district || event.city}`}>
                        <p className='text-sm text-neutral-700'>{event.district || event.city}</p>
                      </Link>
                      <Link href={`/organiser/${event?.venues?.internal_id}`}>
                        <p className='text-xs text-neutral-500 hover:text-orange-500'>{event.organisator || event.venue}</p>
                      </Link>
                      <p className='text-xs font-semibold'>{event.min_price && event.min_price}</p>
                    </div>

                  </div>
                </div>
                {/* Show on mobile */}
                <div className='grid grid-cols-7 gap-2 md:hidden'>
                  <div className={`h-[94px] px-1 rounded-md bg-neutral-100 border border-neutral-200 col-span-3`}
                    style={{
                      backgroundImage: `url('${event.image_link || event.image}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center top'
                    }}
                  >
                    <span className="inline-flex items-center rounded bg-black py-0.5 px-1 text-xs font-normal text-white">{event.min_price && `${event.min_price}`}</span>
                  </div>
                  <div className='h-full w-full flex items-start justify-start flex-col col-span-4  space-y-1'>
                    <p className='font-semibold hover:text-orange-500 text-sm'>{event.title || event.name}</p>
                    <p className='text-neutral-500 text-xs'>{dayjs(event.date || event.start_date).format('dddd, DD MMMM YYYY')}</p>
                    <Link href={`/events/${event.district || event.city}`}>
                      <p className='text-xs text-neutral-700'>{event.district || event.city}</p>
                    </Link>
                    <Link href={`/venues/${event?.venues?.internal_id}`}>
                      <p className='text-xs text-neutral-500 hover:text-orange-500'>{event.organisator || event?.venue}</p>
                    </Link>

                  </div>
                </div>
              </Link>
            ))}
          </>}
        </>}
    </div>
  )
}
