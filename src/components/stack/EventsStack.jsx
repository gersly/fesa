import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import Link from 'next/link';
import { useEventsStore } from '@/store/eventsStore';
import axios from 'axios'

dayjs.extend(relativeTime);

export default function EventsStack() {
  const { events, isLoading } = useEventsStore();
  const [ads, setAds] = useState([])

  const postsBeforeAd = 5; // Set this variable to control how many posts before an ad appears.

  const fetchAds = async () => {
    const response = await axios.get('/api/ads')
    // order ads by ad_order(numeral)
    const ads = response.data.sort((a, b) => a.ad_order - b.ad_order)
    setAds(ads)
  }

  //const ads = [
  //  {
  //    id: 1,
  //    name: 'Get the best prices for rides in all countries',
  //    image: 'https://www.travelpayouts.com/blog/wp-content/uploads/2020/10/gettransfer_cover-1.png',
  //    link: 'https://gettransfer.tp.st/1qFmcnaf'
  //  },
  //  {
  //    id: 2,
  //    name: 'Instant connectivity for 200+ countries and regions',
  //    image: 'https://theartoflivinginturkey.com/wp-content/uploads/2023/07/Screenshot-2023-07-11-at-10.00.43.png',
  //    link: 'https://airalo.tp.st/RHtg91ar'
  //  },
  //  {
  //    id: 3,
  //    name: 'Get Travel Insurance for your next trip',
  //    image: 'https://media.licdn.com/dms/image/v2/D4D22AQF9BfyfaPtISA/feedshare-shrink_800/B4DZRBe7GcGUAg-/0/1736265414495?e=2147483647&v=beta&t=SZTu2VZlT4B_zte7waFE0Nql9d8e9g70VaUYA0jP4m0',
  //    link: 'https://tp.media/r?marker=569680&trs=351614&p=5869&u=https%3A%2F%2Fektatraveling.com&campaign_id=225'
  //  },
  //  {

  //  }
  //]

  useEffect(() => {
  }, [events])

  useEffect(() => {
    fetchAds()
  }, [])


  const renderEvents = () => {
    const eventComponents = [];
    events.forEach((event, index) => {
      // Add event component
      eventComponents.push(
        <Link
          href={`/events/${event.internal_id}`}
          key={index}
          className="bg-white flex flex-col rounded text-neutral-900 cursor-pointer"
        >
          <div className="rounded md:block hidden">
            <div className={`h-[160px] w-full px-2 py-1 rounded bg-pink-50  border border-pink-200`}
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
              <h3 className='text-sm hover:text-pink-500 font-semibold'>{event.title || event.name}</h3>
              <p className='text-neutral-500 text-xs pb-1'>{dayjs(event.date || event.start_date).format('dddd, DD MMMM YYYY')}</p>

              <p className='text-xs font-semibold'>{event.min_price && event.min_price}</p>
              {event.ticket_link && (
                <span className='bg-pink-50 text-pink-500 text-xs p-1 rounded'>Tickets available</span>
              )}
              <p className='text-xs text-neutral-500'>{event.organisator || event.venue}</p>
            </div>
          </div>
          {/* Show on mobile */}
          <div className='grid grid-cols-7 gap-2 md:hidden'>
            <div className={`h-[94px] px-1 rounded bg-pink-50 border border-pink-200 col-span-3 flex items-start justify-start`}
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

                <div className='flex items-center justify-start space-x-2 text-neutral-600 text-md'>
                  <p className='text-xs font-semibold'>{event.min_price && event.min_price}</p>
                  {event.ticket_link && (
                    <span className='bg-pink-50 text-pink-500 text-xs p-1 rounded'>Tickets available</span>
                  )}
                </div>
                <p className='text-xs text-neutral-500'>{event.organisator || event?.venue}</p>
              </div>
            </div>
          </div>
        </Link>
      );

      // Add sponsored post after every 'postsBeforeAd' posts
      //if((index + 1) % postsBeforeAd === 0) {
      //  ads.forEach((ad, index) => {
      //    eventComponents.push(
      //      <Link
      //        href={ad.link}
      //        key={`sponsored-${index}`}
      //        className="bg-white flex flex-col rounded text-neutral-900 cursor-pointer"
      //      >
      //        <div className="rounded md:block hidden">
      //          <div className={`h-[160px] w-full px-4 py-5 rounded bg-pink-50 border border-pink-200`}
      //            style={{
      //              backgroundImage: `url('${ad.image}')`,
      //              backgroundSize: 'cover',
      //              backgroundPosition: 'center center'
      //            }}
      //          />
      //          <div className='py-2 space-y-1'>
      //            <p className='text-xs text-neutral-500'>Sponsored</p>
      //            <h3 className='text-sm hover:text-pink-500 font-semibold'>{ad.name}</h3>
      //          </div>
      //        </div>
      //        {/* Show on mobile */}
      //        <div className='grid grid-cols-7 gap-2 md:hidden'>
      //          <div className={`h-[94px] px-1 rounded bg-pink-50 border border-pink-200 col-span-3 flex items-center justify-center`}
      //            style={{
      //              backgroundImage: `url('${ad.image}')`,
      //              backgroundSize: 'cover',
      //              backgroundPosition: 'center top'
      //            }}
      //          >
      //          </div>
      //          <div className='h-full w-full flex flex-col justify-between gap-4 col-span-4'>
      //            <div>
      //              <p className='font-semibold hover:text-pink-500 text-sm pb-1'>{ad.name}</p>
      //              <p className='text-neutral-500 text-xs pb-1'>Sponsored</p>
      //            </div>
      //          </div>
      //        </div>
      //      </Link>
      //    );
      //  });
      //}

      // Add sponsored post after every 'postsBeforeAd' posts
      if((index + 1) % postsBeforeAd === 0) {
        const adIndex = Math.floor((index / postsBeforeAd) % ads.length); // Ensure a valid index
        const ad = ads[adIndex];

        if(ad) {
          eventComponents.push(
            <Link
              href={ad?.affiliate_link || '#'}
              key={`sponsored-${index}`}
              target='_blank'
              className="bg-white flex flex-col rounded text-neutral-900 cursor-pointer"
            >
              <div className="rounded md:block hidden">
                <div className={`h-[160px] w-full px-4 py-5 rounded bg-pink-50 border border-pink-200`}
                  style={{
                    backgroundImage: `url('${ad?.image_link}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center'
                  }}
                />
                <div className='py-2 space-y-1'>
                  <p className='text-xs text-neutral-500'>Sponsored</p>
                  <h3 className='text-sm hover:text-pink-500 font-semibold'>{ad?.name}</h3>
                  <p className='text-xs text-neutral-500'>{ad?.description}</p>
                </div>
              </div>
              {/* Show on mobile */}
              <div className='grid grid-cols-7 gap-2 md:hidden'>
                <div className={`h-[94px] px-1 rounded bg-pink-50 border border-pink-200 col-span-3 flex items-center justify-center`}
                  style={{
                    backgroundImage: `url('${ad?.image_link}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top'
                  }}
                />
                <div className='h-full w-full flex flex-col justify-between gap-4 col-span-4'>
                  <div>
                    <p className='font-semibold hover:text-pink-500 text-sm pb-1'>{ad?.name}</p>
                    <p className='text-xs text-neutral-500'>{ad?.description}</p>
                    <p className='text-neutral-500 text-xs pb-1'>Sponsored</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        }
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
