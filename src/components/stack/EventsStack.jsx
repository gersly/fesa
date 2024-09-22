import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import Link from 'next/link';
import { useEventsStore } from '@/store/eventsStore';

export default function EventsStack() {
  const { events, isLoading } = useEventsStore();

  const postsBeforeAd = 10; // Set this variable to control how many posts before an ad appears.

  useEffect(() => {
  }, [events])

  const renderEvents = () => {
    const eventComponents = [];
    events.forEach((event, index) => {
      // Add event component
      eventComponents.push(
        <Link
          href={`/events/${event.internal_id}`}
          key={event.internal_id}
          className="bg-white flex flex-col rounded text-neutral-900 cursor-pointer"
        >
          <div className="rounded md:block hidden">
            <div className={`h-[160px] w-full px-4 py-5 rounded bg-pink-50 border border-pink-200`}
              style={{
                backgroundImage: event.image !== 'no_image' && `url('${event.image_link || event.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
              }}
            >
              <div className='w-full h-full flex items-center justify-center'>
                {event.image_link === "no_image" || event.image === "no_image" &&
                  <p className='text-pink-200 font-bold font-heading text-sm uppercase'>Fesa</p>}
              </div>
            </div>
            <div className='py-2 space-y-1'>
              <p className='text-neutral-500 text-xs'>{dayjs(event.date || event.start_date).format('dddd, DD MMMM YYYY')}</p>
              <h3 className='text-sm hover:text-pink-500 font-semibold'>{event.title || event.name}</h3>
              <p className='text-xs font-semibold'>{event.min_price && event.min_price}</p>
              <div className='h-auto overflow-hidden w-full space-y-1'>
                <Link href={`/venues/${event?.venues?.internal_id}`}>
                  <p className='text-xs text-neutral-500 hover:text-pink-500'>{event.organisator || event.venue}</p>
                </Link>
              </div>
            </div>
          </div>
          {/* Show on mobile */}
          <div className='grid grid-cols-7 gap-2 md:hidden'>
            <div className={`h-[94px] px-1 rounded bg-pink-50 border border-pink-200 col-span-3 flex items-center justify-center`}
              style={{
                backgroundImage: event.image !== 'no_image' && `url('${event.image_link || event.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center top'
              }}
            >
              {event.image_link === 'no_image' || event.image === 'no_image' && <p className='font-heading text-pink-200 text-sm uppercase'>Fesa</p>}
            </div>
            <div className='h-full w-full flex flex-col justify-between gap-4 col-span-4'>
              <div>
                <p className='font-semibold hover:text-pink-500 text-sm truncate pb-1'>{event.title || event.name}</p>
                <p className='text-neutral-500 text-xs pb-1'>{dayjs(event.date || event.start_date).format('dddd, DD MMMM YYYY')}</p>

                <p className='text-xs font-semibold'>{event.min_price && event.min_price}</p>
              </div>
              <Link href={`/venues/${event?.venues?.internal_id}`}>
                <p className='text-xs text-neutral-500 hover:text-pink-500'>{event.organisator || event?.venue}</p>
              </Link>
            </div>
          </div>
        </Link>
      );

      // Add sponsored post after every 'postsBeforeAd' posts
      if((index + 1) % postsBeforeAd === 0) {
        eventComponents.push(
          <div key={`sponsored-${index}`} className="h-auto rounded text-neutral-900 sm:my-0 my-1">
            <div className='bg-pink-50 border border-pink-200
             sm:h-[160px] h-[84px] rounded flex items-center justify-center'>
              <p className='font-heading text-pink-200 text-sm uppercase'>Fesa</p>
            </div>
            <div className='py-1 space-y-0.5'>
              <span className='text-xs text-neutral-500'>Sponsored</span>
              <p className="text-sm font-semibold">Advertise with us</p>
            </div>
          </div>
        );
      }
    });
    return eventComponents;
  }

  return (
    <div className="grid grid-cols-1 gap-1 md:grid-cols-3 sm:grid-cols-2 
    lg:my-4 my-2 min-h-[500px]">
      {events?.length < 1 ? <>
        {isLoading ? null : <p>No events found.</p>}
      </> : renderEvents()}
      {isLoading ? <>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((event, index) => <div key={index}>
          <div className="rounded md:block hidden animate-pulse">
            <div className={`h-[160px] w-full px-4 py-5 rounded bg-neutral-200`} />
            <div className='py-2 space-y-1'>
              <div className='bg-neutral-200 rounded h-5 w-1/2' />
              <div className='bg-neutral-200 rounded h-7' />
              <div className='h-auto overflow-hidden w-full'>
                <div className='bg-neutral-200 h-5 w-1/3' />
              </div>
            </div>
          </div>
          {/* Show on mobile */}
          <div className='grid grid-cols-7 gap-2 md:hidden animate-pulse'>
            <div className={`h-[94px] px-1 rounded bg-neutral-200 col-span-3`} />
            <div className='h-full w-full flex items-start justify-start flex-col col-span-4 space-y-1'>
              <div className='bg-neutral-200 h-5 w-full rounded' />
              <div className='bg-neutral-200 h-5 w-2/3 rounded' />
              <div className='bg-neutral-200 h-5 w-1/3 rounded' />
            </div>
          </div>
        </div>)} </>
        : null}
    </div>
  )
}
