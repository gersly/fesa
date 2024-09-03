//import React, { useEffect, useState } from 'react'
//import dayjs from 'dayjs';
//import Link from 'next/link';
//import { useEventsStore } from '@/store/eventsStore';

//export default function EventsStack() {
//  const { events, isLoading } = useEventsStore()

//  useEffect(() => {
//  }, [events])

//  return (
//    <div className="grid grid-cols-1 gap-1 md:grid-cols-4 sm:grid-cols-2 
//    lg:my-4 my-2 min-h-[500px]">
//      {isLoading ? <>
//        {[1, 2, 3, 4, 5, 6, 7, 8].map((event, index) => <div key={index}>
//          <div className="rounded md:block hidden animate-pulse">
//            <div className={`h-[180px] w-full px-4 py-5 rounded bg-neutral-200`} />
//            <div className='py-2 space-y-1'>
//              <div className='bg-neutral-200 rounded h-5 w-1/2' />
//              <div className='bg-neutral-200 rounded h-7' />
//              <div className='h-auto overflow-hidden w-full'>
//                <div className='bg-neutral-200 h-5 w-1/3' />
//                <div className='bg-neutral-200 h-5 w-1/3 rounded' />
//              </div>
//            </div>
//          </div>
//          {/* Show on mobile */}
//          <div className='grid grid-cols-7 gap-2 md:hidden animate-pulse'>
//            <div className={`h-[94px] px-1 rounded bg-neutral-200 col-span-3`} />
//            <div className='h-full w-full flex items-start justify-start flex-col col-span-4  space-y-1'>
//              <div className='bg-neutral-200 h-5 w-full rounded' />
//              <div className='bg-neutral-200 h-5 w-2/3 rounded' />
//              <div className='bg-neutral-200 h-5 w-1/3 rounded' />
//            </div>
//          </div>
//        </div>)}
//      </> :
//        <>
//          {events?.length < 1 ? <p>No events found.</p> : <>
//            {events?.map((event) => (
//              <Link
//                href={`/events/${event.internal_id}`}
//                key={event.internal_id}
//                className="bg-white flex flex-col rounded text-neutral-900 cursor-pointer"
//              >
//                <div className="rounded md:block hidden">
//                  <div className={`h-[160px] w-full px-4 py-5 rounded bg-neutral-100 border border-neutral-200`}
//                    style={{
//                      backgroundImage: `url('${event.image_link || event.image}')`,
//                      backgroundSize: 'cover',
//                      backgroundPosition: 'center center'
//                    }}
//                  >
//                    <div className='w-full h-full flex items-center justify-center'>
//                      {event.image_link === "no_image" || event.image === "no_image" &&
//                        <p className='text-neutral-400 font-bold text-sm uppercase'>Fesa</p>}
//                    </div>
//                  </div>
//                  <div className='py-2 space-y-1'>
//                    <p className='text-neutral-500 text-xs'>{dayjs(event.date || event.start_date).format('dddd, DD MMMM YYYY')}</p>
//                    <h3 className='text-sm hover:text-orange-500 font-semibold'>{event.title || event.name}</h3>
//                    <div className='h-auto overflow-hidden w-full space-y-1'>
//                      <Link href={`/events/${event.district || event.city}`}>
//                        <p className='text-sm text-neutral-700'>{event.district || event.city}</p>
//                      </Link>
//                      <Link href={`/organiser/${event?.venues?.internal_id}`}>
//                        <p className='text-xs text-neutral-500 hover:text-orange-500'>{event.organisator || event.venue}</p>
//                      </Link>
//                      <p className='text-xs font-semibold'>{event.min_price && event.min_price}</p>
//                    </div>

//                  </div>
//                </div>
//                {/* Show on mobile */}
//                <div className='grid grid-cols-7 gap-2 md:hidden'>
//                  <div className={`h-[84px] px-1 rounded bg-neutral-100 border border-neutral-200 col-span-3`}
//                    style={{
//                      backgroundImage: `url('${event.image_link || event.image}')`,
//                      backgroundSize: 'cover',
//                      backgroundPosition: 'center top'
//                    }}
//                  >
//                  </div>
//                  <div className='h-full w-full block  col-span-4'>
//                    <p className='font-semibold hover:text-orange-500 text-sm truncate pb-1'>{event.title || event.name}</p>
//                    <p className='text-neutral-500 text-xs pb-1'>{dayjs(event.date || event.start_date).format('dddd, DD MMMM YYYY')}</p>
//                    <Link href={`/events/${event.district || event.city}`}>
//                      <p className='text-xs text-neutral-700'>{event.district || event.city}</p>
//                    </Link>
//                    <Link href={`/venues/${event?.venues?.internal_id}`}>
//                      <p className='text-xs text-neutral-500 hover:text-orange-500'>{event.organisator || event?.venue}</p>
//                    </Link>
//                    <p className='text-xs font-semibold pt-2'>{event.min_price && event.min_price}</p>
//                  </div>
//                </div>
//              </Link>
//            ))}
//          </>}
//        </>}
//    </div>
//  )
//}

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
            <div className={`h-[160px] w-full px-4 py-5 rounded bg-neutral-100 border border-neutral-200`}
              style={{
                backgroundImage: `url('${event.image_link || event.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
              }}
            >
              <div className='w-full h-full flex items-center justify-center'>
                {event.image_link === "no_image" || event.image === "no_image" &&
                  <p className='text-neutral-400 font-bold text-sm uppercase'>Fesa</p>}
              </div>
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
            <div className={`h-[84px] px-1 rounded bg-neutral-100 border border-neutral-200 col-span-3`}
              style={{
                backgroundImage: `url('${event.image_link || event.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center top'
              }}
            >
            </div>
            <div className='h-full w-full block  col-span-4'>
              <p className='font-semibold hover:text-orange-500 text-sm truncate pb-1'>{event.title || event.name}</p>
              <p className='text-neutral-500 text-xs pb-1'>{dayjs(event.date || event.start_date).format('dddd, DD MMMM YYYY')}</p>
              <Link href={`/events/${event.district || event.city}`}>
                <p className='text-xs text-neutral-700'>{event.district || event.city}</p>
              </Link>
              <Link href={`/venues/${event?.venues?.internal_id}`}>
                <p className='text-xs text-neutral-500 hover:text-orange-500'>{event.organisator || event?.venue}</p>
              </Link>
              <p className='text-xs font-semibold pt-2'>{event.min_price && event.min_price}</p>
            </div>
          </div>
        </Link>
      );

      // Add sponsored post after every 'postsBeforeAd' posts
      if((index + 1) % postsBeforeAd === 0) {
        eventComponents.push(
          <div key={`sponsored-${index}`} className="bg-yellow-100 p-4 rounded text-neutral-900">
            <p className="text-sm font-semibold">Sponsored Post</p>
            <p className="text-xs">This is a sponsored post.</p>
            {/* You can customize this section further to include an ad image or link */}
          </div>
        );
      }
    });
    return eventComponents;
  }

  return (
    <div className="grid grid-cols-1 gap-1 md:grid-cols-4 sm:grid-cols-2 
    lg:my-4 my-2 min-h-[500px]">
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
          {/* Show on mobile */}
          <div className='grid grid-cols-7 gap-2 md:hidden animate-pulse'>
            <div className={`h-[94px] px-1 rounded bg-neutral-200 col-span-3`} />
            <div className='h-full w-full flex items-start justify-start flex-col col-span-4  space-y-1'>
              <div className='bg-neutral-200 h-5 w-full rounded' />
              <div className='bg-neutral-200 h-5 w-2/3 rounded' />
              <div className='bg-neutral-200 h-5 w-1/3 rounded' />
            </div>
          </div>
        </div>)}
      </> :
        <>
          {events?.length < 1 ? <p>No events found.</p> : renderEvents()}
        </>}
    </div>
  )
}
