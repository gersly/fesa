import PageLayout from '@/components/layouts/PageLayout'
import TopNavigation from '@/components/navigation/TopNavigation'
import { ArrowLeftIcon, ClockIcon } from '@heroicons/react/24/outline'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { Globe, PhoneCall, Pin, SendEmail } from '@icon-park/react'
import { useVenuesStore } from '@/store/venueStore'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import EventsStack from '@/components/stack/EventsStack'
import Link from 'next/link'
import { MapComponent } from '@/components/maps/map'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs().format()

export default function EventDetailPage() {
  const router = useRouter()
  const { id } = router.query
  const { fetchVenue, activeVenue } = useVenuesStore()
  const today = dayjs().utc();
  useEffect(() => {
    id && fetchVenue(id, today.format('YYYY-MM-DD'))
  }, [id])

  return (
    <div className='bg-neutral-50 min-h-screen pb-10'>
      <Head>
        <title>{activeVenue?.title || activeVenue?.name || 'Find venues on Fesa.app'} | Fesa.app</title>
        <meta name="description" content={'Find venues in Paramaribo, Amsterdam, and Rotterdam on Fesa'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopNavigation />
      <PageLayout>
        <div className='flex items-center justify-start w-full pb-2'>
          <button
            onClick={() => router.back()}
            className='text-neutral-600 text-md rounded-full p-2 bg-white shadow-md border border-neutral-100'>
            <ArrowLeftIcon className='w-5 h-5' />
          </button>
        </div>
        <div className='flex items-center justify-center flex-col w-full rounded'>
          {activeVenue?.image?.length > 10 && (
            <div className='md:h-[420px] border md:bg-contain bg-cover md:bg-no-repeat h-[220px] bg-neutral-200 w-full rounded'
              style={{
                backgroundImage: `url('${activeVenue?.image}')`,
                //backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                height: '220px',
                width: '220px'
              }}
            />
          )}
          <div className='space-y-2 w-full bg-white shadow-md md:p-4 p-2 my-2 rounded'>
            <h1 className='md:text-3xl text-xl font-semibold'>{activeVenue?.name}</h1>
            <p className='md:text-md text-sm'>{activeVenue?.description}</p>

            <div className='flex items-center justify-start space-x-1 text-neutral-600 text-md'>
              <Pin className='w-5 h-5' />
              <p className='text-md'>{activeVenue?.street || '-'}</p>
            </div>
            <div className='flex items-center justify-start space-x-1 text-neutral-600 text-md'>
              <Globe className='w-5 h-5' />
              <a href={activeVenue?.website} target='_blank' rel='noreferrer' className='text-md hover:text-pink-500'>{activeVenue?.website || '-'}</a>
            </div>
            <div className='flex items-center justify-start space-x-1 text-neutral-600 text-md'>
              <PhoneCall className='w-5 h-5' />
              <p className='text-md'>{activeVenue?.phone || '-'}</p>
            </div>
            <div className='flex items-center justify-start space-x-1 text-neutral-600 text-md'>
              <SendEmail className='w-5 h-5' />
              <p className='text-md lowercase'>{activeVenue?.email || '-'}</p>
            </div>
            <div className='flex items-center justify-start space-x-1 text-neutral-600 text-md'>
              <MapComponent
                center={{
                  lat: parseFloat(activeVenue?.latitude),
                  lng: parseFloat(activeVenue?.longitude)
                }}
              />
            </div>

          </div>

          <div className='w-full bg-white shadow-md my-2 rounded'>
            <h2 className='text-lg font-semibold p-4 px-2'>Events at {activeVenue?.name}</h2>
            <div className="grid grid-cols-1 gap-1 md:grid-cols-3 sm:grid-cols-2 
          lg:my-4 my-2 h-auto p-2">
              {activeVenue?.events?.length === 0 ? (
                <div className='p-4 px-2'>
                  <p>No events found at {activeVenue?.name}</p>
                </div>
              ) : <>

                {activeVenue?.events?.map((event, index) => <Link
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
                      <div className='h-auto overflow-hidden w-full space-y-1'>
                        {/*<Link href={`/events/city/${event.district || event.city}`}>
                  <p className='text-sm text-neutral-700'>{event.district || event.city}</p>
                </Link>*/}
                        <Link href={`/venues/${event?.venues?.internal_id}`}>
                          <p className='text-xs text-neutral-500 hover:text-pink-500'>{event.organisator || event.venue}</p>
                        </Link>
                        <p className='text-xs font-semibold'>{event.min_price && event.min_price}</p>
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
                    <div className='h-full w-full block col-span-4'>
                      <p className='font-semibold hover:text-pink-500 text-sm truncate pb-1'>{event.title || event.name}</p>
                      <p className='text-neutral-500 text-xs pb-1'>{dayjs(event.date || event.start_date).format('dddd, DD MMMM YYYY')}</p>
                      <Link href={`/events/${event.district || event.city}`}>
                        <p className='text-xs text-neutral-700'>{event.district || event.city}</p>
                      </Link>
                      <Link href={`/venues/${event?.venues?.internal_id}`}>
                        <p className='text-xs text-neutral-500 hover:text-pink-500'>{event.organisator || event?.venue}</p>
                      </Link>
                      <p className='text-xs font-semibold pt-2'>{event.min_price && event.min_price}</p>
                    </div>
                  </div>
                </Link>
                )}
              </>
              }
            </div>
          </div>
        </div>
      </PageLayout >
    </div >
  )
}
